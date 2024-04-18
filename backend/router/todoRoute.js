const {
  createTodo,
  updateTodo,
  deleteTodo,
  getTodo,
  getSingleTodo,
} = require("../controller/todoController");

const router = require("express").Router();

router.route("/todo").post(createTodo).get(getTodo);
router.route("/todo/:id").put(updateTodo).delete(deleteTodo).get(getSingleTodo);
module.exports = router;
