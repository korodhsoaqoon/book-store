import mongoose from "mongoose";

// Schema
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    cover_image: { type: String },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true } // CreateAt, UpdateAt
);

// Model
const Book = mongoose.model("Book", bookSchema);
export default Book;
