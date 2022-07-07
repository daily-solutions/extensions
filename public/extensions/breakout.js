// @ts-check

import daily from "./core.js";
import Socket from "./socketiostate.js";

let call;
let socket;

// Initial state
let state = {
  breakoutStarted: false,
  participants: [{ user_name: "", room: "" }],
};

/* Public interface */
let self;
export default self = {
  connect: function ({ room = "", domain = "" }) {
    // Create breakout rooms (see server.js for implementation)
    fetch("/create-rooms", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        console.log(data);
      });

    const key = `${domain}/${room}/breakout`;
    socket = new Socket({ key });
    socket.onStateUpdate(async (s) => {
      state = { ...state, ...s };

      const localParticipant = Object.entries(call.participants())
        .filter(([id, _]) => id === "local")
        .map(([_, participant]) => participant)[0];

      const room = state.participants.find(
        (p) => p.user_name === localParticipant.user_name
      )?.room;

      if (room && room !== localParticipant.room) {
        try {
          await call.leave();
          await call.join({ url: `https://${domain}.daily.co/${room}` });
        } catch (err) {
          console.error("Failed to join new room:", err);
        }
      }
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
        // Evenly split into two rooms
        const room = index % 2 === 0 ? "ext-breakout-2" : "ext-breakout-3";
        return { room, user_name: participant.user_name };
      });

    // 2. Send state to all clients
    socket.updateState({
      participants,
      breakoutStarted: true,
    });
  },
  end: function () {
    // 1. Get a list of participants from the server state
    // and bring them all back to the main room

    const participants = state.participants.map((participant) => {
      return { room: "ext-breakout-1", user_name: participant.user_name };
    });

    socket.updateState({
      participants,
      breakoutStarted: false,
    });
  },
};

daily.beforeCreateFrame((parentEl, properties) => {
  if (!properties.customTrayButtons) {
    properties.customTrayButtons = {};
  }

  properties.customTrayButtons = {
    ...properties.customTrayButtons,
    toggleBreakout: {
      iconPath: "https://www.svgrepo.com/show/207394/flash.svg",
      label: "Breakout",
      tooltip: "Breakout",
    },
  };

  return [parentEl, properties];
});

daily.afterCreateFrame(async (c) => {
  call = c;
  call.on("custom-button-click", (e) => {
    if (e.button_id !== "toggleBreakout") {
      return;
    }

    state.breakoutStarted ? self.end() : self.start();
  });
});
