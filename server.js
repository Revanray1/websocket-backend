const express = require("express");
const app = express();
const http = require("http");
const PORT = 5000;
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
      origin: "*",
      methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);
  socket.emit("message", [
    { name: "carlie", text: "heiiii", image:"https://i.imgur.com/HYcn9xO.png"},
    { name: "mary", text: "hello" ,image:"https://i.imgur.com/HYcn9xO.png"},
    { name: "Revan", text: "What are u Doing ?" ,image:"https://i.imgur.com/DY6gND0.png"},
    { name: "mary", text: "Work ?What About You" ,image:"https://i.imgur.com/HYcn9xO.png"},
    { name: "Revan", text: "hahahha okay" ,image:"https://i.imgur.com/DY6gND0.png"},
    { name: "mary", text: "mm  same 😊" ,image:"https://i.imgur.com/HYcn9xO.png"},
    { name: "mary", text: "mm  same 😊" ,image:"https://i.imgur.com/HYcn9xO.png"},
    { name: "mary", text: "mm  same 😊" ,image:"https://i.imgur.com/HYcn9xO.png"},
    { name: "mary", text: "mm jehgrghjkghjkfhiuhgfhfdjhifdhgoiuerbhgoibdiughbhgfhggerhoguhodiugbhiugdfiogbfighbqiudgfbuqhgbyrugberhby same 😊" ,image:"https://i.imgur.com/HYcn9xO.png"},
    { name: "mary", text: "mm  same 😊" ,image:"https://i.imgur.com/HYcn9xO.png"},
    { name: "mary", text: "mm  same 😊" ,image:"https://i.imgur.com/HYcn9xO.png"},
    { name: "mary", text: "mm  same 😊" ,image:"https://i.imgur.com/HYcn9xO.png"},
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
