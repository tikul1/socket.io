const express = require("express");
const ejs = require("ejs");
const app = express();
app.set("view engine", "ejs");
app.use("/home", require("./routes/socketRoutes"));

PORT = process.env.PORT || 8000;
let server = app.listen(PORT, () => console.log(`server running at: ${PORT}`));
const io = require("socket.io")(server);
// app.set("io", io);

module.exports = { server };
