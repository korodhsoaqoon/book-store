import { useEffect } from "react";
import { useBookStore } from "../store/book.store";
const HomePage = () => {
  const { getBooks, books } = useBookStore();

  useEffect(() => {
    getBooks();
  }, []);

  console.log(books);
  return <div>HomePage</div>;
};

export default HomePage;
