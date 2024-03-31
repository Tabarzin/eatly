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
import { SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleArticle } from "../../../store/singleArticleSlice";
import { RootState } from "../../../store/store";
import { useParams } from "react-router-dom";
import User from "../../molecules/User/User";

import CommentInput from "../../molecules/CommentInput/CommentInput";

const BlogArticle = () => {
  const [newComment, setNewComment] = useState("");
  const [userComments, setUserComments] = useState([]);

  const handleCommentChange = (commentText: SetStateAction<string>) => {
    setNewComment(commentText);
  };

  const handleCommentSubmit = (newCommentData) => {
    setUserComments([...comments, newCommentData]);
    setNewComment("");
  };

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
    <main className={st.container}>
      <Header />
      <Line />
      <div className={st.spacer}></div>
      <div className={st.article_block}>
        <Text type={"h4"}>{title}</Text>
        <div className={st.user_rating_tags}>
          <User
            user={{
              image: user.image,
              firstName: user.firstName,
              lastName: user.lastName,
            }}
          />
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
            <img src={arrow_left} className={st.arrow_left} alt="Left Arrow" />
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
        {newComment && (
          <div>
            <ReviewCard reviewerName="Guest" commentary={newComment} />
          </div>
        )}
      </div>
      <CommentInput
        postId={3}
        userId={5}
        onCommentChange={handleCommentChange}
        onCommentSubmit={handleCommentSubmit}
      />
      <Footer />
    </main>
  );
};

export default BlogArticle;
