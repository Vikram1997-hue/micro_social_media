const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/microsocial', () => {
  console.log('Connection to DB successful!');
}, (err) => {
  console.error('Error while connecting to Mongo database:', err);
});

module.exports = mongoose;
