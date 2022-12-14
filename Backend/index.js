const express = require("express");
const cors = require("cors");
const dbConnect = require("./src/config/db");
const { userRouter } = require("./src/routes/allroutes");

const app = express();

app.use(cors({ credentials: true, origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRouter);

app.listen(8080, async () => {
  try {
    dbConnect();
    console.log(`listening on http://localhost:8080`);
  } catch (error) {
    console.log(error.message);
  }
});
