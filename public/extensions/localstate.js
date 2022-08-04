import daily from "./core.js";

let state = {};
let updateHandlers = [];
let call = {};
let waitingForSync = false;
const SYNC_MAX_WAITING_TIME = 7000;
const UPDATE_MSG = "update-call-state";
const REQUEST_MSG = "request-call-state";

// This implements a basic state manager with a similar interface
// to callstate and/or socketstate to enable 'private/public'
// extensions more easily.

/* Public interface */
export default {
  onCallStateUpdate: function (key, callback) {
    if (!updateHandlers[key]) {
      updateHandlers[key] = [];
    }
    updateHandlers[key].push(callback);
  },

  updateCallState: function (key, newState) {
    // used for an extension to request a state update,
    // which will also get broadcast to everybody else on the call.
    console.log("updating call state: ", key, newState);
    applyStateUpdate(key, newState);
  },

  state,
};

/* Private implementation */

daily.afterCreateFrame((c) => {
  call = c;
});

function applyStateUpdates(newState) {
  // internal handler that applies all state updates
  Object.keys(newState).forEach((k) => {
    applyStateUpdate(k, newState[k]);
  });
}

function applyStateUpdate(key = "", newState) {
  // also used internally when we receive a state update
  // from the messaging channel.
  if (!state[key]) {
    state[key] = {};
  }
  Object.assign(state[key], newState);
  if (!updateHandlers[key]) {
    updateHandlers[key] = [];
  }
  const handlers = updateHandlers[key];
  for (let i = 0; i < handlers.length; i++) {
    // try calling handlers with just the updated state
    // to make change detection logic easier
    handlers[i](newState);
  }
}
