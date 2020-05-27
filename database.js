const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "mile",
  database: "cinema",
  password: "mile",
});

module.exports = pool.promise();
