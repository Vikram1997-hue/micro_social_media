const express = require('express');
const { USER_ROUTES } = require('../helpers/constants');
const userController = require('../controllers/userController');
const {
  getUserDetailsValidator,
} = require('../middleware/joivalidator');

const router = express.Router();
const {
  getUser,
  addUser,
} = USER_ROUTES;

router.get(
  getUser,
  getUserDetailsValidator,
  userController.getUserDetails,
);

router.post(
  addUser,
  userController.register,
);

module.exports = router;
