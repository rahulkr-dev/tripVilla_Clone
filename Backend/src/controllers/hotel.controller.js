const HotelModel = require("../model/hotel.modal");

async function findhotel(city) {
  let data = await HotelModel.find({ city: city });
  if (data.length > 0) {
    return data;
  }
  return { status: "failed", message: "Sorry Can't Find Hotels In This City" };
}

module.exports = findhotel;
