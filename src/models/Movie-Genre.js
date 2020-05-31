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
    castId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  {
    timestamps: true,
    tableName: "movie_genre",
  }
);

Movie.belongsToMany(Genre, {
  through: "MovieGenre",
  as: "genres",
  foreignKey: "movieId",
});
Genre.belongsToMany(Movie, {
  through: "MovieGenre",
  as: "movies",
  foreignKey: "genreId",
});

module.exports = MovieGenre;
