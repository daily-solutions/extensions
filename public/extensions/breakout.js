// @ts-check

import daily from "./core.js";
import Socket from "./socketiostate.js";

let call;
let socket;

// Initial state
let state = {
  initialRoomUrl: "",
  breakoutStarted: false,
  participants: [{ user_name: "", roomUrl: "" }],
};

window._state = state;

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

    state.breakoutStarted ? end() : start();
  });
});

async function handleOnStateUpdate(s = {}) {
  state = { ...state, ...s };

  const localParticipant = call.participants().local;

  const roomUrl = state.participants.find(
    (p) => p.user_name === localParticipant?.user_name
  )?.roomUrl;

  if (roomUrl) {
    try {
      await call.leave();
      await call.join({ url: roomUrl });
    } catch (err) {
      console.error("Failed to join new room:", err);
    }
  }
}

export function connect({ room = "", domain = "" }) {
  const key = `${domain}/${room}/breakout`;
  state.initialRoomUrl = `https://${domain}.daily.co/${room}`;
  socket = new Socket({ key });
  socket.onStateUpdate(handleOnStateUpdate);
  socket.connect();
}

export async function start() {
  // Create breakout rooms (see server.js for implementation)
  const response = await fetch("/create-rooms", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const { roomUrls } = await response.json();

  console.log("roomUrls: ", roomUrls);

  // 1. Randomize participants

  const participants = Object.entries(call.participants())
    .map((value) => ({ value, sort: Math.random() })) // shuffle participants
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .map(([_, participant], index) => {
      // Evenly split into two rooms
      const roomUrl = index % 2 === 0 ? roomUrls[1] : roomUrls[2];
      return { roomUrl, user_name: participant.user_name };
    });

  // 2. Send state to all clients
  socket.updateState({
    participants,
    breakoutStarted: true,
  });
}

export function end() {
  // 1. Get a list of participants from the server state
  // and bring them all back to the main room

  const participants = state.participants.map((participant) => {
    return { roomUrl: state.initialRoomUrl, user_name: participant.user_name };
  });

  socket.updateState({
    participants,
    breakoutStarted: false,
  });
}
