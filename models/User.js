const { db } = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const Role = require("./Role");

const User = db.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isConfirmed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: true,
    tableName: "user",
  }
);

Role.hasMany(User, { foreignKey: "roleId", targetKey: "id" });
User.belongsTo(Role, {
  foreignKey: { name: "roleId", allowNull: true },
  sourceKey: "id",
  as: "role",
});

module.exports = User;
