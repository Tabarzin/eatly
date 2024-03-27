import st from "./commentinput.module.css";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleArticle } from "../../../store/singleArticleSlice";
import { RootState } from "../../../store/store";
import { useParams } from "react-router-dom";
import User from "../../molecules/User/User";
import { postComment } from "../../../store/commentSlice";
import { useState } from "react";

const CommentInput = ({ postId, userId }) => {
  //   const dispatch = useDispatch();
  //   const [commentBody, setCommentBody] = useState("");

  //   console.log(commentBody, "BODY");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     dispatch(postComment({ body: commentBody, postId, userId }));
  //     setCommentBody("");
  //   };

  const dispatch = useDispatch();
  const [commentBody, setCommentBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await dispatch(postComment({ body: commentBody, postId, userId }));
    setCommentBody("");
    setIsSubmitting(false);
  };
  return (
    <div className={st.add_comment}>
      <Text type={"h3"}>
        Add <span className={st.highlight}> comment </span>
      </Text>
      <form className={st.add_comment_form} onSubmit={handleSubmit}>
        <textarea
          className={st.add_comment_input}
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
          placeholder="ENTER YOUR COMMENT"
          disabled={isSubmitting}
        />
        <Button type={"primary"} disabled={isSubmitting || !commentBody.trim()}>
          {isSubmitting ? "Posting..." : "Send"}
        </Button>
      </form>
    </div>
  );
};

export default CommentInput;
