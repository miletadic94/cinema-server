const { db } = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const Role = db.define(
  "Role",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true,
    tableName: "role",
  }
);

module.exports = Role;
