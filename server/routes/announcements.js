const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  try {
    const [rows] = await db.execute(
      "SELECT * FROM announcements ORDER BY date DESC"
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur." });
  }
});

router.post("/", async (req, res) => {
  const { title, text, date } = req.body;
  if (!title || !text) {
    return res.status(400).json({ error: "Titre et texte sont requis." });
  }
  try {
    const [result] = await db.execute(
      "INSERT INTO announcements (title, text, date) VALUES (?, ?, ?)",
      [title, text, date || new Date().toISOString().slice(0, 10)]
    );
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur." });
  }
});

module.exports = router;
