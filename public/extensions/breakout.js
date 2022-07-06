// @ts-check

import daily from "./core.js";
import Socket from "./socketiostate.js";

let call;
let socket;
const openCallbacks = [];
const closeCallbacks = [];
const DOOR_CLOSED = "closed";
const DOOR_OPEN = "open";

// Initial state
let state = {
  breakoutStarted: false,
  participants: [],
};

/* Defaults */
let props = {
  room: "", // used to build the presence socket namespace key.
  domain: "", // used to build the presence socket namespace key.
  teacher: true, // TODO MAKE FALSE used to only show the door button to the teacher.
};

const buttons = {
  endBreakout: {
    iconPath: "https://www.svgrepo.com/show/344140/door-open-fill.svg",
    label: "End Breakout",
    tooltip: "End Breakout",
  },
  startBreakout: {
    iconPath: "https://www.svgrepo.com/show/344139/door-closed-fill.svg",
    label: "Start Breakout",
    tooltip: "Start Breakout",
  },
  toggleBreakout: {
    iconPath: "https://www.svgrepo.com/show/344139/door-closed-fill.svg",
    label: "Toggle Breakout",
    tooltip: "Toggle Breakout",
  },
};

/* Public interface */
let self;
export default self = {
  connect: function (p) {
    Object.assign(props, p);
    const key = `${p.domain}/${p.room}/breakout`; // probably need a random string or session here
    socket = new Socket({ key });
    socket.onStateUpdate((s) => {
      console.log("state update", s);
      state = { ...s };

      // state.participants[]
    });
    socket.connect();
  },
  start: function () {
    // 1. Randomize participants

    const participants = Object.entries(call.participants())
      .map((value) => ({ value, sort: Math.random() })) // shuffle participants
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      .map(([_, participant], index) => {
        if (index % 2 === 0) {
          return { roomId: "breakout2", sessionId: participant.session_id };
        } else {
          return { roomId: "breakout3", sessionId: participant.session_id };
        }
      });

    console.log(participants);
    // 2. Send state to all clients
    socket.updateState({
      participants,
      breakoutStarted: true,
    });
  },
  end: function () {
    const participants = Object.entries(call.participants()).map(
      ([_, participant]) => {
        return { roomId: "breakout1", sessionId: participant.session_id };
      }
    );
    socket.updateState({
      participants,
      breakoutStarted: false,
    });
  },
};

/* Private implementation */

function handleStartBreakout() {
  // switch button here when bug is fixed
  for (let i = openCallbacks.length - 1; i >= 0; i--) {
    const callback = openCallbacks[i];
    callback["cb"]();
    if (callback.once === true) {
      openCallbacks.splice(i, 1);
    }
  }
}

function handleEndBreakout() {
  // switch button here when bug is fixed
  for (let i = closeCallbacks.length - 1; i >= 0; i--) {
    const callback = closeCallbacks[i];
    callback["cb"]();
    if (callback.once === true) {
      closeCallbacks.splice(i, 1);
    }
  }
}

daily.beforeCreateFrame((parentEl, properties) => {
  console.log("properties", properties);

  if (props.teacher === true) {
    if (!properties.customTrayButtons) {
      properties.customTrayButtons = {};
    }

    properties.customTrayButtons = { toggleBreakout: buttons.toggleBreakout };
  }

  return [parentEl, properties];
});

daily.afterCreateFrame(async (c) => {
  call = c;
  call.on("custom-button-click", (e) => {
    console.log("custom-button-click", e);
    if (e.button_id !== "toggleBreakout") {
      return;
    }
    state.breakoutStarted ? self.end() : self.start();
  });
});
