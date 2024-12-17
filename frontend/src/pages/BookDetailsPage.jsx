import { useEffect, useState } from "react";
import { useBookStore } from "../store/book.store";
import { useParams } from "react-router-dom";
const BookDetailsPage = () => {
  const { getOneBook } = useBookStore();
  const params = useParams();
  const id = params.id;
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const theBook = await getOneBook(id);
      setBook(theBook);
    };
    fetchBook();
  }, [id, getOneBook]);

  if (!book) {
    return <div>Loading</div>;
  }
  return (
    <div className="container mx-auto p-2 grid grid-cols-1 sm:grid-cols-2 mt-10 gap-2">
      <div className="border-l-4 border-r-4 border-blue-200 p-3 rounded-2xl">
        <img src={book.cover_image} alt="" />
      </div>
      <div className="border-l-4 border-r-4 border-blue-200 p-3 rounded-2xl">
        <div>
          <h2 className="text-4xl text-blue-800 py-2 font-bold">
            Book Title: <span className="italic">{book.title}</span>
          </h2>
          <h2 className="text-4xl text-blue-800 py-2 font-bold">
            Price: <span className="italic">{book.price}</span>
          </h2>
          <hr className="h-[2px] bg-blue-200" />
        </div>
        <h2 className="text-2xl text-blue-800 py-2 font-bold">
          Author: <span className="italic">{book.author}</span>
        </h2>
        <h2 className="text-2xl text-blue-800 py-2 font-bold">
          Language: <span className="italic">{book.language}</span>
        </h2>
        <h2 className="text-2xl text-blue-800 py-2 font-bold">
          Published At: <span className="italic">{book.createdAt}</span>
        </h2>
        <h2 className="text-2xl text-blue-800 py-2 font-bold">
          Updated At: <span className="italic">{book.updatedAt}</span>
        </h2>
        <hr className="h-[2px] bg-blue-200" />
        <h2 className="text-2xl text-blue-800 py-2 font-bold">Description:</h2>
        <p className="text-2xl">{book.description}</p>
      </div>
    </div>
  );
};

export default BookDetailsPage;
