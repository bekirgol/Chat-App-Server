const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    roomId: { type: mongoose.Types.ObjectId, ref: "chat-room" },
    senderId: { type: mongoose.Types.ObjectId, ref: "user" },
    receiverId: { type: mongoose.Types.ObjectId, ref: "user" },
    message: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("message", MessageSchema);
