const express = require("express");
const app = express();
const http = require("http");
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
      origin: "https://chatandsay.netlify.app/",
      methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);
  socket.emit("message", [
    { name: "Dory", text: "Heyy iam dory Bot,Say Hello and continue to chat", image:"https://i.imgur.com/HYcn9xO.png"}
  ]);

  socket.on("message", (data) => {
    socket.broadcast.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(PORT, () => {
  console.log("PORT IS RUNNING");
});
