const MovieRepository = require("../repository/MovieRepository");

const fetchAll = async () => {
  try {
    const movies = await MovieRepository.findAll();
    return movies;
  } catch (error) {
    throw error;
  }
};

const save = async (data) => {
  try {
    return MovieRepository.save(data);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  fetchAll,
  save,
};
