// models/Reservation.js
const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  // Definir a estrutura do modelo de reserva
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  equipment: {
    type: Schema.Types.ObjectId,
    ref: 'Equipment',
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
