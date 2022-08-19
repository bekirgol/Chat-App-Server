const mongoose = require("mongoose");
const db = mongoose.connection;

db.once("open", () => {
  console.log("Db Connected");
});

const ConnectDb = () => {
  mongoose.connect("mongodb://localhost:27020/chat_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = ConnectDb;
