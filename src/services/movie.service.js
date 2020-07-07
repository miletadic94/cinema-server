const fs = require('fs')
const movieRepository = require("../repository/movie.repository");

const {
  createMovieValidation,
  updateMovieValidation,
} = require("../validation/movies.validation");
const CinemaError = require("../utils/CinemaError");

const fetchAll = async (title) => {
  try {
    let movies = [];
    if (title) {
      movies = await movieRepository.findAllByTitle(title);
    } else {
      movies = await movieRepository.findAll(title);
    }
    if (!movies) throw new CinemaError(404, "Movies Not Found");
    fetchImageForMovies(movies)
    return movies;
  } catch (error) {
    throw error;
  }
};

const findAllByTitle = async (title) => {
  try {
    const movies = await movieRepository.findAllByTitle(title);
    if (!movies) throw new CinemaError(404, "Movies Not Found");
    fetchImageForMovies(movies)
    return movies;
  } catch (error) {
    throw error;
  }
};

const findById = async (id) => {
  try {
    let movie = await movieRepository.findById(id);
    if (!movie) throw new CinemaError(404, "Movie Not Found");
    fetchImageForMovies([movie])
    return movie;
  } catch (error) {
    throw error;
  }
};

const findByTitle = async (title) => {
  try {
    const movie = await movieRepository.findByTitle(title);
    fetchImageForMovies([movie])
    return movie;
  } catch (error) {
    throw error;
  }
};

const save = async (data, image) => {
  try {
    //Validation
    const { error } = createMovieValidation(data);
    if (error) throw new CinemaError(400, error.details[0].message);
    //Check title exist
    const titleExist = await findByTitle(data.title);
    if (!!titleExist) throw new CinemaError(400, "Already Exist!");

    console.log("image", image);

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

    const movie = await movieRepository.update(id, data);
    console.log(movie);
    return { data: movie };
  } catch (error) {
    throw error;
  }
};

const fetchImageForMovies = movies => {
  try {
    movies = movies.map((movie) => {
      if(movie.imagePath) {
        movie.dataValues.image = fs.readFileSync(movie.imagePath, {
          encoding: "base64",
        });
        return movie
    }
    })   
  } catch (error) {
    throw error
  }
}

module.exports = {
  fetchAll,
  findAllByTitle,
  findByTitle,
  findById,
  save,
  update,
};
