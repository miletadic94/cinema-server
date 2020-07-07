const { db } = require("../config/sequelize");
const { DataTypes } = require("sequelize");
const User = require("./User");

const Receipt = db.define(
  "Receipt",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    defaultScope: {
      attributes: { exclude: ["updatedAt", "createdAt"] },
    },
    timestamps: true,
    tableName: "receipt",
  }
);

User.hasMany(Receipt, { foreignKey: "userId", targetKey: "id" });
Receipt.belongsTo(User, {
  foreignKey: { name: "userId", allowNull: false },
  sourceKey: "id",
  as: "user",
});

module.exports = Receipt;
