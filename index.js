const express = require("express");
const ejs = require("ejs");
const app = express();
app.set("view engine", "ejs");
app.use("/", require("./routes/socketRoutes"));

PORT = process.env.PORT || 8000;
let server = app.listen(PORT, () => console.log(`server running at: ${PORT}`));
// const io = require("socket.io")(server);
// module.exports = { server };
const io = require("./helper/socketHelper").initMethod(server);
app.get("/", (req, res) => {
  res.render("index.ejs");
});
io.on("connection", (socket) => {
  console.log(socket.id);
});
