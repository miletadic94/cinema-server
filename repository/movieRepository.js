const Movie = require("../models/Movie");

const findAll = () => {
  return Movie.findAll();
};

const findById = (id) => {
  return Movie.findByPk(id);
};

const save = (movie) => {
  return Movie.create(movie);
};

const update = (movie) => {
  return Movie.update(movie);
};

module.exports = {
  findAll,
  findById,
  save,
  update,
};
