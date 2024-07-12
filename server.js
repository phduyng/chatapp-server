const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const dotenv = require('dotenv')

dotenv.config()

const io = new Server(server, {
  cors: {
    origin: `${process.env.CLIENT}`, // Thay thế bằng địa chỉ client React của bạn
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 5000;

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});