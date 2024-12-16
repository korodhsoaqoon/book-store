import { useEffect, useState } from "react";
const HomePage = () => {
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/books");
      if (!res.ok) {
        throw new Error(`HTTP Error! status:${res.status}`);
      }
      const data = await res.json();
      setBooks(data);
      console.log(data); // update state with fetched data
    } catch (error) {
      console.log("error fetching data ", error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  console.log(books);
  return <div>HomePage</div>;
};

export default HomePage;
