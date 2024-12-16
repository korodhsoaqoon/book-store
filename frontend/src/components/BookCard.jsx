import { FiTrash, FiEdit } from "react-icons/fi";
import { CgMoreO } from "react-icons/cg";
import { useBookStore } from "../store/book.store";
const BookCard = ({ book }) => {
  const { deleteBook } = useBookStore();

  const handleDelete = async (bookId) => {
    const { success, message } = await deleteBook(bookId);
  };
  return (
    <div className="bg-blue-50 flex-1 p-4 rounded-xl shadow-md">
      <img
        className="w-full rounded-lg h-[400px]"
        src={book.cover_image}
        alt={book.title}
      />
      <h2 className="text-2xl font-bold text-blue-800 flex justify-between py-2 ">
        <span>Title: {book.title}</span>
        <span>Price: {book.price}</span>
      </h2>
      <hr className="bg-blue-100 h-[2px]" />
      <div>
        <h2 className="text-lg text-blue-900 ">Author:{book.author}</h2>
        <h2 className="text-lg text-blue-900 ">Language:{book.language}</h2>
        <h2 className="text-lg text-blue-900 ">Uploaded:{book.createdAt}</h2>
        <h2 className="text-lg text-blue-900 ">Updated:{book.updatedAt}</h2>
        <hr />
        <div className="flex items-center gap-2">
          <button className="text-xl mr-2 text-red-700 hover:text-red-800 transition-all duration-200 hover:-translate-y-1">
            <span className="flex items-center gap-2">
              <CgMoreO className="inline-block" /> More
            </span>
          </button>
          <button className="text-xl mr-2 text-red-700 hover:text-red-800 transition-all duration-200 hover:-translate-y-1">
            <span className="flex items-center gap-2">
              <FiEdit className="inline-block" /> Edit
            </span>
          </button>
          <button
            onClick={() => handleDelete(book._id)}
            className="text-xl mr-2 text-red-700 hover:text-red-800 transition-all duration-200 hover:-translate-y-1"
          >
            <span className="flex items-center gap-2">
              <FiTrash className="inline-block" /> Delete
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
