// models/Reservation.js
const mongoose = require('mongoose');
const { Schema } = mongoose;
const moment = require("moment");

const currentDate = moment();
const formattedDate = currentDate.format("YYYY-MM-DD HH:mm:ss");

const reservationSchema = new Schema({
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
    default: formattedDate
  }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
