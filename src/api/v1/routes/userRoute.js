const express = require('express');
const { USER_ROUTES } = require('../helpers/constants');
const userController = require('../controllers/userController');

const router = express.Router();
const {
  getUser,
//   addUser,
} = USER_ROUTES;

router.get(
  getUser,
  userController.getUserDetails,
);

// router.post(
//   addUser,

// );

module.exports = router;
