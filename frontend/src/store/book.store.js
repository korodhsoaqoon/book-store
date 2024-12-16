import { create } from "zustand";

export const useBookStore = create((set) => ({
  books: [], // initial state
  setBooks: (books) => ({ books }),
  getBooks: async () => {
    const res = await fetch("http://localhost:3000/api/books");
    const data = await res.json();
    set({ books: data.data });
  },
}));
