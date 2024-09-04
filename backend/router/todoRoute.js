const {
  createTodo,
  updateTodo,
  deleteTodo,
  getTodo,
  getSingleTodo,
  getSearchTodo,
} = require("../controller/todoController");
const isAuthenticated = require("../middleware/isAuthenticated");

const { multer, storage } = require("../middleware/multer");

const upload = multer({ storage: storage });

const router = require("express").Router();

router.route("/todo").post(upload.single("todoImage"), createTodo).get(getTodo);
router
  .route("/todo/:id")
  .put(upload.single("todoImage"), updateTodo)
  .delete(deleteTodo)
  .get(getSingleTodo);

router.route("/search").get(getSearchTodo);

module.exports = router;
