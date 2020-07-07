const { db } = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const User = require("./User");

const Movie = db.define(
  "Movie",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    synopsys: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    youtubeLink: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    releaseDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imagePath: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    defaultScope: {
      attributes: { exclude: ["updatedAt", "createdAt"] },
    },
    timestamps: true,
    tableName: "movie",
  }
);

module.exports = Movie;
