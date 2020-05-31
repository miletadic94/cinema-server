const Joi = require("@hapi/joi");

const createGenreValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(32).required(),
  });
  return schema.validate(data);
};

const updateGenreValidation = (data) => {
  const schema = Joi.object({
    id: Joi.number().id(),
    name: Joi.string().min(2).max(32).required(),
  });
  return schema.validate(data);
};

module.exports = {
  createGenreValidation,
  updateGenreValidation,
};
