const Movie = require("../models/Movie");
const Genre = require("../models/Genre");

// should rename controller

const findAll = async () => {
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
      ],
    });
    return movies;
  } catch (error) {
    throw error;
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
    return await Movie.create(movie);
  } catch (error) {
    throw error;
  }
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
