const express = require("express");
const router = express.Router();
const {
  listMessage,
  sendMessage,
} = require("../Controllers/message_controller");

router.post("/send-message", sendMessage);
router.post("/list-message-by-room-id", listMessage);

module.exports = router;
