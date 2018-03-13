import daily from "./core.js";
let call;
let player;

let mediaStartButton = {
  iconPath:
    "https://cdn.glitch.global/dcb584f3-95aa-4929-82e0-ca6ee9b2b12f/playback.png",
  label: "Play Video",
  tooltip: "Play Video",
};
let mediaStopButton = {
  iconPath:
    "https://cdn.glitch.global/dcb584f3-95aa-4929-82e0-ca6ee9b2b12f/playback.png",
  label: "Stop Video",
  tooltip: "Stop Video",
};
let mediaResumeButton = {
  iconPath:
    "https://cdn.glitch.global/dcb584f3-95aa-4929-82e0-ca6ee9b2b12f/playback.png",
  label: "Resume",
  tooltip: "Resume Video",
};
let mediaPauseButton = {
  iconPath:
    "https://cdn.glitch.global/dcb584f3-95aa-4929-82e0-ca6ee9b2b12f/playback.png",
  label: "Pause",
  tooltip: "Pause Video",
};

function start() {
  let url = prompt(
    "Enter a URL for playback",
    "https://cdn.glitch.global/dcb584f3-95aa-4929-82e0-ca6ee9b2b12f/spaghetti.mp4?v=1652975807918"
  );
  call.startRemoteMediaPlayer({ url });
}

function pause() {
  call.updateRemoteMediaPlayer({
    session_id: player,
    settings: { state: "pause" },
  });
}

function resume() {
  call.updateRemoteMediaPlayer({
    session_id: player,
    settings: { state: "play" },
  });
}

function stop() {
  call.stopRemoteMediaPlayer(player);
}

function handleStarted(e) {
  player = e.session_id;
  call.updateCustomTrayButtons({
    mediaStop: mediaStopButton,
    mediaPause: mediaPauseButton,
  });
}

function handleStopped() {
  call.updateCustomTrayButtons({ mediaStart: mediaStartButton });
}

function handlePaused() {
  call.updateCustomTrayButtons({
    mediaResume: mediaResumeButton,
    /*extra: {
      iconPath:
        "https://cdn.glitch.global/dcb584f3-95aa-4929-82e0-ca6ee9b2b12f/playback.png",
      label: "extra",
      tooltip: "extra",
    },*/
    mediaStop: mediaStopButton,
  });
}

function handleResumed() {
  call.updateCustomTrayButtons({
    mediaStop: mediaStopButton,
    mediaPause: mediaPauseButton,
  });
}

async function close() {
  call.setCustomTrayButtons({ mediaStart: mediaStartButton });
}

daily.beforeCreateFrame((parentEl, properties) => {
  if (!properties.customTrayButtons) {
    properties.customTrayButtons = {};
  }
  properties.customTrayButtons.mediaStart = mediaStartButton;

  return [parentEl, properties];
});

daily.afterCreateFrame((c) => {
  call = c;

  call.on("remote-media-player-started", (e) => handleStarted(e));
  call.on("remote-media-player-stopped", (e) => handleStopped());
  call.on("remote-media-player-error", (e) => handleStopped());
  call.on("remote-media-player-updated", (e) => {
    e.remoteMediaPlayerState.state === "paused"
      ? handlePaused()
      : handleResumed();
  });

  call.on("custom-button-click", (e) => {
    switch (e.button_id) {
      case "mediaStart":
        start();
        break;
      case "mediaResume":
        resume();
        break;
      case "mediaPause":
        pause();
        break;
      case "mediaStop":
        stop();
        break;
    }
  });
});

export default {};
