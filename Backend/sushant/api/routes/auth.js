const express = require("express");
const {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword,
  updatePassword,
} = require("../controllers/auth");

const router = express.Router();

// user register
router.post("/register", register);

// user login
router.post("/login", login);

// logout
router.get("/logout", logout);

// // Fogot Password
// router.route("/password/forgot").post(forgotPassword);

// // Reset Password
// router.route("/password/reset/:token").put(resetPassword);

// // Update Password
// router.route("/password/update").put(updatePassword);

module.exports = router;
