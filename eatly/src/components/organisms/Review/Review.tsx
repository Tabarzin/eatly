import st from "./review.module.css";
import React, { useEffect } from "react";
import Text from "../../atoms/Text/Text";
import ReviewCard from "../../molecules/ReviewCard/ReviewCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchComments,
  Comment,
  CommentsState,
} from "../../../store/commentsSlice";
import { RootState } from "../../../store/store";

const Review: React.FC = () => {
  const dispatch = useDispatch();

  const { comments, status, error } = useSelector<RootState, CommentsState>(
    (state) => state.comments
  );

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  const first3Comments = comments.slice(0, 3);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className={st.review}>
        <Text className={st.h3} type={"h3"}>
          <span className={st.highlight}>Customer</span> Say
        </Text>
        <div className={st.comments_block}>
          {first3Comments.map((comment) => (
            <ReviewCard
              key={comment.id}
              reviewerName={`@${comment.user.username}`}
              commentary={comment.body}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Review;
