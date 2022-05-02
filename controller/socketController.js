const express = require("express");
const app = express();
const server = require("../index");
// const io = require("socket.io")(server);
const io = require("socket.io");

const home = async (req, res) => {
  await res.render("index");
};

// const message = async (req, res) => {
//   try {
//     let message = req.body;
//     res.send(message);
//     console.log(message);
//   } catch (e) {
//     res.send("An error occured ");
//   }
// };

io.on("connection", (socket) => {
  socket.emit("hello", "world");
});

module.exports = {
  home,
};
