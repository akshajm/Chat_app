const express = require("express");
const socket = require("socket.io");
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);

const io = socket(server);

app.use(express.static(path.join(__dirname, "public")));

// Goes to client
io.on("connection", (socket) => {
  console.log(`Connection successful `);

  io.on("message", () => {
    io.emit("AMLA");
  });
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`Connected to port ${PORT}, yoooooo`);
});
