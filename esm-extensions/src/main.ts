import daily from "./core";
// import pounce from "../../public/extensions/pounce.js";
import breakout from "../../public/extensions/breakout.js";
// import whiteboard from "../../public/extensions/whiteboard-chat.js";
import eventlogger from "../../public/extensions/eventlogger.js";

const domain = "hush";
const room = "meet";
const dailyContainer = document.getElementById("dailyContainer") as HTMLElement;

const call = daily.createFrame(dailyContainer, {
  url: `https://${domain}.daily.co/${room}`,
  dailyConfig: {
    experimentalChromeVideoMuteLightOff: true,
    extensions: [
      // {
      //   extension: whiteboard,
      //   config: {
      //     teacher: true,
      //     room,
      //     key: "aa746656-b640-40ed-b010-2807561225fa",
      //   },
      // },
      eventlogger,
      {
        extension: breakout,
        config: {
          domain,
          room,
        },
      },
    ],
  },
  iframeStyle: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
  },
});

await call.join();
