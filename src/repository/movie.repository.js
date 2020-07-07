const { Op } = require("sequelize");
const Movie = require("../models/Movie");
const genreRepository = require("../repository/genre.repository");
const actorRepository = require("../repository/actor.repository");
const Genre = require("../models/Genre");
const Actor = require("../models/Actor");
const MovieGenre = require("../models/Movie-Genre");
const MovieActor = require("../models/Movie-Actor");

// should rename to controller

const findAll = async (title) => {
  try {
    const movies = await Movie.findAll({
      include: [
        {
          model: Genre,
          as: "genres",
          required: false,
          attributes: ["id", "name"],
          through: { attributes: [] },
        },
        {
          model: Actor,
          as: "actors",
          required: false,
          attributes: ["id", "firstName", "lastName"],
          through: { attributes: [] },
        },
      ],
    });
    return movies;
  } catch (error) {
    throw error;
  }
};

const findAllByTitle = async (title) => {
  try {
    const movies = await Movie.findAll({
      where: {
        title: {
          [Op.like]: `%${title}%`,
        },
      },
      include: [
        {
          model: Genre,
          as: "genres",
          required: false,
          attributes: ["id", "name"],
          through: { attributes: [] },
        },
      ],
    });
    return movies;
  } catch (error) {
    return error;
  }
};

const findById = (id) => {
  return Movie.findOne({
    include: [
      {
        model: Genre,
        as: "genres",
        required: false,
        attributes: ["id", "name"],
        through: { attributes: [] },
      },
      {
        model: Actor,
        as: "actors",
        required: false,
        attributes: ["id", "firstName"],
        through: { attributes: [] },
      },
    ],
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

const save = async (movie) => {
  try {
    const savedMovie = await Movie.create(movie);
    // genreIds
    const genres = await genreRepository.findAllByIds(movie.genres);
    await savedMovie.addGenres(genres);

    const actors = await actorRepository.findAllByIds(movie.actors);
    await savedMovie.addActors(actors);
    return savedMovie;
  } catch (error) {
    return error;
  }
};

const update = async (id, data) => {
  try {
    const movie = await findById(id);
    const { genres, actors, ...movieData } = data;
    await movie.update(movieData);

    const genresToUpdate = await genreRepository.findAllByIds(genres);
    const actorsToUpdate = await genreRepository.findAllByIds(actors);

    await MovieGenre.destroy({
      where: {
        movieId: id,
      },
    });

    await MovieActor.destroy({
      where: {
        movieId: id,
      },
    });

    await movie.addGenres(genresToUpdate);
    await movie.addActors(actorsToUpdate);

    return movie;
  } catch (error) {
    return error;
  }
};

module.exports = {
  findAll,
  findAllByTitle,
  findById,
  findByTitle,
  save,
  update,
};
