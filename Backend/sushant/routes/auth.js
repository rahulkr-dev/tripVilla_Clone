const express = require("express");
const { register, login } = require("../controllers/auth");

const router = express.Router();

// user register
router.post("/register", register);

// user login
router.post("/login", login);

module.exports = router;
