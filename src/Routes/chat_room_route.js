const {
  addChatRoom,
  listChatRoom,
  getChatRoomById,
  addUser,
  isRoom,
} = require("../Controllers/chat_room_controller");
const express = require("express");
const router = express.Router();

router.post("/add", addChatRoom);
router.post("/list-by-user-id", listChatRoom);
router.post("/list-by-room-id", getChatRoomById);
router.post("/add-user", addUser);
router.post("/is-room", isRoom);

module.exports = router;
