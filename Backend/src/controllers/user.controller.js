const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const UserModel = require("../model/user.model");

async function signup({ email, password, name }) {
  let user = await UserModel.findOne({ email: email });
  if (user) {
    return { status: "Failed", message: "Please try with different email" };
  }
  user = await UserModel.create({
    email: email,
    password: password,
    name: name,
  });
  return "Signed in successfully";
}

async function login({ email, password }) {
  let user = await UserModel.findOne({ email });

  if (!user) {
    return { status: "failed", message: "Please check your email" };
  }

  const matchpassword = user.password === password;

  if (!matchpassword) {
    return { status: "failed", message: "Please check your password" };
  }

  const token = jwt.sign({ user }, "1234", { expiresIn: "1 hr" });
  const refreshtoken = jwt.sign({ user }, "refresh1234", {
    expiresIn: "7 days",
  });

  return {
    jwttoken: token,
    userid: user._id,
    refreshtoken: refreshtoken,
    message: "Login Successfully",
  };
}

async function refresh(bearerToken) {
  if (!bearerToken || !bearerToken.startsWith("Bearer ")) {
    return { message: "Login again Session Expired", status: "Failed" };
  }

  const refreshtoken = bearerToken.split(" ")[1];

  const verifyRefreshToken = jwt.verify(refreshtoken, "refresh1234");

  if (verifyRefreshToken) {
    const user = verifyRefreshToken.user;
    const token = jwt.sign({ user }, "1234", { expiresIn: "1 hr" });
    return {
      jwttoken: token,
      userid: user._id,
    };
  } else {
    return { message: "Login again Session Expired", status: "Failed" };
  }
}

async function resetpassword({ email, password }) {
  let filter = { email: email };
  let update = { password: password };
  let user = await UserModel.findOneAndUpdate(filter, update);
  return "Password updated successfully Login Now";
}

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

async function checkemail(email) {
  let user = await UserModel.findOne({ email: email });

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
}

module.exports = { signup, login, refresh, checkemail, resetpassword };
