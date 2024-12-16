import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${PORT}`);
});

// Routes

app.get("/", (request, response) =>
  response.send({ message: "API is working" })
);

// GET - All books
app.get("/api/books", (req, res) => res.send({ message: "All Books" }));

// GET - Fetch single book /api/books/id
app.get("/api/books/:id", (req, res) => res.send({ message: "Single Book" }));

// POST - Save a Book /api/books
app.post("/api/books", (req, res) => res.send({ message: "Save a book" }));

// PUT - Update a book /api/books/:id

app.put("/api/books/:id", (req, res) => res.send({ message: "Update a book" }));

// DELETE Book - /api/books/:id
app.delete("/api/books/:id", (req, res) =>
  res.send({ message: "Delete a Book" })
);
