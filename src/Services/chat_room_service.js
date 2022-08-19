const ChatRoom = require("../Models/ChatRoom");

const add = (room) => {
  return ChatRoom(room).save();
};

const list = (id) => {
  return ChatRoom.find({users: id});
};

const listIsRoom = () => {
    return ChatRoom.find({});
}
const listById = (id) => {
  return ChatRoom.findById(id);
};

const isCheckUser = (user1, user2) => {
  return ChatRoom.findOne({ users: [user1, user2] });
};

module.exports = {
  add,
  list,
  listById,
  isCheckUser,
  listIsRoom,
};
