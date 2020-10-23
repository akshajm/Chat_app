const socketio = io();

socketio.on("message", (msg) => {
  console.log(msg, "In client side");
});
