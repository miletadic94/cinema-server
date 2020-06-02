const Role = require("../models/Role");
const User = require("../models/User");
const Movie = require("../models/Movie");
const Genre = require("../models/Genre");
const Actor = require("../models/Actor");
const MovieActor = require("../models/Movie-Actor");
const MovieGenre = require("../models/Movie-Genre");

const modelsToSync = [Role, User, Movie, Genre, MovieGenre, Actor, MovieActor];

module.exports = syncDB = async (truncate) => {
  for (const model of modelsToSync) {
    await model.sync({ alter: true, force: truncate });
  }
};
