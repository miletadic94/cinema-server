const Movie = require("../models/Movie");

const findAll = () => {
  return Movie.findAll();
};

const findById = (id) => {
  return Movie.findOne({
    where: { id },
  });
};

const findByTitle = (title) => {
  return Movie.findOne({
    where: {
      title,
    },
  });
};

const save = (movie) => {
  return Movie.create(movie);
};

const update = (id, movie) => {
  return Movie.update({ ...movie }, { returning: true, where: { id } });
};

module.exports = {
  findAll,
  findById,
  findByTitle,
  save,
  update,
};
