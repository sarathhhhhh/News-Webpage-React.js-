import { useEffect, useState } from "react";
import { fetchNews } from "./components/services/api";
import Router from "./router";

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [loading,setLoading]=useState(false);

  useEffect(() => {
    const getNews = async () => {
       setLoading(true);

      const data = await fetchNews(category);
      setArticles(data);
      setLoading(false);
    };

    getNews();
  }, [category]); // 🔥 important

  return (
    <Router
      articles={articles}
      setCategory={setCategory}
      category={category}
      loading={loading}
    />
  );
}

export default App;
