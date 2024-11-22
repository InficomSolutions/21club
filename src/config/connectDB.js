import mysql from "mysql2/promise";

const connection = mysql.createPool({
  host: 'localhost',
  user: 'admin',
  password: '8600988002',
  database: 'real91',
});

export default connection;
