const genreRepository = require("../repository/genre.repository");
const {
  createGenreValidation,
  updateGenreValidation,
} = require("../validation/genres.validation");
const CinemaError = require("../utils/CinemaError");

const fetchAll = async () => {
  try {
    const genres = await genreRepository.findAll();
    if (!genres) throw new CinemaError(404, "Genres Not Found");
    return genres;
  } catch (error) {
    throw error;
  }
};

const findById = async (id) => {
  try {
    const genre = await genreRepository.findById(id);
    if (!genre) throw new CinemaError(404, "Genre Not Found");

    return genre;
  } catch (error) {
    throw error;
  }
};

const findByName = async (name) => {
  try {
    const genre = await genreRepository.findByName(name);
    return genre;
  } catch (error) {
    throw error;
  }
};

const save = async (data) => {
  try {
    //Validation
    const { error } = createGenreValidation(data);
    if (error) throw new CinemaError(400, error.details[0].message);

    //Check name exist
    const titleExist = await genreRepository.findByName(data.name);
    if (!!titleExist) throw new CinemaError(400, "Genre Already Exist!");

    const genre = await genreRepository.save(data);
    return { genre };
  } catch (error) {
    throw error;
  }
};

const update = async (id, data) => {
  try {
    //Validation
    const { error } = updateGenreValidation(data);
    if (error) throw new CinemaError(400, error.details[0].message);

    const genre = await genreRepository.findById(id);
    await genre.update({ ...data });
    return { data: genre };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  fetchAll,
  findByName,
  findById,
  save,
  update,
};
