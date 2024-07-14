const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: [true, "Pleased provide a Username"],
  },
  userEmail: {
    type: String,
    required: [true, "Pleased provide a Email"],
    unique: [true, "Email exist"],
  },
  role: {
    type: String,
    default: "User",
  },
  userPassword: {
    type: String,
    required: [true, "Pleased provide password"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
