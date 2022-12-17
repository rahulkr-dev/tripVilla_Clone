const express = require("express");
const {
  register,
  login,
  checkemail,
  resetpassword,
} = require("../controllers/auth");

const router = express.Router();

router.post("/register", async (req, res) => {
  let { email, password, name } = req.body;
  try {
    // console.log(email, password);
    let data = await register({ email, password, name });
    if (data.status == "Failed") {
      return res.status(500).json(data);
    }
    return res.status(201).send(data);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message, status: "Failed" });
  }
});

router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    let data = await login({ email, password });
    if (data.status == "Failed") {
      return res.status(500).json(data);
    }
    return res.status(201).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/checkmail", async (req, res) => {
  let email = req.body.email;
  console.log(req.body.email);
  try {
    let data = await checkemail(email);
    if (data.status == "Failed") {
      return res.status(500).json(data);
    }
    return res.status(201).send(data);
  } catch (error) {
    return res
      .status(500)
      .json({ status: "failed", message: "With This Email There Is No User" });
  }
});

router.post("/resetpassword", async (req, res) => {
  let password = req.body.password;
  let email = req.body.email;
  // console.log(email, password);
  try {
    let data = await resetpassword({ email, password });
    return res.status(201).send(data);
  } catch (error) {
    return res.send(error.message);
  }
});

router.post("/logout", (req, res) => {
  return res.send({ message: "Logout successfuly" });
});

router.post("/refresh", async (req, res) => {
  const bearerToken = req?.body?.headers?.Authorization;
  try {
    let data = await refresh(bearerToken);
    if (data.status == "Failed") {
      return res.status(404).json(data);
    }
    return res.status(201).send(data);
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ message: error.message, status: "Failed" });
  }
});

module.exports = router;
