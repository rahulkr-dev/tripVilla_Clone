const express = require("express");
const {
  register,
  login,
  logout,
  forgotPassword,
} = require("../controllers/auth");

const router = express.Router();

// user register
router.post("/register", register);

// user login
router.post("/login", login);

// logout
router.get("/logout", logout);

// forgot password
router.route("/password/forgot").post(forgotPassword);

module.exports = router;
