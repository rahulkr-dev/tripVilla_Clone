const express = require("express");
const findhotel = require("../controllers/hotel.controller");

const app = express.Router();

app.post("/", async (req, res) => {
  let city = req.body.data.charAt(0).toUpperCase() + req.body.data.slice(1);
  console.log(city);
  try {
    let hotel = await findhotel(city);
    return res.send(hotel);
  } catch (error) {
    return res.send(error.message);
  }
});

module.exports = app;
