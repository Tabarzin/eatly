import st from "./blogpage.module.css";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import Line from "../../atoms/Line/Line";
import Text from "../../atoms/Text/Text";
import BlogCard from "../../molecules/BlogCard/BlogCard";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchArticles,
  Article,
  ArticlesState,
  setCurrentPage,
} from "../../../store/articlesSlice";
import { RootState } from "../../../store/store";

const BlogPage: React.FC = () => {
  const dispatch = useDispatch();
  const { articles, status, error, currentPage } = useSelector<
    RootState,
    ArticlesState
  >((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles({ page: currentPage }));
  }, [dispatch, currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleNextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className={st.blogpage}>
        <Header />
        <Line />
        <Text className={`${st.spacer} ${st.title}`} type={"h2"}>
          Latest <span className={st.highlight}>Articles</span>
        </Text>
        <div className={st.articles_block}>
          {articles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
        <div className={st.btn_block}>
          <button
            className={st.arrow_btn}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            &#8592;
          </button>
          <button
            className={st.arrow_btn}
            onClick={handleNextPage}
            disabled={articles.length < 12}
          >
            &#8594;
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;
