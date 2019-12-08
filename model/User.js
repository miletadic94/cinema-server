const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 6,
    max: 256
  },
  email: {
    type: String,
    required: true,
    max: 256,
    min: 6
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  },
  // date: {
  //   type: Date,
  //   default: Date.now
  // }
});

module.exports = mongoose.model('User', userSchema);