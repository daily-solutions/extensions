import daily from "./core.js";
import flexpanel from "./flexpanel.js";
import callstate from "./callstate.js";

let call, fp, iframeEl, props;

export default {
  configure: function (p) {
    props = p;
  },
};

async function buildIframeUrl(e) {
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
  console.log("configuring whiteboard URL:", src);
  return src;
}

daily.beforeCreateFrame((parentEl, properties) => {
  // TODO: maybe namespace shared resources like tray buttons?
  if (props.teacher) {
    if (!properties.customTrayButtons) {
      properties.customTrayButtons = {};
    }

    properties.customTrayButtons.wc = {
      iconPath:
        "https://cdn.glitch.global/b27fe8fa-17e7-4634-9228-21fb5aa243cf/newlogwc-black.svg?v=1652281447026",
      label: "Boards",
      tooltip: "Boards",
    };
  }

  // create a flexpanel from the passed parentEl, which becomes the daily panel
  fp = flexpanel.create({
    rightNode: parentEl,
  });
  // hang on to the iframe created by the flexpanel
  iframeEl = fp.contentIframe;

  return [parentEl, properties];
});

daily.afterCreateFrame(async (c) => {
  call = c;

  call.on("joined-meeting", async (e) => {
    iframeEl.src = await buildIframeUrl(e);
  });

  callstate.onCallStateUpdate((state) => {
    if ("open" in state) {
      state.open === true ? flexpanel.open() : flexpanel.close();
    }
  });

  call.on("custom-button-click", (e) => {
    switch (e.button_id) {
      case "wc":
        callstate.updateCallState({ open: !callstate.state.open });

        break;
    }
  });
});
