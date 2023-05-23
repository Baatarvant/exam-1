const express = require("express");
const {
  getList,
  getCount,
  addTodo,
  deleteTodo,
  checkTodo,
  updateTodo,
} = require("../Controller/todoController");

const TodoRouter = express.Router();

TodoRouter.get("/", (req, res) => res.send("Todo list backend"))
  .get("/test", (req, res) => res.send("This is test endpoint"))
  .get("/list", getList)
  .get("/count", getCount)
  .post("/add", addTodo)
  .delete("/delete", deleteTodo)
  .patch("/checked", checkTodo)
  .patch("/update", updateTodo);

module.exports = TodoRouter;
