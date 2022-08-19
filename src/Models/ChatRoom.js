const mongoose = require("mongoose");

const ChatRoomSchema = new mongoose.Schema(
  {
    users: [
      {
        type: String,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("chat-room", ChatRoomSchema);
