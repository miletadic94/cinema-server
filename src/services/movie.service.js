const movieRepository = require("../repository/movie.repository");
const {
  createMovieValidation,
  updateMovieValidation,
} = require("../validation/movies.validation");
const CinemaError = require("../utils/CinemaError");

const fetchAll = async () => {
  try {
    const movies = await movieRepository.findAll();
    if (!movies) throw new CinemaError(404, "Movies Not Found");
    return movies;
  } catch (error) {
    throw error;
  }
};

const findById = async (id) => {
  try {
    const movie = await movieRepository.findById(id);
    if (!movie) throw new CinemaError(404, "Movie Not Found");

    return movie;
  } catch (error) {
    throw error;
  }
};

const findByTitle = async (title) => {
  try {
    const movie = await movieRepository.findByTitle(title);
    return movie;
  } catch (error) {
    throw error;
  }
};

const save = async (data) => {
  try {
    //Validation
    const { error } = createMovieValidation(data);
    if (error) throw new CinemaError(400, error.details[0].message);
    //Check title exist
    const titleExist = await findByTitle(data.title);
    if (!!titleExist) throw new CinemaError(400, "Title Already Exist!");

    const movie = await movieRepository.save(data);
    return { movie };
  } catch (error) {
    throw error;
  }
};

const update = async (id, data) => {
  try {
    //Validation
    const { error } = updateMovieValidation(data);
    if (error) throw new CinemaError(400, error.details[0].message);

    const movie = await movieRepository.findById(id);
    await movie.update({ ...data });
    return { data: movie };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  fetchAll,
  findByTitle,
  findById,
  save,
  update,
};
