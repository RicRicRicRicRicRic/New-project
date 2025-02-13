// database.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'estr301502aug!2121',
  database: 'enroll',
  port: '3307'
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
    process.exit(1); 
  }
  console.log('Connected to the database.');
});

module.exports = connection;
