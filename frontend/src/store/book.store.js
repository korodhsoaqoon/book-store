import { create } from "zustand";

export const useBookStore = create((set) => ({
  books: [], // initial state
  setBooks: (books) => ({ books }),
  getBooks: async () => {
    const res = await fetch("http://localhost:3000/api/books");
    const data = await res.json();
    set({ books: data.data });
  },

  saveBook: async (newBook) => {
    if (
      !newBook.title ||
      !newBook.author ||
      !newBook.language ||
      !newBook.price ||
      !newBook.description
    ) {
      return { success: false, message: "Please fill all the fields" };
    }

    // let's save book
    const res = await fetch("http://localhost:3000/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook),
    });
    const data = await res.json();
    set((state) => ({ books: [...state, data.data] }));
    return { success: true, message: "Book Saved Successfully" };
  },
}));
