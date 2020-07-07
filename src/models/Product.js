const { db } = require("../config/sequelize");
const { DataTypes } = require("sequelize");
const Movie = require("./Movie");

const Product = db.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    barcode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    defaultScope: {
      attributes: { exclude: ["updatedAt", "createdAt"] },
    },
    timestamps: true,
    tableName: "product",
  }
);

Movie.hasOne(Product, { foreignKey: "movieId", targetKey: "id" });

module.exports = Product;
