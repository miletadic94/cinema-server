const { db } = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const Product = require("./Product");
const Receipt = require("./Receipt");

const ProductReceipt = db.define(
  "ProductReceipt",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "product_receipt",
  }
);

Product.belongsToMany(Receipt, {
  through: "ProductReceipt",
  as: "receipts",
  foreignKey: "productId",
});

Receipt.belongsToMany(Product, {
  through: "ProductReceipt",
  as: "products",
  foreignKey: "receiptId",
});

module.exports = ProductReceipt;
