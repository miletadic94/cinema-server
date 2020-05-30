const { db } = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const Movie = require("./Movie");
const Cast = require("./Cast");

const MovieCast = db.define(
  "MovieCast",
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
    tableName: "movie_cast",
  }
);

Movie.belongsToMany(Cast, {
  through: "MovieCast",
  as: "casts",
  foreignKey: "movieId",
});
Cast.belongsToMany(Movie, {
  through: "MovieCast",
  as: "movies",
  foreignKey: "castId",
});

module.exports = MovieCast;
