import Socket from "./socketiostate.js";
import daily from "./core.js";
let state, props, socket;

/* Public interface */
let self;
export default self = {};

function connect(domain, room) {
  const key = `${domain}/${room}/pounce`;
  socket = new Socket({ key });
  socket.onStateUpdate((s) => {
    state = s;
  });
  socket.connect();
}

daily.beforeCreateFrame((parentEl, properties) => {
  // don't join the requested URL, but use it to connect
  // to the breakout server
  // TODO: Error if no url property is set, but what would that even mean?
  if (properties.url) {
    let [, domain, room] = properties.url.match(
      /https?\:\/\/*(.*)\.daily\.co\/(.*)/
    );
    connect(domain, room);
    delete properties.url;
    // TODO: Wrap the join() method too I guess
  } else {
    console.error("Please specify a URL in the createFrame function");
  }

  return [parentEl, properties];
});
