import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Book from "./models/book.model.js";
dotenv.config();
const app = express();
app.use(express.json());
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
app.post("/api/books", async (req, res) => {
  // let's get the data from the red.body - data we want to save
  const book = req.body;

  // let's check if all fields are filled
  if (!book.title || !book.price || !book.author || !book.language) {
    return res
      .status(400)
      .json({ sucess: false, message: "Please fill all the fields" });
  }

  // let's save the book
  const newBook = new Book(book);
  try {
    await newBook.save();
    res.status(201).send({
      success: true,
      data: newBook,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: `Error - ${error.message}` });
  }
});

// PUT - Update a book /api/books/:id

app.put("/api/books/:id", (req, res) => res.send({ message: "Update a book" }));

// DELETE Book - /api/books/:id
app.delete("/api/books/:id", (req, res) =>
  res.send({ message: "Delete a Book" })
);
