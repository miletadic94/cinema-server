const { db } = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const Genre = db.define(
  "Genre",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true,
    tableName: "genre",
  }
);

module.exports = Genre;
