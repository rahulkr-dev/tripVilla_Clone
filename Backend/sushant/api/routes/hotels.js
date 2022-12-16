const express = require("express");
const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
  getHotelRooms,
  countByType,
  countByCity,
  getHotelByCity,
} = require("../controllers/hotel");
const { verifyAdmin } = require("../utilities/verifyToken");

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);

// UPDATE
router.put("/:id", verifyAdmin, updateHotel);

// DELETE
router.delete("/:id", deleteHotel);

// GET
// router.get("/:id", getHotel);

// GET HOTEL BY CITY
router.get("/", getHotelByCity);

// GET ALL
router.get("/", getHotels);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

module.exports = router;
