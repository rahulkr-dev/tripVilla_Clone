const express = require("express");
const findhotel = require("../controllers/hotel.controller");

const app = express.Router();

app.get("/", async (req, res) => {
  console.log(req.body);
  let city = "Jaipur";
  try {
    console.log(city);
    let hotel = await findhotel(city);
    return res.send(hotel);
  } catch (error) {
    return res.send(error.message);
  }
});

module.exports = app;
