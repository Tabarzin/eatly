import Button from "../../atoms/Button/Button";
import Footer from "../../organisms/Footer/Footer";
import Header from "../../organisms/Header/Header";
import Text from "../../atoms/Text/Text";
import st from "./blogarticle.module.css";
import arrow_left from "../../../assets/arrow_left.svg";
import ReviewCard from "../../molecules/ReviewCard/ReviewCard";
import star from "../../../assets/star.svg";
import Line from "../../atoms/Line/Line";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleArticle } from "../../../store/singleArticleSlice";
import { RootState } from "../../../store/store";
import { useParams } from "react-router-dom";

const BlogArticle = () => {
  const dispatch = useDispatch();
  const { articleDetails, status, error } = useSelector(
    (state: RootState) => state.singleArticle
  );
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchSingleArticle(id));
  }, [dispatch, id]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  if (!articleDetails) {
    return null;
  }

  const { title, body, user, tags, reactions, comments } = articleDetails;

  return (
    <div className="container">
      <Header />
      <Line />
      <div className={st.spacer}></div>
      <div className={st.article_block}>
        <Text type={"h4"}>{title}</Text>
        <div className={st.user_rating_tags}>
          <div className={st.user}>
            <img
              className={st.user_image}
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
            />
            <div className={st.username_block}>
              <span className={st.written}>Written By</span>
              <span className={st.username}>
                {user.firstName} {user.lastName}
              </span>
            </div>
          </div>
          <div className={st.rating_tags}>
            <div className={st.rating_star}>
              <span className={st.rating}>{reactions}</span>
              <img src={star} alt="Star icon" />
            </div>

            <span className={st.tags}>
              {tags.map((tag) => `#${tag}`).join(", ")}
            </span>
          </div>
        </div>
        <div className={st.article_text}>{body}</div>
        <Link to="/blog">
          <Button type={"secondary"} className={st.article_btn}>
            <img src={arrow_left} alt="Left Arrow" />
            All Articles
          </Button>
        </Link>
      </div>

      <div className={st.comments}>
        <span className={st.comments_title}>Comments</span>

        {comments.map((comment) => (
          <div key={comment.id}>
            <ReviewCard
              reviewerName={`@${comment.user.username}`}
              commentary={comment.body}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BlogArticle;
