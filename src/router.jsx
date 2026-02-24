import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import NewsDetails from "./components/NewsDetails";
import Navbar from "./components/Navbar";


function Router({ articles,setCategory,loading ,category}) {
  return (
    <BrowserRouter>
      <Navbar setCategory={setCategory} category={category} />
      <Routes>
        <Route
          path="/"
          element={<Homepage articles={articles} loading={loading}/>}
        />
        <Route
          path="/news/:id"
          element={<NewsDetails articles={articles} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;


