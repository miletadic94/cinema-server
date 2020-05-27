const Movie = require("../models/Movie");

const findAll = () => {
  return Movie.findAll();
};

const save = (movie) => {
  return Movie.create(movie);
};

module.exports = {
  findAll,
  save,
};
