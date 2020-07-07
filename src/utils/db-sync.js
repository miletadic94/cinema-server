const Role = require("../models/Role");
const User = require("../models/User");
const Movie = require("../models/Movie");
const Genre = require("../models/Genre");
const Actor = require("../models/Actor");
const MovieActor = require("../models/Movie-Actor");
const MovieGenre = require("../models/Movie-Genre");
const Product = require("../models/Product");
const Receipt = require("../models/Receipt");
const ProductReceipt = require("../models/Product-Receipt");
const Review = require("../models/Review");

const modelsToSync = [
  Role,
  User,
  Movie,
  Genre,
  MovieGenre,
  Actor,
  MovieActor,
  Product,
  Receipt,
  ProductReceipt,
  Review,
];

module.exports = syncDB = async (truncate) => {
  for (const model of modelsToSync) {
    await model.sync({ alter: true, force: truncate });
  }
};
