// models/Equipment.js
const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
  // Definir a estrutura do modelo de equipamento
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
    min: 0  // Garante que a quantidade seja não negativa
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',  // Referência ao usuário proprietário do equipamento
    required: true
  },
  status: {
    type: String,
    enum: ['available', 'reserved'],
    default: 'available'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;
