const express = require("express");
const app = express();
const socketHelper = require("../helper/socketHelper");

const home = async (req, res) => {
  socketHelper.getIo().emit("message", "hello");
  await res.send("connected");
};

const jsonReq = async (req, res) => {
  let myObj = {
    name: "hardik",
    age: 28,
  };
  socketHelper.getIo().emit("myJson", myObj);
  await res.send("connected");
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

module.exports = {
  home,
  jsonReq,
};
