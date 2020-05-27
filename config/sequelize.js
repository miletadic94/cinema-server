const { Sequelize } = require("sequelize");

module.exports.db = new Sequelize(
  process.env.MYSQL_SCHEMA,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    dialect: "mysql",
    sync: true,
  }
);
