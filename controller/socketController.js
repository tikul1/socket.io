const express = require("express");
const app = express();
const moment = require("moment");
const socketHelper = require("../helper/socketHelper");

const home = async (req, res) => {
  socketHelper.getIo().sockets.emit("message", "hello");
  await res.send("connected");
};

const jsonReq = async (req, res) => {
  let myObj = {
    name: "hardik",
    age: 28,
  };
  let myArray = [1, 2, 3, "hello"];

  socketHelper.getIo().sockets.emit("message", myArray);
  await res.send("connected");
};

const message = async (req, res) => {
  try {
    let message = req.body + moment().format("h:mm a");
    socketHelper.getIo().emit("message", message);
    res.send("message sent");
  } catch (e) {
    res.send("An error occured ");
  }
};

module.exports = {
  home,
  jsonReq,
  message,
};
