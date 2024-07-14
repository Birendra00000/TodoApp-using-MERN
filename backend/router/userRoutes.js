const { userRegistration, userLogin } = require("../controller/userController");

const router = require("express").Router();

router.route("/userRegister").post(userRegistration);
router.route("/login").post(userLogin);

module.exports = router;
