import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar({ setCategory,category }) {
  const categories = [
    "general",
    "business",
    "technology",
    "sports",
    "health",
    "science",
    "entertainment",
  ];

  return (
    <nav className="bg-gray-900 text-white p-4 flex gap-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`capitalize ${
    category === cat
      ? "text-blue-500"
      : "hover:text-blue-400"
  }`}
        >
          {cat}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
