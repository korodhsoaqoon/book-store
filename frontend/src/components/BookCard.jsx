import { FiTrash, FiEdit } from "react-icons/fi";
import { CgMoreO } from "react-icons/cg";
import { useBookStore } from "../store/book.store";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const BookCard = ({ book }) => {
  const { deleteBook } = useBookStore();

  const handleDelete = (bookId) => {
    confirmAlert({
      title: "Confirm Deletion",
      message: "Are you sure you want to delete this book?",
      buttons: [
        {
          label: "Yes I'm Sure",
          onClick: async () => {
            const { success, message } = await deleteBook(bookId);
            if (success) {
              console.log("Book Deleted Successfully");
            } else {
              console.log("Failed to delete the book");
            }
          },
        },
        {
          label: "No, Cancel Deletion",
          onClick: () => {
            console.log("Deletion cancelled");
            return;
          },
        },
      ],
    });
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
