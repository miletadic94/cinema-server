const Joi = require("@hapi/joi");
const { EMAIL_REGEX, PHONE_REGEX } = require("../constants/validationRegex");

const saveUserValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(32).required(),
    lastName: Joi.string().min(2).max(32).required(),
    email: Joi.string().regex(EMAIL_REGEX).min(2).max(32).required(),
    phoneNumber: Joi.string().regex(PHONE_REGEX).required(),
    address: Joi.string().min(6).max(128).required(),
    password: Joi.string().min(6).max(128).required(),
    dateOfBirth: Joi.date().required(),
    isConfirmed: Joi.boolean().default(false),
  });
  return schema.validate(data);
};

const updateUserValidation = (data) => {
  const schema = Joi.object({
    id: Joi.number().id(),
    firstName: Joi.string().min(2).max(32).required(),
    lastName: Joi.string().min(2).max(32).required(),
    email: Joi.string().regex(EMAIL_REGEX).max(32).required(),
    phoneNumber: Joi.string().regex(PHONE_REGEX).required(),
    address: Joi.string().min(6).max(128).required(),
    dateOfBirth: Joi.date().required(),
    isConfirmed: Joi.boolean().required(),
    roleId: Joi.number().min(0),
    role: Joi.string().optional(),
  });
  return schema.validate(data);
};

module.exports = {
  saveUserValidation,
  updateUserValidation,
};
