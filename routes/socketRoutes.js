const express = require("express");
const router = express.Router();
const socketController = require("../controller/socketController");

router.get("/home", socketController.home);
router.get("/json", socketController.jsonReq);

// router.post("/post", socketController.message);

module.exports = router;
