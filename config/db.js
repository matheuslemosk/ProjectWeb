const mysql = require('mysql2/promise');

// Conexão com o MySQL hospedado no Aiven
const conexao = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: { rejectUnauthorized: false } // o Aiven exige SSL
});

module.exports = conexao;
