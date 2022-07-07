// @ts-check
const express = require("express");
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

// Proxy to Daily API to create rooms for breakout rooms
app.post("/create-rooms", async (req, res) => {
  // Add logic to check if the user is authorized to create a room
  const isAllowed = true;
  if (!isAllowed) {
    return res.status(403).json({
      error: "forbidden",
    });
  }
  const dailyAPIKey = process.env.DAILY_API_KEY || "";
  const Authorization = `Bearer ${dailyAPIKey}`;

  try {
    const headersList = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization,
    };

    const roomRequets = [
      `ext-breakout-1`,
      `ext-breakout-2`,
      `ext-breakout-3`,
    ].map((name) => {
      const bodyContent = JSON.stringify({
        name,
        properties: {
          enable_prejoin_ui: false,
        },
      });
      return fetch("https://api.daily.co/v1/rooms", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });
    });

    const responses = await Promise.all(roomRequets);

    const responseBodies = responses.map((response) => response.json());

    const data = await Promise.all(responseBodies);

    const roomUrls = data.map(({ url }) => url);

    return res.status(200).json({ roomUrls });
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
});

app.use("/", serveIndex(__dirname + "/public"));
app.use(express.static(__dirname + "/public"));

server.listen(process.env.PORT, () => {
  console.log("listening on", process.env.PORT);
});
