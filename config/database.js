const mysql = require("mysql2/promise");

//create pool -> reuse the connection here
const pool = mysql.createPool({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "1234",
  database: "data_intimate_interview",
  connectionLimit: 10,
});

pool
  .query("SELECT 1")
  .then((data) => console.log(data))
  .catch((err) => console.log("DB Connection Failed " + err));

module.exports = pool;
