const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "projet_classe"
});
db.connect((erreur) => {
  if (erreur) {
    console.log("Erreur MySQL :", erreur);
  } else {
    console.log("Connexion MySQL réussie !");
  }
});
app.get("/", (req, res) => {
  res.send("Le serveur fonctionne !");
});
app.get("/eleves", (req, res) => {
  db.query("SELECT * FROM eleves", (erreur, resultat) => {
    if (erreur) {
      res.status(500).json({ erreur: "Erreur de base de données" });
    } else {
      res.json(resultat);
    }
  });
});
app.listen(3000, () => {
  console.log("Serveur démarré sur http://localhost:3000");
});