import daily from "./core.js";
import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
let state = {};
let updateHandlers = {};
let call = {};

let props, socket;

function applyStateUpdate(ns) {
  // also used internally when we receive a state update
  // from the messaging channel.
  for (const key of Object.keys(ns)) {
    let newState = ns[key];
    if (!state[key]) {
      state[key] = {};
    }
    if (!updateHandlers[key]) {
      updateHandlers[key] = [];
    }
    Object.assign(state[key], newState);
    for (var i = 0; i < updateHandlers[key].length; i++) {
      // try calling handlers with just the updated state
      // to make change detection logic easier
      updateHandlers[key][i](newState);
    }
  }
}

function broadcastStateUpdate(key, newState) {
  let update = {};
  update[key] = newState;
  console.log("in broadcast, socket is ", socket);
  socket.emit("update", update);
}

export default {
  connect: function (p) {
    console.log("socket connecting");
    props = p;
    socket = io(props.url);
    // listen for requests for state from new peers
    socket.on("state", (msg) => {
      console.log("got state from server: ", msg);
      applyStateUpdate(msg);
    });
  },

  onStateUpdate: function (key, callback) {
    if (!updateHandlers[key]) {
      updateHandlers[key] = [];
    }
    updateHandlers[key].push(callback);
    // go ahead and send the current state to initialize
    // whatever module is using this
    //callback(state);
  },

  updateState: function (key, newState, broadcast = true) {
    // used for an extension to request a state update,
    // which will also get broadcast to everybody else on the call.
    applyStateUpdate(key, newState);
    if (broadcast) {
      broadcastStateUpdate(key, newState);
    }
  },

  state,
};

daily.beforeCreateFrame((parentEl, properties) => {
  // do this before in case the socket's telling us what
  // room to connect to, etc

  return [parentEl, properties];
});
