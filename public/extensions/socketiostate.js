import daily from "./core.js";
import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
let state = {};
let updateHandlers = [];
let call = {};

let props, socket;

function applyStateUpdate(newState) {
  // also used internally when we receive a state update
  // from the messaging channel.
  Object.assign(state, newState);
  for (var i = 0; i < updateHandlers.length; i++) {
    // try calling handlers with just the updated state
    // to make change detection logic easier
    updateHandlers[i](newState);
  }
}

function broadcastStateUpdate(newState) {
  socket.emit("update", newState);
}

export default {
  configure: function (p) {
    props = p;
    socket = io(props.url);
    // listen for requests for state from new peers
    socket.on("state", (msg) => {
      console.log("got state update from socket:", msg);
      applyStateUpdate(msg);
    });
  },

  onStateUpdate: function (callback) {
    updateHandlers.push(callback);
    // go ahead and send the current state
    callback(state);
  },

  updateState: function (newState, broadcast = true) {
    // used for an extension to request a state update,
    // which will also get broadcast to everybody else on the call.
    applyStateUpdate(newState);
    if (broadcast) {
      broadcastStateUpdate(newState);
    }
  },

  state,
};

daily.beforeCreateFrame((parentEl, properties) => {
  // do this before in case the socket's telling us what
  // room to connect to, etc

  return [parentEl, properties];
});
