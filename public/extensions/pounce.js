import socketiostate from "./socketiostate.js";
let state;
let pounced = false;
let callback, soloCallback;

socketiostate.onStateUpdate((s) => {
  state = s;
  if(state.clients > 1 && pounced === false) {
    console.log('got a state with >1 participant; time to go')
    go();
  }
  
  if(state.clients == 1 && pounced === true) {
    stop();
  }
});

function go() {
  pounced = true;
  callback();
}

function stop() {
  pounced = false;
  soloCallback();
}

let self;
export default self = {
  onJoin: function(cb) {
    callback = cb;
  },
  onSolo: function(cb) {
    soloCallback = cb;
  }
}