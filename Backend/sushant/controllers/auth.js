const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const createError = require("../utilities/error");
const nodemailer = require("nodemailer");

// Register User
exports.register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};

// Login User

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or email!"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ ...otherDetails });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// Logout
exports.logout = async (req, res, next) => {
  try {
    res.cookie("access_token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res.status(200).json({
      sucess: true,
      mssage: "Logged Out Successfully",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// forgot password
const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: "false",
  port: 587,
  auth: {
    user: process.env.NODEMAILERUSER,
    pass: process.env.NODEMAILERPASSWORD,
  },
});

exports.forgotPassword = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  // try {
  if (user) {
    const otp = Math.floor(Math.random() * (9999 - 1000) + 1000);
    transport.sendMail({
      to: user.email,
      subject: "Password reset OTP",
      from: "TheCozyVila@gmail.com",
      text: `Your password reset otp is ${otp}. This OTP will valid for 5 minutes.`,
    });
    return { email: user.email, otp: otp };
  } else {
    return { status: "failed", message: "With This Email There Is No User" };
  }
};
