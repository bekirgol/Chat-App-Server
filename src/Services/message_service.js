const Message = require("../Models/Message");

const add = (message) => {
  return Message(message).save();
};

const list = (id) => {
  return Message.find({ roomId: id });
};

module.exports = {
  add,
  list,
};
