import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Book from "./models/book.model.js";
import booksRouter from "./routes/book.route.js";
dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/books", booksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${PORT}`);
});
