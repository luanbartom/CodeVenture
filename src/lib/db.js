import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",   // ⚠️ não coloca ":3307" aqui
  port: 3307,          // porta vem separada
  user: "root",
  password: "senacrs",
  database: "cv_database",
});