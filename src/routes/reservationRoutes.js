// routes/reservationRoutes.js
const express = require('express');
const router = express.Router();
const ReservationController = require('../controllers/reservationController');

// Create new reservation
router.post('/', ReservationController.createReservation);

// Get all reservations
router.get('/', ReservationController.getAllReservations );

// Get reservation by ID
router.get('/:reservationId', ReservationController.getReservationById );

// Update reservation
router.put('/:reservationId', ReservationController.updateReservation );

// Delete reservation
router.delete('/:reservationId', ReservationController.deleteReservation);

module.exports = router;
