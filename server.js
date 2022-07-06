// @ts-check
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

app.post("/", async (req, res) => {
  try {
    // Add logic to check if the user is authorized to update the state
    const isAllowed = true;
    if (!isAllowed) {
      return res.json({
        statusCode: 403,
        headers: { "content-type": "application/json" },
        body: "forbidden",
      });
    }
  } catch (e) {
    console.error(e);
    return res.json({
      statusCode: 500,
      headers: { "content-type": "application/json" },
      body: "failed to validate request IP",
    });
  }

  const dailyAPIKey = process.env.DAILY_API_KEY || "";
  const Authorization = req.headers.Authorization || `Bearer ${dailyAPIKey}`;
  // Prepare headers, containing our Daily API key
  const headers = {
    Authorization,
    "Content-Type": "application/json",
  };

  const dailyAPIURL = "https://api.daily.co/v1/";

  try {
    const eventBody = JSON.parse(req.body ?? "{}");
    const exp = Math.floor(Date.now() / 1000) + 60 * 10; // default to ten minutes

    const finalReqBody = {
      ...eventBody,
      exp,
    };

    const response = await fetch(dailyAPIURL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(finalReqBody),
    });

    const data = await response.text();

    return {
      statusCode: response.status,
      headers: { "content-type": "application/json" },
      body: data,
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(error),
    };
  }
});

app.use(express.static("public"));

server.listen(process.env.PORT, () => {
  console.log("listening on", process.env.PORT);
});
