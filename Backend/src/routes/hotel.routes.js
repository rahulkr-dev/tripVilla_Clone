const express = require("express");
const findhotel = require("../controllers/hotel.controller");

const app = express.Router();

app.post("/", async (req, res) => {
  let city = req.body.data.city;
  try {
    console.log(city);
    let hotel = await findhotel(city);
    return res.send(hotel);
  } catch (error) {
    return res.send(error.message);
  }
});

module.exports = app;
