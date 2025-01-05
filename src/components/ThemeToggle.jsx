import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className={`p-2 rounded-full focus:outline-none transition duration-300 ${
        darkMode ? "bg-gray-800 text-yellow-400" : "bg-gray-200 text-gray-800"
      }`}
    >
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
