const { db } = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const Movie = require("./Movie");
const Actor = require("./Actor");

const MovieActor = db.define(
  "MovieActor",
  {
    movieId: {
      type: DataTypes.INTEGER,
    },
    actorId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    tableName: "movie_actor",
  }
);

Movie.belongsToMany(Actor, {
  through: "MovieActor",
  as: "actors",
  foreignKey: "movieId",
});
Actor.belongsToMany(Movie, {
  through: "MovieActor",
  as: "movies",
  foreignKey: "actorId",
});

module.exports = MovieActor;
