const Joi = require('joi');

const getUserDetailsSchema = Joi.object({
  name: Joi.string()
    .max(40)
    .required(),
});

module.exports = {
  getUserDetailsSchema,
};
