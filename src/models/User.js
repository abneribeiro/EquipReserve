// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Definir a estrutura do modelo de usuário
});

const User = mongoose.model('User', userSchema);

module.exports = User;
