import daily from "./core.js";
import iframe from "./iframe.js";
import callstate from "./callstate.js";

let fp, iframeEl, call;

let props = {};

// don't use the iframe extension's button
iframe.configure({ url: "about:blank", buttons: {}, showUrl: false });

export default {
  configure: function (p) {
    Object.assign(props, p);
  },
};

async function iframeUrl(e) {
  let src = "https://www.whiteboard.chat/apiaccess/createjoin/";
  // use a per-room whiteboard for now
  let sessionId = e.participants.local.session_id;
  let userId = e.participants.local.user_id;
  let roomInfo = await call.room();
  src += roomInfo.id; // use the room's GUID as the whiteboard ID
  src += `?key=${props.key}&disableNav=true`; // add some other useful things
  if (props.teacher === "true") {
    src += "&teacher=true&deleteOldUsers=180";
  }
  src += "&username=" + encodeURIComponent(e.participants.local.user_name);
  src += "&boardName=" + encodeURIComponent(roomInfo.name);
  console.log("whiteboard URL:", src);
  return src;
}

function handleWcButton() {
  callstate.updateCallState("iframe", {
    open: !callstate.state.iframe?.open,
  });
}

daily.beforeCreateFrame((parentEl, properties) => {
  // TODO: maybe namespace shared resources like tray buttons?
  if (props.teacher) {
    if (!properties.customTrayButtons) {
      properties.customTrayButtons = {};
    }
    properties.customTrayButtons.wc = {
      iconPath: "https://www.svgrepo.com/show/123519/whiteboard.svg",
      label: "Boards",
      tooltip: "Boards",
    };
  }

  return [parentEl, properties];
});

daily.afterCreateFrame(async (c) => {
  call = c;

  call.on("joined-meeting", async (e) => {
    // let the teacher set the whiteboard URL
    // for everybody
    let url = await iframeUrl(e);
    callstate.updateCallState("iframe", { url });
  });

  call.on("custom-button-click", (e) => {
    switch (e.button_id) {
      case "wc":
        handleWcButton();
        break;
    }
  });
});
