const express = require("express");
const router = express.Router();
const socketController = require("../controller/socketController");

router.get("/", socketController.home);
// router.post("/post", socketController.message);

module.exports = router;
