const Movie = require("../model/Movie");
const { moviesValidation } = require("../validation/movies.validation");
const CinemaError = require("../utils/CinemaError");

const getAll = async () => {
  try {
  } catch (error) {
    throw error;
  }
};

const get = async (id) => {};

const save = async (movie) => {
  try {
    const { error } = moviesValidation({ ...movie });
    if (error) throw new CinemaError(400, error.message);

    const movieExists = await Movie.findOne({ title: movie.title });
    if (movieExists) throw new CinemaError(400, "Movie title already exists");

    return await new Movie(movie).save();
  } catch (error) {
    throw error;
  }
};

// const remove = async id => {
//     return await Movie.find(id)
// }

module.exports = {
  getAll,
  save,
};
