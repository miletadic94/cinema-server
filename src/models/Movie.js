const { db } = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const Movie = db.define(
  "Movie",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "movie",
  }
);

module.exports = Movie;
