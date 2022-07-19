import daily from "./core";
// import pounce from "../../public/extensions/pounce.js";
// import callstate from "../../public/extensions/callstate.js";
// import breakout from "../../public/extensions/breakout.js";
import whiteboard from "../../public/extensions/whiteboard-chat.js";
import eventlogger from "../../public/extensions/eventlogger.js";

console.log("whiteboard: ", whiteboard);

// const breakoutRooms = {};

const domain = "hush";
const room = "meet";
const dailyContainer = document.getElementById("dailyContainer") as HTMLElement;

const call = daily.createFrame(dailyContainer, {
  url: `https://${domain}.daily.co/${room}`,
  dailyConfig: {
    experimentalChromeVideoMuteLightOff: true,
    extensions: [
      { extension: whiteboard, config: { type: "miro", accountId: "abc1234" } },
      eventlogger,
      // {
      //   extension: breakoutRooms,
      //   config: { type: "miro", accountId: "abc1234" },
      // },
    ],
  },
  iframeStyle: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

window.call = call;

await call.join();
