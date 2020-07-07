const mysql = require("mysql2");

// TODO: LOAD FROM .env file
const pool = mysql.createPool({
  host: "localhost",
  user: "mile",
  database: "cinema",
  password: "mile",
});

module.exports = pool.promise();
