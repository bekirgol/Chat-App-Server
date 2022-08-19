const { add, list } = require("../Services/message_service");

const sendMessage = (req, res) => {
  add(req.body)
    .then((message) => {
      res.send("Succes");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const listMessage = (req, res) => {
  const roomId = req.body.room_id;
  list(roomId)
    .then((messages) => {
      res.send(messages);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  sendMessage,
  listMessage,
};
