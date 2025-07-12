const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

  
const ConnectDB = async () => {
  try {
    const connection = await mysql.createConnection({
       host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    });

    console.log("MySQL Database Connected Successfully.");
    return connection;

  } catch (err) {
    console.error("MySQL Connection Error:", err);
    throw err;  
  }
};

ConnectDB();

module.exports = ConnectDB;
