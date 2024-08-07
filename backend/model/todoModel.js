const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
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
    },
    todoPriority: {
      type: String,
      enum: ["Extreme", "Moderate", "Low"],
      default: "Extreme",
    },
    todoImage: {
      type: String,
    },
    // user: [
    //   {
    //     type: mongoose.Types.ObjectId,
    //     ref: "User",
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("todoItems", todoSchema);
