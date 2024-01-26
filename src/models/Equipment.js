// models/Equipment.js
const mongoose = require('mongoose');
const { Schema } = mongoose;
const moment = require("moment");

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
    default: () => moment().format("YYYY-MM-DD HH:mm:ss") // Date.now
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }

});

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;
