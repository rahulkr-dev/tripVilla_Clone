const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const hotelsRoute = require("./routes/hotels");
const roomsRoute = require("./routes/rooms");
const cookieParser = require("cookie-parser");

// config
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// PORT
const PORT = process.env.PORT;

const connect = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to mongoDB.");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("server disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("sever connected");
});

// middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(PORT, () => {
  connect();
  console.log(`Connected to http://localhost:${PORT}`);
});
