import React from "react";

const AddBookPage = () => {
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
            />
            <input
              type="text"
              name="author"
              placeholder="Author Name"
              className="p-2 rounded"
            />
            <input
              type="number"
              name="price"
              placeholder="Book Price"
              className="p-2 rounded"
            />
            <input
              type="text"
              name="language"
              placeholder="Language"
              className="p-2 rounded"
            />
            <input
              type="text"
              name="image"
              placeholder="Book Cover Image URL"
              className="p-2 rounded"
            />
            <textarea
              name="description"
              placeholder="Book Description"
              className="rounded p-2"
            ></textarea>
            <button className="p-2 bg-gradient-to-r from-cyan-400 to-blue-500 font-bold text-gray-700 rounded-lg">
              Save Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBookPage;
