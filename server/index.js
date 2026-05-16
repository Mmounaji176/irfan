const express = require("express");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contact");
const eventsRoutes = require("./routes/events");
const announcementsRoutes = require("./routes/announcements");

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173" }));
app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/announcements", announcementsRoutes);

app.get("/api/health", (_, res) => res.json({ status: "ok" }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
