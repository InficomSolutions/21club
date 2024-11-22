import mysql from "mysql2/promise";

const connection = mysql.createPool({
  host: "database-1.cdqemqu0murh.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "8600988002",
  database: "real91",
});

export default connection;
