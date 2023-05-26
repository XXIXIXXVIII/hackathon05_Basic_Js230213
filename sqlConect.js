const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "test",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.error("lỗi kết nối đến db r:", err);
  } else {
    console.log("connect done");
  }
});

module.exports = connection
