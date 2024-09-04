const { userRegistration, userLogin } = require("../controller/userController");
const isAuthenticated = require("../middleware/isAuthenticated");
const router = require("express").Router();

router.route("/userRegister").post(userRegistration);
router.route("/userlogin").post(userLogin);

module.exports = router;
