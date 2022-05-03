const express = require("express");
const ejs = require("ejs");
const app = express();
const moment = require("moment");
app.use(express.text());
app.use(express.json());

app.set("view engine", "ejs");
app.use("/", require("./routes/socketRoutes"));

PORT = process.env.PORT || 8000;
let server = app.listen(PORT, () => console.log(`server running at: ${PORT}`));
const io = require("./helper/socketHelper").initMethod(server);
app.get("/", (req, res) => {
  res.render("index.ejs");
});
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", (socket) => {
    console.log("user disconnected");
  });
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg + moment().format(" h:mm a"));
  });
});
