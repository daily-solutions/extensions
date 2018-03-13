import daily from "./core.js";
let state = {};
let updateHandlers = [];
let call = {};
let waitingForSync = false;
let SYNC_MAX_WAITING_TIME = 7000;

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
  for (var i = 0; i < updateHandlers[key].length; i++) {
    // try calling handlers with just the updated state
    // to make change detection logic easier
    updateHandlers[key][i](newState);
  }
}

function broadcastStateUpdate(key, newState) {
  var ns = {};
  ns[key] = newState;
  call.sendAppMessage({ message: "update-call-state", state: ns });
}

async function requestState() {
  let friends = await call.participants();
  // find someone that joined before us and ask for state
  const joinedDate = friends.local.joined_at;
  let mentors = Object.entries(friends)
    .filter(([id, f]) => id !== "local" && f.joined_at < joinedDate)
    .map(([id]) => id);
  if (mentors.length === 0) {
    // then we're the first one here
    // skip this for now; I think I'd rather hit the global
    // timeout because participants are slow to show up
    // in the list
    /*
    console.log("no mentors, i should quit looking");
    waitingForSync = false;
    return;
    */
  }

  const randomIdx = Math.floor(mentors.length * Math.random());
  const randomId = mentors[randomIdx];
  console.log("requesting call state from", randomId);
  call.sendAppMessage(
    {
      message: "request-call-state",
    },
    randomId
  );
}

export default {
  onCallStateUpdate: function (key, callback) {
    if (!updateHandlers[key]) {
      updateHandlers[key] = [];
    }
    updateHandlers[key].push(callback);
  },

  updateCallState: function (key, newState, broadcast = true) {
    // used for an extension to request a state update,
    // which will also get broadcast to everybody else on the call.
    applyStateUpdate(key, newState);
    if (broadcast) {
      broadcastStateUpdate(key, newState);
    }
  },

  state,
};

daily.afterCreateFrame((c) => {
  call = c;
  // listen for requests for state from new peers
  call.on("app-message", (e) => {
    switch (e.data.message) {
      case "request-call-state":
        // only send state if I'm not waiting for it myself
        if (waitingForSync === false) {
          call.sendAppMessage(
            { message: "update-call-state", state },
            e.fromId
          );
        }
        break;

      case "update-call-state":
        waitingForSync = false;
        applyStateUpdates(e.data.state);
        break;
    }
  });
  // listen for general state updates
  // ask a peer for the existing state
  call.on("joined-meeting", async (e) => {
    waitingForSync = true;
    // Randomize delay to increase the chance of lowering overall network traffic
    const requestDelay = 1000 + Math.ceil(1000 * Math.random());

    let overallTimeout = setTimeout(() => {
      waitingForSync = false;
    }, SYNC_MAX_WAITING_TIME);

    let interval = setInterval(() => {
      if (waitingForSync === false) {
        clearInterval(interval);
        return;
      }
      requestState();
    }, requestDelay);
  });
});
