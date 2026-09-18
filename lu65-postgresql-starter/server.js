import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const PORT = process.env.PORT || 5000;

// PrismaClient is created lazily so the app starts and /health responds
// even before DATABASE_URL is wired up in the Render dashboard.
// The student's task is to provision Render PostgreSQL and configure
// DATABASE_URL and DIRECT_URL — until then, /health still works.
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
