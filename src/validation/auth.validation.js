const Joi = require("@hapi/joi");
const { EMAIL_REGEX } = require("../constants/validationRegex");

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().regex(EMAIL_REGEX).required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const registerValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(256).required(),
    lastName: Joi.string().min(2).max(256).required(),
    email: Joi.string().regex(EMAIL_REGEX).required(),
    phoneNumber: Joi.string().min(6).max(256).required(),
    address: Joi.string().min(6).max(1024).required(),
    password: Joi.string().min(6).max(1024).required(),
    dateOfBirth: Joi.date().required(),
  });
  return schema.validate(data);
};

module.exports = {
  loginValidation,
  registerValidation,
};
