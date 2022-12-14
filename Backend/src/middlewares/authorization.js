const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return jwt.verify(token, "1234");
};

let blacklist = [];

const authorization = (req, res, next) => {
  try {
    const bearerToken =
      req?.headers?.authorization || req?.body?.headers?.Authorization;

    if (!bearerToken || !bearerToken.startsWith("Bearer ")) {
      return res
        .status(400)
        .json({ message: "Login again Session Expired", status: "Failed" });
    }

    const token = bearerToken.split(" ")[1];

    // console.log(req.get("host"))
    // console.log(req.url)

    if (req.url === "/logout") {
      blacklist.push(token);
      return next();
    }

    if (blacklist.includes(token)) {
      return res.status(400).json({
        message: "Login Again Token Already Expired",
        status: "Failed",
      });
    }

    let user;
    try {
      user = verifyToken(token);
      console.log("hi i am authorization your token is verifyed");
    } catch (e) {
      blacklist.push(token);
      //console.log(blacklist);
      console.log("hi i am authorization your token is not verifyed");
      return res
        .status(400)
        .json({ message: "Login Again Token Expired", status: "Failed" });
    }

    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found, Login again", status: "Failed" });
    }

    req.user = user.user;

    return next();
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};

module.exports = authorization;
