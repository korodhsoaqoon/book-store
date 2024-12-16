import mongoose from "mongoose";
import Book from "../models/book.model.js";
// Get All Books
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      success: true,
      data: books,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: `Error - ${error.message}` });
  }
};

// Get single Book

export const getBookById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      message: "Invalid BookId",
    });
  }

  try {
    const book = await Book.findById(id);
    res.status(200).json({ success: true, data: book });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: `Error - ${error.message}`,
    });
  }
};

// Save Book
export const saveBook = async (req, res) => {
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
};

// Updating book
export const updateBook = (req, res) => res.send({ message: "Update a book" });

// Delete Book
export const deleteBook = (req, res) => res.send({ message: "Delete a Book" });
