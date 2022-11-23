const express = require('express');
const { USER_ROUTES } = require('../helpers/constants');
const userController = require('../controllers/userController');

const router = express.Router();
const {
  home,
  getUser,
//   addUser,
} = USER_ROUTES;

router.get( // for testing purposes only
  home,
  userController.homeController,
);

router.get(
  getUser,
  userController.getUserDetails,
);

// router.post(
//   addUser,

// );

module.exports = router;
