import React from "react";
import NavBar from "./components/NavBar.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AddBookPage from "./pages/AddBookPage.jsx";
import BookDetailsPage from "./pages/BookDetailsPage.jsx";

const App = () => {
  return (
    <div className="font-mono bg-blue-100 min-h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-book" element={<AddBookPage />} />
        <Route path="/:id" element={<BookDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
