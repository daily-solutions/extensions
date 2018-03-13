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

io.of(/^\/.*$/).on("connection", (socket) => {
  const nsp = socket.nsp.name;
  console.log("a user connected to: ", nsp);
  if (!(nsp in state)) {
    state[nsp] = {};
  }
  state[nsp].clients = socket.nsp.sockets.size;
  console.log("emitting state:", state[nsp]);
  socket.nsp.emit("state", state[nsp]);

  socket.on("disconnect", (e) => {
    console.log("client disconnected");
    state[nsp].clients = socket.nsp.sockets.size;
    socket.nsp.emit("state", state[nsp]);
  });

  socket.on("update", (msg) => {
    console.log("sending update:", msg)
    Object.assign(state[nsp], msg);
    socket.nsp.emit("state", msg);
  });
});

app.use(express.static('public'));

server.listen(process.env.PORT, () => {
  console.log("listening on ", process.env.PORT);
});





