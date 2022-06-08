import daily from "./core.js";
import Socket from "./socketiostate.js";

let state, call;
let socket;
let pounced = false;
let openCallback, closeCallback, onceOpenCallback;
const openCallbacks = [];
const closeCallbacks = [];
const DOOR_CLOSED = "closed";
const DOOR_OPEN = "open";

/* Defaults */
let props = {
  room: "", // used to build the presence socket namespace key.
  domain: "", // used to build the presence socket namespace key.
  teacher: false, // used to only show the door button to the teacher.
};
const key = "door";

const buttons = {
  closeDoor: {
    iconPath: "https://www.svgrepo.com/show/344140/door-open-fill.svg",
    label: "Close Door",
    tooltip: "Close Door",
  },
  openDoor: {
    iconPath: "https://www.svgrepo.com/show/344139/door-closed-fill.svg",
    label: "Open Door",
    tooltip: "Open Door",
  },
  toggleDoor: {
    iconPath: "https://www.svgrepo.com/show/344139/door-closed-fill.svg",
    label: "Toggle Door",
    tooltip: "Toggle Door",
  },
};

/* Public interface */
let self;
export default self = {
  connect: function (p) {
    Object.assign(props, p);
    const key = `${p.domain}/${p.room}/door`;
    socket = new Socket({ key });
    socket.onStateUpdate((s) => {
      state = s;
      if (state.clients === 1 && !state["doorState"]) {
        // nobody's here yet; open the door
        self.open();
      } else if (state["doorState"] === DOOR_OPEN) {
        handleOpen();
      } else if (state["doorState"] === DOOR_CLOSED) {
        handleClosed();
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

function handleOpen() {
  // switch button here when bug is fixed
  for (let i = openCallbacks.length - 1; i >= 0; i--) {
    const callback = openCallbacks[i];
    callback["cb"]();
    if (callback.once === true) {
      openCallbacks.splice(i, 1);
    }
  }
}

function handleClosed() {
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
        ? { openDoor: buttons.openDoor }
        : { closeDoor: buttons.closeDoor };
    Object.assign(properties.customTrayButtons, {
      toggleDoor: buttons.toggleDoor,
    }); // use button var when bug is fixed
  }

  return [parentEl, properties];
});

daily.afterCreateFrame(async (c) => {
  call = c;
  call.on("custom-button-click", (e) => {
    switch (e.button_id) {
      case "openDoor":
        self.open();
        break;
      case "closeDoor":
        self.close();
        break;
      case "toggleDoor":
        state.doorState === DOOR_CLOSED ? self.open() : self.close();
        break;
    }
  });
});
