const Joi = require("@hapi/joi");

const moviesValidation = data => {
  const schema = Joi.object({
    title: Joi.string().required(),
    year: Joi.number().required(),
    description: Joi.string().required(),
    isActuel: Joi.boolean().required()
  });
  return schema.validate(data);
};

module.exports = {
  moviesValidation
};
