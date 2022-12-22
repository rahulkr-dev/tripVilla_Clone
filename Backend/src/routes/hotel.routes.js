const express = require("express");
const findhotel = require("../controllers/hotel.controller");
const HotelModel = require("../model/hotel.modal");

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

app.post("/lhr", async (req, res) => {
  let city = req.body.data.city;
  try {
    let data = await HotelModel.find({ city: city }).sort({ rating: 1 });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
