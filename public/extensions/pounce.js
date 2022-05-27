import socketiostate from "./socketiostate.js";
let state;
let pounced = false;
let callback, soloCallback;
let key = "pounce";

socketiostate.onStateUpdate(key, (s) => {
  state = s;
  if (state.clients > 1 && pounced === false) {
    go();
  }

  if (state.clients == 1 && pounced === true) {
    stop();
  }
});

function go() {
  console.log("go");
  pounced = true;
  callback();
}

function stop() {
  pounced = false;
  soloCallback();
}

let self;
export default self = {
  onJoin: function (cb) {
    console.log("onjoin");
    callback = cb;
  },
  onSolo: function (cb) {
    soloCallback = cb;
  },
};
