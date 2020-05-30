const Role = require("../models/Role");
const User = require("../models/User");
const Movie = require("../models/Movie");
const Cast = require("../models/Cast");
const MovieCast = require("../models/Movie-Cast");

const modelsToSync = [Role, User, Movie, Cast, MovieCast];

module.exports = syncDB = async (truncate) => {
  for (const model of modelsToSync) {
    await model.sync({ alter: true, force: truncate });
  }
};