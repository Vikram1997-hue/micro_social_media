const mongoose = require('../../../config/db.config');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: 40,
    required: true,
  },
  age: {
    type: Number,
    required: false,
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema, 'Users');
