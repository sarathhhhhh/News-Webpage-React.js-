import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ article, index }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/news/${index}`);
  };

  return (
    <div
      className="w-full rounded-xl overflow-hidden shadow-md bg-white cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={article.image || "https://via.placeholder.com/400"}
        alt={article.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {article.title}
        </h3>

        <p className="text-sm text-gray-600">
          {article.description}
        </p>

        <div className="flex justify-end mt-3">
          <a
  href={article.url}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
>
  Read More
</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
