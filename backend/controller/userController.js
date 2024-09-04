const User = require("../model/userModel");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
require("dotenv").config();

exports.userRegistration = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    console.log(req.body);
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        message: "Pleased fill out the form",
      });
    }

    const emailExist = await User.findOne({ userEmail: email.toLowerCase() });

    if (emailExist) {
      return res.status(400).json({
        message: "Email already Exist",
      });
    }

    const hashPassword = await bcrypt.hash(req.body.password, 6);

    const newUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      userEmail: email.toLowerCase(),
      userPassword: hashPassword,
    });

    //FOR GENERATING JWT TOKEN

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      data: newUser,
      message: "Registered successfully",
      token,
    });
  } catch (error) {
    next(error);
  }
};

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    if (!email || !password) {
      return res.status(400).json({
        message: "Pleased fill out the form",
      });
    }

    const user = await User.findOne({ userEmail: email.toLowerCase() });
    console.log(user);

    if (!user) {
      res.status(400).json({
        message: "User Not Found",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.userPassword);

    if (!isPasswordValid) {
      return next(new createError("Invalid email or password", 401));
    }

    //FOR GENERATING JWT TOKEN

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      user,
      message: "Log In successfully",
      token,
    });
  } catch (error) {
    error.message;
  }
};
