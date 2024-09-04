const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Pleased provide a Username"],
  },
  lastName: {
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
    required: [false, "Pleased provide a Email"],
    default: "User",
  },
  userPassword: {
    type: String,
    required: [true, "Pleased provide password"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
