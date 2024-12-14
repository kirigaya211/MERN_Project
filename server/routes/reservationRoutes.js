const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const reservation = require("../models/reservation");

router.get("/",authMiddleware,roleMiddleware("admin"),reservationController.getAllReservations);
router.get("/facility-reservations",authMiddleware,roleMiddleware("admin"), reservationController.getAllFacilityReservations);
router.post("/add-reservation",authMiddleware, reservationController.createReservation);
router.get("/user-reservations",authMiddleware, reservationController.getUserReservation);
router.delete("/cancel-reservation/:id",authMiddleware,reservationController.cancelReservation);
router.put("/update-reservation/:id",authMiddleware,roleMiddleware("admin"),reservationController.updateReservation);


module.exports = router;