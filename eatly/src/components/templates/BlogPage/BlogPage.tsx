import st from "./blogpage.module.css";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import Line from "../../atoms/Line/Line";
import Text from "../../atoms/Text/Text";
import BlogCard from "../../molecules/BlogCard/BlogCard";

const BlogPage = () => {
  return (
    <div className="container">
      <div className={st.blogpage}>
        <Header />
        <Line />
        <Text className={`${st.spacer} ${st.title}`} type={"h2"}>
          Latest <span className={st.highlight}> Articles</span>
        </Text>
        <div className={st.articles_block}>
          <BlogCard />
        </div>
        <div className={st.btn_block}>
          <button className={st.arrow_btn}>&#8592;</button>
          <button className={st.arrow_btn}>&#8594;</button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;
