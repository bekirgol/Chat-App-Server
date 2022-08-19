const User = require("../Models/User");

const add = (user) => {
  return User(user).save();
};

const list = () => {
  return User.find({});
};

const getFindOne = (email, password) => {
  return User.findOne({ email: email, password: password });
};

const byId = (id) => {
  return User.findById(id);
};

module.exports = {
  add,
  getFindOne,
  byId,
  list,
};
