#!/usr/bin/env node

// @ts-check
const express = require("express");
const cors = require("cors");
const app = express();
const serveIndex = require("serve-index");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
const fetch = require("node-fetch");

const state = {};

// "nsp" is the socket namespace. Most single-room
// extensions set this to ${domain}/${room}/${extensionName}.

io.of(/^\/.*$/).on("connection", (socket) => {
  const nsp = socket.nsp.name;
  console.log("a user connected to: ", nsp);
  if (!(nsp in state)) {
    state[nsp] = {};
  }
  state[nsp].clients = socket.nsp.sockets.size;
  // send everybody the state, because the count updated
  socket.nsp.emit("state", state[nsp]);

  socket.on("disconnect", (e) => {
    state[nsp].clients = socket.nsp.sockets.size;
    socket.nsp.emit("state", state[nsp]);
  });

  socket.on("update", (msg) => {
    console.log("update", msg);
    Object.assign(state[nsp], msg);
    socket.nsp.emit("state", state[nsp]);
  });
});

app.use(cors());
app.use("/", serveIndex(__dirname + "/public"));
app.use(express.static(__dirname + "/public"));

server.listen(process.env.PORT, () => {
  console.log("listening on", process.env.PORT);
});
