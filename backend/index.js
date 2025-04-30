const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://192.168.0.104:8080", // ou coloque 'http://localhost:8080' se quiser restringir
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("Um usuário se conectou:", socket.id);

  socket.on("chat message", (data) => {
    io.emit("chat message", data); // envia pra todos
  });

  socket.on("disconnect", () => {
    console.log("Usuário desconectado:", socket.id);
  });
});

server.listen(3000,'0.0.0.0', () => {
  console.log("Servidor WebSocket ouvindo na porta 3000");
});
