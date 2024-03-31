import HomePage from "./components/templates/HomePage/HomePage";
import BlogPage from "./components/templates/BlogPage/BlogPage";
import BlogArticle from "./components/templates/BlogArticle/BlogArticle";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/templates/NotFound/NotFound";
import st from "./app.module.css";

function App() {
  return (
    <div className={st.container}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<BlogPage />} />
        <Route path="/article/:id" element={<BlogArticle />} />
      </Routes>
    </div>
  );
}

export default App;
