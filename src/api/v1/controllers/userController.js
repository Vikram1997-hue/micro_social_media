// const mongoose = require('../../../config/db.config');
const User = require('../models/userModel');

const getUserDetails = async (req, res) => {
  const myUser = await User.findOne({ name: req.query.name });
  // console.log('bandha', myUser);
  if (myUser == null) {
    return res.status(404).send('This person was not found in the database');
  }
  return res.send(`ye lo <br> ${myUser}`);
};

const register = async (req, res) => {
  // check if guy exists - ADD
  console.log('hereeeeeeee');
  console.log(req.body);
  const myUser = await User.create({
    name: req.body.name,
    age: req.body.age,
  });
  await myUser.save();
  res.status(200).send('New user has been successfully registered!');
};

module.exports = {
  getUserDetails,
  register,
};
