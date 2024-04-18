const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  todoTitle: {
    type: String,
    required: [true, "Title must be provided"],
  },
  todoDescription: {
    type: String,
    required: [true],
  },
  user: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("todoItems", todoSchema);
