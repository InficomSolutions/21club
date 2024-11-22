import mysql from "mysql2/promise";

const connection = mysql.createPool({
  host: '103.160.145.229',
  port:'2307',
  user: '91Clubtest',
  password: 'n5YPP7XfdRmhkF6W',
  database: '91clubtest',
});

export default connection;
