const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Nom, email et message sont requis." });
  }
  try {
    await db.execute(
      "INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)",
      [name, email, subject || "", message]
    );
    res.status(201).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur." });
  }
});

module.exports = router;
