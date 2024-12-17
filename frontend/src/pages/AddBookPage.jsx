import { useState } from "react";
import { useBookStore } from "../store/book.store";
import { useNavigate } from "react-router-dom";

const AddBookPage = () => {
  const navigate = useNavigate();
  const { saveBook } = useBookStore();
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    description: "",
    language: "",
    cover_image: "",
    price: "",
  });

  const handleSave = () => {
    const { success, message } = saveBook(newBook);
    navigate("/");
    console.log(success);
    console.log(message);
  };
  return (
    <div>
      <div className="container p-4 mx-auto">
        <h1 className="text-3xl text-center font-extrabold text-blue-900 mb-4">
          Add New Book
        </h1>
        <div>
          <div className="flex flex-col gap-4 max-w-[800px] mx-auto bg-blue-50 p-6 rounded-lg shadow-md">
            {" "}
            <input
              type="text"
              name="title"
              placeholder="Book Title"
              className="p-2 rounded"
              value={newBook.title}
              onChange={(e) =>
                setNewBook({ ...newBook, title: e.target.value })
              }
            />
            <input
              type="text"
              name="author"
              placeholder="Author Name"
              className="p-2 rounded"
              value={newBook.author}
              onChange={(e) =>
                setNewBook({ ...newBook, author: e.target.value })
              }
            />
            <input
              type="number"
              name="price"
              placeholder="Book Price"
              className="p-2 rounded"
              value={newBook.price}
              onChange={(e) =>
                setNewBook({ ...newBook, price: e.target.value })
              }
            />
            <input
              type="text"
              name="language"
              placeholder="Language"
              className="p-2 rounded"
              value={newBook.language}
              onChange={(e) =>
                setNewBook({ ...newBook, language: e.target.value })
              }
            />
            <input
              type="text"
              name="image"
              placeholder="Book Cover Image URL"
              className="p-2 rounded"
              value={newBook.cover_image}
              onChange={(e) =>
                setNewBook({ ...newBook, cover_image: e.target.value })
              }
            />
            <textarea
              name="description"
              placeholder="Book Description"
              className="rounded p-2"
              value={newBook.description}
              onChange={(e) =>
                setNewBook({ ...newBook, description: e.target.value })
              }
            ></textarea>
            <button
              onClick={handleSave}
              className="p-2 bg-gradient-to-r from-cyan-400 to-blue-500 font-bold text-gray-700 rounded-lg"
            >
              Save Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBookPage;
