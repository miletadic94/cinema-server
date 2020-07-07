const Joi = require("@hapi/joi");

const movieValidation = (data) => {
  const schema = Joi.object({
    id: Joi.number().allow(),
    title: Joi.string().min(2).max(128).required(),
    synopsys: Joi.string().min(6).max(2048).allow(null),
    duration: Joi.number().allow(null),
    youtubeLink: Joi.string().allow(null),
    releaseDate: Joi.date().allow(null),
    genres: Joi.array().allow(null),
    actors: Joi.array().allow(null),
    director: Joi.string().required(),
    image: Joi.string().allow(),
  });
  return schema.validate(data);
};

module.exports = {
  movieValidation,
};
