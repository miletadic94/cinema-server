const { db } = require("../config/sequelize");
const { DataTypes } = require("sequelize");
const User = require("../models/User");
const Movie = require("../models/Movie");

const Review = db.define(
  "Review",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    rate: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5,
      },
    },
    comment: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    tableName: "review",
  }
);

User.hasMany(Review, { foreignKey: "userId", targetKey: "id" });
Review.belongsTo(User, {
  foreignKey: { name: "userId", allowNull: false },
  sourceKey: "id",
  as: "user",
});

Movie.hasMany(Review, { foreignKey: "movieId", targetKey: "id" });
Review.belongsTo(Movie, {
  foreignKey: { name: "movieId", allowNull: false },
  sourceKey: "id",
  as: "movie",
});

module.exports = Review;
