const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    full_name: String,
    email: String,
    password: String,
    image_url: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("user", UserSchema);
