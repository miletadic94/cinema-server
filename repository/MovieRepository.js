const Movie = require("../models/Movie");

const findAll = () => {
  return Movie.findAll();
};

module.exports = {
  findAll,
};
