const express = require("express");
const cors = require("cors");
const dbConnect = require("./src/config/db");
const { userRouter, hotelRouter } = require("./src/routes/allroutes");
const PORT = process.env.PORT || 8080

const app = express();

app.use(cors({ credentials: true, origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRouter);
app.use("/hotel", hotelRouter);

app.listen(PORT, async () => {
  try {
    dbConnect();
    console.log(`listening on http://localhost:8080`);
  } catch (error) {
    console.log(error.message);
  }
});
