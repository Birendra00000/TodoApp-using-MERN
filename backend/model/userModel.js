const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: [false],
  },
  userEmail: {
    type: String,
    required: [false],
  },

  userPassword: {
    type: String,
    required: [false],
  },
  list: [
    {
      type: mongoose.Types.ObjectId,
      ref: "todoItems",
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
