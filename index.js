const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const ejs = require("ejs");

app.use(express.text());
app.set("view engine", "ejs");
app.get("/home", (req, res) => {
  res.render("index");
});

// app.post("/", async (req, res) => {
//   try {
//     let message = req.body;
//     res.send(message);
//     console.log(message);
//   } catch (e) {
//     res.send("An error occured ");
//   }
// });

PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`server running at: ${PORT}`));

// io.on("connection", (socket) => {
//   console.log(socket.id);
// });

io.on("connection", (socket) => {
  socket.emit("hello", "world");
});
