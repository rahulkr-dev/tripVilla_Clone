const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const createError = require("../utilities/error");
const nodemailer = require("nodemailer");
const sendEmail = require("../utilities/sendEmail");

const dotenv = require("dotenv");
dotenv.config();

async function register({ email, password, name }) {
  let user = await User.findOne({ email: email });
  try {
    if (user) {
      return { status: "Failed", message: "Please try with different email" };
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    user = await User.create({
      email: email,
      password: hash,
      name: name,
    });
    return "Signed in successfully";
  } catch (error) {
    console.log(error);
  }
}

async function login({ email, password }) {
  let user = await User.findOne({ email });

  if (!user) {
    return { status: "failed", message: "Please check your email" };
  }

  const matchpassword = await bcrypt.compare(password, user.password);

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
  let user = await User.findOneAndUpdate(filter, update);
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
  let user = await User.findOne({ email: email });

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

module.exports = { register, login, refresh, checkemail, resetpassword };

// // Register User
// exports.register = async (req, res, next) => {
//   try {
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(req.body.password, salt);

//     const newUser = new User({
//       ...req.body,
//       password: hash,
//     });

//     await newUser.save();
//     res.status(200).send("User has been created.");
//   } catch (err) {
//     next(err);
//   }
// };

// // Login User

// exports.login = async (req, res, next) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) return next(createError(404, "User not found!"));

//     const isPasswordCorrect = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );
//     if (!isPasswordCorrect)
//       return next(createError(400, "Wrong password or email!"));

//     const token = jwt.sign(
//       { id: user._id, isAdmin: user.isAdmin },
//       process.env.JWT
//     );

//     const { password, isAdmin, ...otherDetails } = user._doc;
//     res
//       .cookie("access_token", token, {
//         httpOnly: true,
//       })
//       .status(200)
//       .json({ ...otherDetails });
//   } catch (err) {
//     console.log(err);
//     next(err);
//   }
// };

// Logout
// exports.logout = async (req, res, next) => {
//   try {
//     res.cookie("access_token", null, {
//       expires: new Date(Date.now()),
//       httpOnly: true,
//     });

//     res.status(200).json({
//       sucess: true,
//       mssage: "Logged Out Successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// };

// forgot password by otp

// const transport = nodemailer.createTransport({
//   service: "gmail",
//   host: "smtp.gmail.com",
//   secure: "false",
//   port: 587,
//   auth: {
//     user: process.env.NODEMAILERUSER,
//     pass: process.env.NODEMAILERPASSWORD,
//   },
// });

// exports.forgotPassword = async (req, res, next) => {
//   const user = await User.findOne({ email: req.body.email });

//   // try {
//   if (user) {
//     const otp = Math.floor(Math.random() * (9999 - 1000) + 1000);
//     transport.sendMail({
//       to: user.email,
//       subject: "Password reset OTP",
//       from: "TheCozyVila@gmail.com",
//       text: `Your password reset otp is ${otp}. This OTP will valid for 5 minutes.`,
//     });
//     return { email: user.email, otp: otp };
//   } else {
//     return { status: "failed", message: "With This Email There Is No User" };
//   }
// };

// Forgot Password by link

// exports.forgotPassword = async (req, res, next) => {
//   const user = await User.findOne({ email: req.body.email });
//   // we are finding user through email

//   if (!user) {
//     return next(createError("User not found", 404));
//   }

//   // Get ResetPassword Token
//   const resetToken = user.getResetPasswordToken();

//   await user.save({ validateBeforeSave: false });

//   const resetPasswordUrl = `${req.protocol}://${req.get(
//     "host"
//   )}/api/v1/password/reset/${resetToken}`;

//   const message = `Your password reset token is:- \n\n ${resetPasswordUrl} \n\n If you have not requested this email then, please ignore it.`;

//   try {
//     await sendEmail({
//       email: user.email,
//       subject: `Ecommerce Password Recovery`,
//       message,
//     });

//     res.status(200).json({
//       success: true,
//       message: `Email sent to ${user.email} successfully`,
//     });
//   } catch (error) {
//     // if no data is available then it is undefined
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpire = undefined;

//     // after undefined it also need to save as we done above in resetToken
//     await user.save({ validateBeforeSave: false });

//     return next(createError(error.message, 500));
//   }
// };

// // Reset Password
// exports.resetPassword = async (req, res, next) => {
//   // creating token hash
//   const resetPasswordToken = crypto
//     .createHash("sha256")
//     .update(req.params.token)
//     .digest("hex");

//   // by using hash token we will find user in database
//   const user = await User.findOne({
//     resetPasswordToken, // key value are same
//     resetPasswordExpire: { $gt: Date.now() },
//   });

//   // if user doesnot find
//   if (!user) {
//     return next(
//       createError("Reset Password Token is invalid or has been expired", 400)
//     );
//   }

//   // if new password and confirm password doesn't match
//   if (req.body.password !== req.body.confirmPassword) {
//     return next(createError("Password does not matched", 400));
//   }

//   // password succesfull changed hence resetPasswordToken & resetPasswordExpire has to be undefined
//   user.password = req.body.password;
//   user.resetPasswordToken = undefined;
//   user.resetPasswordExpire = undefined;

//   await user.save();

//   // so user changed his password then he is logged in automatically
//   sendToken(user, 200, res);
// };

// // Update User Password
// exports.updatePassword = async (req, res, next) => {
//   const user = await User.findById(req.user.id).select("+password");

//   const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

//   if (!isPasswordMatched) {
//     return next(createError("Old password is incorrect", 400));
//   }

//   if (req.body.newPassword !== req.body.confirmPassword) {
//     return next(createError("password does not match", 400));
//   }

//   user.password = req.body.newPassword;

//   await user.save();

//   sendToken(user, 200, res);
// };
