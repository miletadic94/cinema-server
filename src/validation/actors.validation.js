const Joi = require("@hapi/joi");

const createActorValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(32).required(),
    lastName: Joi.string().min(2).max(32).required(),
    biography: Joi.string().min(6).max(128).allow(null),
    dateOfBirth: Joi.date().allow(null),
    placeOfBirth: Joi.string().min(6).max(128).allow(null),
  });
  return schema.validate(data);
};

const updateActorValidation = (data) => {
  const schema = Joi.object({
    id: Joi.number().id(),
    firstName: Joi.string().min(2).max(32).required(),
    lastName: Joi.string().min(2).max(32).required(),
    biography: Joi.string().min(6).max(128).allow(null),
    dateOfBirth: Joi.date().allow(null),
    placeOfBirth: Joi.string().min(6).max(128).allow(null),
  });
  return schema.validate(data);
};

module.exports = {
  createActorValidation,
  updateActorValidation,
};
