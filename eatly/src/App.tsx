import HomePage from "./components/templates/HomePage/HomePage";
import BlogPage from "./components/templates/BlogPage/BlogPage";
import BlogArticle from "./components/templates/BlogArticle/BlogArticle";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/templates/NotFound/NotFound";
import st from "./app.module.css";
import React from "react";

function App() {
  return (
    <div className={st.container}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/article/:id" element={<BlogArticle />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
