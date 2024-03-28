import st from "./commentinput.module.css";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import { useDispatch } from "react-redux";
import { postComment } from "../../../store/commentSlice";
import { useState } from "react";

import { useDebouncedState } from "@mantine/hooks";
import ReviewCard from "../ReviewCard/ReviewCard";

const CommentInput = ({ postId, userId, onCommentChange, onCommentSubmit }) => {
  const dispatch = useDispatch();
  const [commentBody, setCommentBody] = useDebouncedState("", 300);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedText, setSubmittedText] = useState("");
  const [submittedComments, setSubmittedComments] = useState([]);

  const handleInputChange = (e) => {
    setCommentBody(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const newComment = await dispatch(
      postComment({ body: commentBody, postId, userId })
    );

    setSubmittedText(commentBody);
    setIsSubmitting(false);
    onCommentChange("");

    onCommentSubmit(newComment.payload);
    setSubmittedComments([...submittedComments, newComment]);
    setCommentBody("");
  };

  return (
    <div className={st.add_comment}>
      {submittedComments.map((comment, index) => (
        <ReviewCard
          key={index}
          reviewerName={`@${comment.payload.user.username}`}
          commentary={submittedText}
        />
      ))}

      <Text type={"h3"}>
        Add <span className={st.highlight}> comment </span>
      </Text>
      <form className={st.add_comment_form} onSubmit={handleSubmit}>
        <textarea
          className={st.add_comment_input}
          onChange={handleInputChange}
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
