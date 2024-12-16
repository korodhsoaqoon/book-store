import React from "react";
import NavBar from "./components/NavBar.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AddBookPage from "./pages/AddBookPage.jsx";

const App = () => {
  return (
    <div className="font-mono">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-book" element={<AddBookPage />} />
      </Routes>
    </div>
  );
};

export default App;
