import { useEffect } from "react";
import { useBookStore } from "../store/book.store";
import BookCard from "../components/BookCard";
import { Link } from "react-router-dom";
const HomePage = () => {
  const { getBooks, books } = useBookStore();

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="container mx-auto p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <h1 className="text-4xl text-center my-5 font-bold text-blue-900 italic">
        All Books 📚
      </h1>
      {!books.length > 0 ? (
        <h1 className="text-center text-2xl  font-semibold italic">
          There is no book currently Available
          <Link className="ml-2 text-blue-900  underline" to="/add-book">
            Add New Book
          </Link>
        </h1>
      ) : (
        books.map((book) => <BookCard book={book} />)
      )}
    </div>
  );
};

export default HomePage;
