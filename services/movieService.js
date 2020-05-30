const movieRepository = require("../repository/movieRepository");

const fetchAll = async () => {
  try {
    const movies = await movieRepository.findAll();
    return movies;
  } catch (error) {
    throw error;
  }
};

const findById = async (id) => {
  try {
    const movie = await movieRepository.findById(id);
    return movie;
  } catch (error) {
    throw error;
  }
};

const save = async (data) => {
  try {
    return movieRepository.save(data);
  } catch (error) {
    throw error;
  }
};

const update = async (body) => {
  try {
    //let updatedMovie = {};
    let movie = await movieRepository.findById(body.id);

    movie = { ...movie, ...body };
    //TODO: Validation
    return movieRepository.update(movie);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  fetchAll,
  findById,
  save,
  update,
};
