const { db } = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const Movie = require("./Movie");
const Genre = require("./Genre");

const MovieGenre = db.define(
  "MovieGenre",
  {
    movieId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    genreId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
    tableName: "movie_genre",
  }
);

Genre.belongsToMany(Movie, {
  through: "MovieGenre",
  as: "movies",
  foreignKey: "genreId",
});

Movie.belongsToMany(Genre, {
  through: "MovieGenre",
  as: "genres",
  foreignKey: "movieId",
});

module.exports = MovieGenre;
