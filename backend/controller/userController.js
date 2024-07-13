const User = require("../model/userModel");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

exports.userRegistration = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Pleased fill out the form",
      });
    }

    const emailExist = await User.find({ userEmail: email });

    if (emailExist.length > 0) {
      return res.status(400).json({
        message: "Email already Exist",
      });
    }

    const hashPassword = await bcrypt.hash(password, 6);

    const newUser = await User.create({
      userName: name,
      userEmail: email,
      userPassword: hashPassword,
    });

    //FOR GENERATING JWT TOKEN

    const token = jwt.sign({ id: newUser._id }, "secretkey1", {
      expiresIn: "7d",
    });

    res.status(200).json({
      message: "Registered successfully",
      token,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.userLogin = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Pleased fill out the form",
      });
    }

    const userEmailExist = await User.find({ userEmail: email });
    console.log(userEmailExist);

    if (userEmailExist.length == 0) {
      res.status(400).json({
        message: "Pleased Registered",
      });
    }
    const passwordChecked = userEmailExist[0].userPassword;

    if (passwordChecked == password) {
      res.status(200).json({
        message: "Signup successfully",
      });
    } else {
      res.status(400).json({
        message: "Invalid Password or Email",
      });
    }
  } catch (error) {
    error.message;
  }
};
