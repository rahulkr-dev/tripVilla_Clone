const express = require("express");
const {
  verifyAdmin,
  verifyUser,
  verifyToken,
} = require("../utilities/verifyToken");
const {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} = require("../controllers/user");

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user, you are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user, you are logged in and you can delete your account");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello admin, you are logged in and you can delete all accounts");
// });

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyAdmin, getUser);

//GET ALL
router.get("/", getUsers);

module.exports = router;
