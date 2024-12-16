import { Router } from "express";
import Book from "../models/book.model.js";
import {
  getAllBooks,
  getBookById,
  saveBook,
  updateBook,
  deleteBook,
} from "../controllers/book.controller.js";
const router = Router();

// Routes

// GET - All books
router.get("/", getAllBooks);

// GET - Fetch single book /api/books/id
router.get("/:id", getBookById);

// POST - Save a Book /api/books
router.post("/", saveBook);

// PUT - Update a book /api/books/:id

router.put("/:id", updateBook);

// DELETE Book - /api/books/:id
router.delete("/:id", deleteBook);

export default router;
