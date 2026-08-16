import { Router } from "express";
import Project from "../models/Project.js";

const router = Router();

// Public, read-only. Falls back to an empty array if the DB hasn't been
// seeded yet — the client also ships static fallback data so the site never
// breaks if the API or database is unreachable.
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1 });
    res.json(projects);
  } catch (err) {
    console.error("GET /api/projects failed:", err.message);
    res.status(500).json({ error: "Could not load projects." });
  }
});

export default router;
