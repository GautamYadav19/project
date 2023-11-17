const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mysql@123",
  database: "mydatabase",
  connectionLimit: 10,
  port: 3306,
});
let rootdb = {};

module.exports = rootdb;
