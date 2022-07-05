// @ts-check

import daily from "./core.js";
import Socket from "./socketiostate.js";

let state, call;
let socket;
const openCallbacks = [];
const closeCallbacks = [];
const DOOR_CLOSED = "closed";
const DOOR_OPEN = "open";

// Initial state
const initialState = {
  breakoutStarted: false,
  participants: [
    { roomId: "breakout", userId: "Alice" },
    { roomId: "breakout", userId: "Bob" },
    { roomId: "breakout", userId: "Charlie" },
    { roomId: "breakout", userId: "Dave" },
  ],
};

/* Defaults */
let props = {
  room: "", // used to build the presence socket namespace key.
  domain: "", // used to build the presence socket namespace key.
  teacher: false, // used to only show the door button to the teacher.
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
  toggleDoor: {
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
      state = s;
      if (state.clients === 1 && !state["doorState"]) {
        // nobody's here yet; open the door
        self.startBreakout();
      } else if (state["doorState"] === DOOR_OPEN) {
        handleStartBreakout();
      } else if (state["doorState"] === DOOR_CLOSED) {
        handleEndBreakout();
      }
    });
    socket.connect();
  },
  onOpen: function (cb) {
    openCallbacks.unshift({ cb, once: false });
  },
  onceOpen: function (cb) {
    openCallbacks.unshift({ cb, once: true });
  },
  onClose: function (cb) {
    closeCallbacks.unshift({ cb, once: false });
  },
  onceClose: function (cb) {
    closeCallbacks.unshift({ cb, once: true });
  },
  open: function () {
    socket.updateState({ doorState: DOOR_OPEN });
  },
  close: function () {
    socket.updateState({ doorState: DOOR_CLOSED });
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
  if (props.teacher === true) {
    if (!properties.customTrayButtons) {
      properties.customTrayButtons = {};
    }
    const button =
      state.doorState === DOOR_CLOSED
        ? { startBreakout: buttons.startBreakout }
        : { endBreakout: buttons.endBreakout };
    Object.assign(properties.customTrayButtons, {
      button,
    }); // use button var when bug is fixed
  }

  return [parentEl, properties];
});

daily.afterCreateFrame(async (c) => {
  call = c;
  call.on("custom-button-click", (e) => {
    switch (e.button_id) {
      case "startBreakout":
        self.startBreakout();
        break;
      case "endBreakout":
        self.endBreakout();
        break;
      case "toggleDoor":
        state.doorState === DOOR_CLOSED
          ? self.startBreakout()
          : self.endBreakout();
        break;
    }
  });
});
