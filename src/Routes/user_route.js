const express = require("express");
const {
  register,
  login,
  getUserById,
  listAllUser,
} = require("../Controllers/user_controllers");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/list-by-user-id", getUserById);
router.post("/list-all-user", listAllUser);

module.exports = router;
