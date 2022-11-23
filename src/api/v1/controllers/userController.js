// const mongoose = require('../../../config/db.config');
const User = require('../models/userModel');

const getUserDetails = async (req, res) => {
  const myUser = await User.findOne({ name: req.query.name });
  console.log('bandha', myUser);
  if (myUser == null) {
    return res.status(404).send('This person was not found in the database');
  }
  return res.send(`ye lo <br> ${myUser}`);
};

module.exports = {
  getUserDetails,
};
