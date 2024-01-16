// models/User.js
const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const moment = require("moment");
const jwt = require("jsonwebtoken");

const currentDate = moment();
const formattedDate = currentDate.format("YYYY-MM-DD HH:mm:ss");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin'] // Enum for user roles
  },
  createdAt: {
    type: Date,
    default: formattedDate // Date.now
  }
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.username = this.username.toLowerCase();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = async function () {
  return jwt.sign({ id: this._id }, process.env.SECRET_KEY, {
    expiresIn: 86400
  });
}

const User = mongoose.model('User', userSchema);

module.exports = User;
