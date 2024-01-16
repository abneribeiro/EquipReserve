// models/Equipment.js
const mongoose = require('mongoose');
const { Schema } = mongoose;
const moment = require("moment");

const currentDate = moment();
const formattedDate = currentDate.format("YYYY-MM-DD HH:mm:ss");

const equipmentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 0  // Ensure quantity is non-negative
  },
  status: {
    type: String,
    enum: ['available', 'reserved'],
    default: 'available'
  },
  createdAt: {
    type: Date,
    default: formattedDate // Date.now
  }
});

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;
