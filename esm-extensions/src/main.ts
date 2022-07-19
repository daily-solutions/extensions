import daily from "./core";
import breakout from "../../public/extensions/breakout.js";
import eventlogger from "../../public/extensions/eventlogger.js";

const domain = "hush";
const room = "meet";
const dailyContainer = document.getElementById("dailyContainer") as HTMLElement;

const call = daily.createFrame(dailyContainer, {
  url: `https://${domain}.daily.co/${room}`,
  dailyConfig: {
    experimentalChromeVideoMuteLightOff: true,
    extensions: [
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
});

await call.join();
