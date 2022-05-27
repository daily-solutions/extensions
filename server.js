const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

let state = {};

// "nsp" is the socket namespace. Most single-room
// extensions set this to ${domain}/${room}.

io.of(/^\/.*$/).on("connection", (socket) => {
  const nsp = socket.nsp.name;
  console.log("a user connected to: ", nsp);
  if (!(nsp in state)) {
    state[nsp] = {
      pounce: {},
      door: { doorState: "open" },
    };
  }

  if (!state[nsp]["pounce"]) {
    state[nsp]["pounce"] = {};
  }

  state[nsp]["pounce"].clients = socket.nsp.sockets.size;
  console.log("emitting state:", state[nsp]);
  // send this listener the whole state
  socket.emit("state", state[nsp]);
  // send everybody the pounce state count update
  socket.nsp.emit("state", { pounce: state[nsp]["pounce"] });

  socket.on("disconnect", (e) => {
    console.log("client disconnected");
    state[nsp]["pounce"].clients = socket.nsp.sockets.size;
    socket.nsp.emit("state", { pounce: state[nsp]["pounce"] });
    // handle a room that was closed but is now empty
    if (socket.nsp.sockets.size == 0) {
      state[nsp]["door"]["doorState"] = "open";
    }
  });

  socket.on("update", (msg) => {
    console.log("sending update:", msg);
    Object.assign(state[nsp], msg);
    socket.nsp.emit("state", msg);
  });
});

app.use(express.static("public"));

server.listen(process.env.PORT, () => {
  console.log("listening on ", process.env.PORT);
});
