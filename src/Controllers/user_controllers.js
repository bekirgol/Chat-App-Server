const { add, getFindOne, byId, list } = require("../Services/user_service");

const register = (req, res) => {
  add(req.body)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const login = (req, res) => {
  const { email, password } = req.body;
  getFindOne(email, password)
    .then((user) => {
      if (!user) return res.status(500).send("Email yada şifreniz yanlış.");

      res.send(user);
    })
    .catch((err) => {
      res.status(200).send(err);
    });
};

const getUserById = (req, res) => {
  const userId = req.body.user_id;
  byId(userId)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const listAllUser = (req, res) => {
  list()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  register,
  login,
  getUserById,
  listAllUser,
};
