/* eslint-disable import/no-import-module-exports */
// const Response = require('./customResponse');
const userValidators = require('../validation/user/schema');

const getUserDetailsValidator = async (req, res, next) => {
  try {
    await userValidators.getUserDetailsSchema.validateAsync({
      name: req.query.name,
    });
    next();
  } catch (err) {
    res.status(400).send('Incomplete parameters sent');
  }
};

module.exports = {
  getUserDetailsValidator,
};
