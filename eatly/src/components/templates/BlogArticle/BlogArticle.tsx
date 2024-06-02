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
import { AppDispatch, RootState } from "../../../store/store";
import { useParams } from "react-router-dom";
import User from "../../molecules/User/User";
import { v4 as uuidv4 } from "uuid";
import CommentInput from "../../molecules/CommentInput/CommentInput";
import { postComment } from "../../../store/commentSlice";

interface User {
  id: number;
  username: string;
  fullName: string;
}
interface Reactions {
  likes: number;
}

interface Comment {
  id: string;
  body: string;
  postId: number;
  reactions: Reactions;
  user: User;
}

const BlogArticle = () => {
  const [newComment, setNewComment] = useState("");
  const [userComments, setUserComments] = useState<Comment[]>([]);

  const dispatch = useDispatch<AppDispatch>();
  const { articleDetails, status, error } = useSelector(
    (state: RootState) => state.singleArticle
  );

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const articleId = parseInt(id as string, 10);
    dispatch(fetchSingleArticle(articleId));
  }, [dispatch, id]);

  const handleCommentChange = (commentText: string) => {
    setNewComment(commentText);
  };

  const handleCommentSubmit = async (
    body: string,
    postId: number,
    userId: number
  ) => {
    if (!body.trim()) {
      console.error("Comment body cannot be empty.");
      return;
    }

    try {
      const response = await dispatch(
        postComment({ body, postId, userId })
      ).unwrap();

      const newCommentWithUniqueId: Comment = {
        ...response,
        id: uuidv4(),
      };

      setUserComments((prevComments) => [
        ...prevComments,
        newCommentWithUniqueId,
      ]);
      setNewComment("");
    } catch (error) {
      console.error("Failed to post comment:", error);
    }
  };

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
              <span className={st.rating}>{reactions.likes}</span>
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

        {[...comments, ...userComments].map((comment) => (
          <div key={comment.id}>
            <ReviewCard
              reviewerName={`@${comment.user.username} (${comment.user.fullName})`}
              commentary={comment.body}
            />
          </div>
        ))}
      </div>
      <CommentInput
        postId={articleDetails.id}
        userId={user.id}
        onCommentChange={handleCommentChange}
        onCommentSubmit={handleCommentSubmit}
        newComment={newComment}
      />
      <Footer />
    </main>
  );
};

export default BlogArticle;
