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
  todoDate: {
    type: Date,
    default: Date.now,
  },
  todoPriority: {
    type: String,
    enum: ["Extreme", "Moderate", "Low"],
    default: "Extreme",
  },

  // user: [
  //   {
  //     type: mongoose.Types.ObjectId,
  //     ref: "User",
  //   },
  // ],
});

module.exports = mongoose.model("todoItems", todoSchema);
