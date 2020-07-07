const Joi = require("@hapi/joi");

const createMovieValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(2).max(128).required(),
    year: Joi.number().min(1880).required(),
    synopsys: Joi.string().min(6).max(2048).allow(null),
    duration: Joi.number().allow(null),
    youtubeLink: Joi.string().allow(null),
    releaseDate: Joi.date().allow(null),
    genres: Joi.array().allow(null),
    actors: Joi.array().allow(null),
  });
  return schema.validate(data);
};

const updateMovieValidation = (data) => {
  const schema = Joi.object({
    id: Joi.number().id(),
    title: Joi.string().min(2).max(128).required(),
    year: Joi.number().min(1880).required(),
    synopsys: Joi.string().min(6).max(2048).allow(null),
    duration: Joi.number().allow(null),
    youtubeLink: Joi.string().allow(null),
    releaseDate: Joi.date().allow(null),
    genres: Joi.array().allow(null),
    actors: Joi.array().allow(null),
  });
};

module.exports = {
  createMovieValidation,
  updateMovieValidation,
};
