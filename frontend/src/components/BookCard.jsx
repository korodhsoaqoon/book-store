import { FiTrash, FiEdit } from "react-icons/fi";
import { CgMoreO } from "react-icons/cg";
import { useBookStore } from "../store/book.store";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { FaRegWindowClose } from "react-icons/fa";
import Modal from "react-modal";
import { useState } from "react";
Modal.setAppElement("#root");
const BookCard = ({ book }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookToUpdate, setBookToUpdate] = useState(book);

  const { deleteBook, updateBook } = useBookStore();

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

  const handleUpdateBook = async (bookId, updatedBook) => {
    await updateBook(bookId, updatedBook);
    setIsModalOpen(false);
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
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-xl mr-2 text-red-700 hover:text-red-800 transition-all duration-200 hover:-translate-y-1"
          >
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

      <Modal
        isOpen={isModalOpen}
        className="bg-blue-50 max-w-[800px] mx-auto my-auto mt-20 p-10 rounded-lg"
      >
        {/* Header */}
        <div className="flex justify-between">
          <h2 className=" text-2xl text-blue-900 font-semibold py-2">
            Update Course
          </h2>
          <button onClick={() => setIsModalOpen(false)}>
            <FaRegWindowClose className="text-2xl font-bold text-red-800" />
          </button>
        </div>
        <hr className="my-4" />
        {/* Content */}
        <div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="title"
              className="p-2 rounded"
              placeholder="Book Title"
              value={bookToUpdate.title}
              onChange={(e) =>
                setBookToUpdate({ ...bookToUpdate, title: e.target.value })
              }
            />
            <input
              type="text"
              name="author"
              className="p-2 rounded"
              placeholder="Author Name"
              value={bookToUpdate.author}
              onChange={(e) => {
                setBookToUpdate({ ...bookToUpdate, author: e.target.value });
              }}
            />
            <input
              type="text"
              name="price"
              className="p-2 rounded"
              placeholder="Book Price"
              value={bookToUpdate.price}
              onChange={(e) => {
                setBookToUpdate({ ...bookToUpdate, price: e.target.value });
              }}
            />
            <input
              type="text"
              name="cover_image"
              className="p-2 rounded"
              placeholder="Cover Image URL"
              value={bookToUpdate.cover_image}
              onChange={(e) => {
                setBookToUpdate({
                  ...bookToUpdate,
                  cover_image: e.target.value,
                });
              }}
            />
            <input
              name="language"
              type="text"
              className="p-2 rounded"
              placeholder="Language"
              value={bookToUpdate.language}
              onChange={(e) => {
                setBookToUpdate({
                  ...bookToUpdate,
                  language: e.target.value,
                });
              }}
            />
            <textarea
              name="description"
              id="description"
              placeholder="Book Description"
              className="p-2 rounded"
              value={bookToUpdate.description}
              onChange={(e) => {
                setBookToUpdate({
                  ...bookToUpdate,
                  description: e.target.value,
                });
              }}
            ></textarea>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mt-4">
          <button
            onClick={() => handleUpdateBook(book._id, bookToUpdate)}
            className="p-2 sm:w-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 font-bold text-gray-700 rounded"
          >
            Update
          </button>
          <button
            onClick={() => setIsModalOpen(false)}
            className="p-2 sm:w-1/2 bg-gradient-to-r from-red-200 to-red-500 font-bold text-gray-700 rounded"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default BookCard;
