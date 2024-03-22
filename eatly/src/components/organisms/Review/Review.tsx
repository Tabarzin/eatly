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

  console.log(comments, "COOOOOOOO");

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  const first3Comments = comments.slice(0, 3);

  console.log(first3Comments, "THREEEEEEE");

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
        {first3Comments.map((comment) => (
          <ReviewCard
            reviewerName={`@${comment.user.username}`}
            commentary={comment.body}
          />
        ))}
        <ReviewCard
          reviewerName={"@omottley2h"}
          commentary={"I cannot believe how I found you, this is so pretty."}
        />
      </div>
    </>
  );
};

export default Review;
