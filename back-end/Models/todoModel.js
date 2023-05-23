const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  text: { type: String },
  isDone: { type: Boolean, default: false },
  createdDate: { type: Date },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
