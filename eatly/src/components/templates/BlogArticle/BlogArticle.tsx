import Button from "../../atoms/Button/Button";
import Footer from "../../organisms/Footer/Footer";
import Header from "../../organisms/Header/Header";
import Text from "../../atoms/Text/Text";
import st from "./blogarticle.module.css";
import arrow_left from "../../../assets/arrow_left.svg";
import ReviewCard from "../../molecules/ReviewCard/ReviewCard";
import userImage from "../../../assets/user.png";
import star from "../../../assets/star.svg";
import Line from "../../atoms/Line/Line";

const BlogArticle = () => {
  return (
    <div className="container">
      <Header />
      <Line />
      <div className={st.spacer}></div>

      <div className={st.article_block}>
        <Text type={"h4"}>How To Order Food On eatly?</Text>

        <div className={st.user_rating_tags}>
          <div className={st.user}>
            <img src={userImage} alt="User Image" />
            <div className={st.username_block}>
              <span className={st.written}>Written By</span>{" "}
              <span className={st.username}> username</span>
            </div>
          </div>
          <div className={st.rating_tags}>
            <div className={st.rating_star}>
              <span className={st.rating}>7</span>
              <img src={star} alt="Star icon" />
            </div>
            <span className={st.tags}>#history, #food</span>
          </div>
        </div>
        <div className={st.article_text}>
          It wasn't quite yet time to panic. There was still time to salvage the
          situation. At least that is what she was telling himself. The reality
          was that it was time to panic and there wasn't time to salvage the
          situation, but he continued to delude himself into believing there was
        </div>
        <Button type={"secondary"} className={st.article_btn}>
          <img src={arrow_left} alt="Left Arrow" />
          All Articles
        </Button>
      </div>
      <div className={st.comments}>
        <span className={st.comments_title}>Comments</span>
        <ReviewCard commentary={"text"} />
      </div>
      <Footer />
    </div>
  );
};

export default BlogArticle;
