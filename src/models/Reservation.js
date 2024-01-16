// models/Reservation.js
const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  // Definir a estrutura do modelo de reserva
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
