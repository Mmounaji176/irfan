const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  const { category } = req.query;
  try {
    let rows;
    if (category && category !== "Tous") {
      [rows] = await db.execute(
        "SELECT * FROM events WHERE category = ? ORDER BY date ASC",
        [category]
      );
    } else {
      [rows] = await db.execute("SELECT * FROM events ORDER BY date ASC");
    }
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur." });
  }
});

router.post("/", async (req, res) => {
  const { title, date, time, location, category, description, image } = req.body;
  if (!title || !date || !category) {
    return res.status(400).json({ error: "Titre, date et catégorie sont requis." });
  }
  try {
    const [result] = await db.execute(
      "INSERT INTO events (title, date, time, location, category, description, image) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [title, date, time || "", location || "", category, description || "", image || ""]
    );
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur." });
  }
});

module.exports = router;
