// models/Equipment.js
const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
  // Definir a estrutura do modelo de equipamento
});

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;
