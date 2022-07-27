import daily from "./core.js";
import iframe from "./iframe.js";

let fp, iframeEl, call;

const props = {};

/* Extension configuration */
// don't use the iframe extension's button
iframe.configure({
  url: "about:blank",
  buttons: {},
  showUrl: false,
  broadcast: false,
  contentSize: 10,
  sidebar: true,
});

/* Public interface */
export default {
  configure: function (p) {
    Object.assign(props, p);
  },
};

function iframeUrl(username) {
  let url = "/lib/cometchat-embed.html";
  let params = {};
  params.userid = encodeURIComponent(username).replace(/[^a-zA-Z0-9 _-]/g, "");
  params.username = encodeURIComponent(username);
  params.groupid = props.room;
  params.groupname = props.room;
  let queryString = Object.keys(params)
    .map((key) => {
      return key + "=" + encodeURIComponent(params[key]);
    })
    .join("&");
  url += "?" + queryString;
  return url;
}

function handleCometChatButton() {
  if (props.open === true) {
    // then the frame is open; just close it
    iframe.hide();
  } else {
    // then the frame was closed; reopen it
    iframe.show();
  }
}

daily.beforeCreateFrame((parentEl, properties) => {
  // TODO: maybe namespace shared resources like tray buttons?
  if (!properties.customTrayButtons) {
    properties.customTrayButtons = {};
  }
  properties.customTrayButtons.cometchat = {
    iconPath:
      "https://assets-global.website-files.com/5f3c19f18169b65d9d0bf384/5f3c19f18169b639bf0bf3d2_favicon.png",
    label: "Chat",
    tooltip: "Chat with CometChat",
  };

  return [parentEl, properties];
});

daily.afterCreateFrame(async (c) => {
  call = c;
  call.on("custom-button-click", (e) => {
    switch (e.button_id) {
      case "cometchat":
        handleCometChatButton();
        break;
    }
  });

  call.on("joined-meeting", async (e) => {
    const myName = e.participants.local.user_name;
    iframe.setUrl(iframeUrl(myName));
  });
});
