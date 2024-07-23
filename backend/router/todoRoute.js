const {
  createTodo,
  updateTodo,
  deleteTodo,
  getTodo,
  getSingleTodo,
} = require("../controller/todoController");
const isAuthenticated = require("../middleware/isAuthenticated");

const { multer, storage } = require("../middleware/multer");

const upload = multer({ storage: storage });

const router = require("express").Router();

router
  .route("/todo")
  .post(isAuthenticated, upload.single("todoImage"), createTodo)
  .get(getTodo);
router
  .route("/todo/:id")
  .patch(updateTodo)
  .delete(deleteTodo)
  .get(getSingleTodo);
module.exports = router;
