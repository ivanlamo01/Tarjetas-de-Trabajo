import express from "express";
import cors from "cors";
import mysql from "mysql2";
import {PORT, DB_NAME, DB_PORT, PASSWORD, USER, HOST} from "./config.js"

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DB_NAME,
  port: DB_PORT
});

// Rutas básicas de ejemplo
app.get("/tarjetas", (req, res) => {
  db.query("SELECT * FROM TarjetasTrabajo", (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(PORT, () => {
  console.log("Servidor backend corriendo en puerto ",PORT);
});