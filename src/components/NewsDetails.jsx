import { useParams } from "react-router-dom";

function NewsDetails({ articles }) {
  const { id } = useParams();

  if (!articles || articles.length === 0) {
    return <h1 className="p-6">Loading...</h1>;
  }

  const article = articles[parseInt(id)];

  if (!article) {
    return <h1 className="p-6">Article not found</h1>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={article.image || "https://via.placeholder.com/800"}
        alt="news"
        className="w-full h-96 object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-6">
        {article.title}
      </h1>

      <p className="mt-4 text-gray-700">
        {article.content}
      </p>

      <a
        href={article.url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 mt-4 inline-block"
      >
        Read Full Article
      </a>
    </div>
  );
}

export default NewsDetails;
