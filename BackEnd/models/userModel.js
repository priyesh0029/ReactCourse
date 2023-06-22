const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        default: 'user',
        required: true,
      },
      isBlocked: {
        type: Boolean,
        default: false,
      },
      image: {
        type: String,
      },
});

module.exports = {
     user: mongoose.model('user', userSchema),
  
  }