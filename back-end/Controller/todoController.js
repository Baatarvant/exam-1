const todoModel = require("../Models/todoModel");

exports.getList = async (req, res) => {
  const getTodo = await todoModel.find();
  res.status(200).json({
    data: getTodo,
  });
};

exports.getCount = async (req, res) => {
  const getCountTodo = await todoModel.find({ isDone: true });
  res.status(200).json({
    data: getCountTodo,
  });
};

exports.addTodo = async (req, res) => {
  const addText = await todoModel.create({
    text: req.body.text,
    createdDate: new Date(),
  });
  res.status(200).json({
    data: addText,
    message: "todo created successfully",
  });
};

exports.deleteTodo = async (req, res) => {
  const deleteT = await todoModel.findByIdAndDelete({ _id: req.headers._id });
  res.status(200).json({ data: deleteT, message: "todo deleted successfully" });
};

exports.checkTodo = async (req, res) => {
  const checked = await todoModel.findByIdAndUpdate(
    { _id: req.body._id },
    { isDone: req.body.isDone }
  );
  res.status(200).json({ data: checked, message: "todo checked successfully" });
};

exports.updateTodo = async (req, res) => {
  const updateT = await todoModel.findByIdAndUpdate(
    { _id: req.body._id },
    { text: req.body.text }
  );
  res.status(200).json({ data: updateT, message: "todo updated successfully" });
};
