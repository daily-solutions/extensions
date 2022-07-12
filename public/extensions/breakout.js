// @ts-check

import Socket from "./socketiostate.js";

let socket;

// Initial state
let state = {
  initialRoomUrl: "",
  breakoutStarted: false,
  participants: [{ user_name: "", roomUrl: "" }],
};

async function handleOnStateUpdate(s = {}, call) {
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

export function connect({ room = "", domain = "", call }) {
  const key = `${domain}/${room}/breakout`;
  state.initialRoomUrl = `https://${domain}.daily.co/${room}`;
  socket = new Socket({ key });
  socket.onStateUpdate((state) => {
    handleOnStateUpdate(state, call);
  });
  socket.connect();
  call.on("custom-button-click", (e) => {
    if (e.button_id !== "toggleBreakout") {
      return;
    }
    state.breakoutStarted ? end() : start(call);
  });
}

function randomizeParticipants(participants = {}, roomUrls = []) {
  return Object.entries(participants)
    .map((value) => ({ value, sort: Math.random() })) // shuffle participants
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .map(([_, participant], index) => {
      // Evenly split into two rooms
      const roomUrl = index % 2 === 0 ? roomUrls[0] : roomUrls[1];
      return { roomUrl, user_name: participant.user_name };
    });
}

async function start(call) {
  const response = await fetch("/create-rooms", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const { roomUrls } = await response.json();

  // Randomize participants
  const participants = randomizeParticipants(call.participants(), roomUrls);

  // Send state to all clients
  socket.updateState({
    participants,
    breakoutStarted: true,
  });
}

function end() {
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
