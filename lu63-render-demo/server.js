import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const PORT = process.env.PORT || 5000;

// PrismaClient is created lazily so the app starts and /health responds
// even when DATABASE_URL is not configured in the environment.
let prisma;
function getDb() {
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return prisma;
}

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/api/notes", async (req, res) => {
  try {
    const notes = await getDb().note.findMany();
    res.json(notes);
  } catch (err) {
    console.error("Database error:", err.message);
    res.status(502).json({ error: "Could not reach the database" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
