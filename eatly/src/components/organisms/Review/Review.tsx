import st from "./review.module.css";

import Text from "../../atoms/Text/Text";
import ReviewCard from "../../molecules/ReviewCard/ReviewCard";
import ReviewCardsScrollBar from "../../atoms/ReviewCardsScrollBar/ReviewCardsScrollBar";

const Review = () => {
  return (
    <>
      <div className={st.review}>
        <Text type={"h3"}>
          <span className={st.highlight}>Customer</span> Say
        </Text>
      </div>
      <div className={st.reviewcards_wrapper}>
        <div>
          <ReviewCard
            isSmall={false}
            reviewerName={"@omottley2h"}
            commentary={"I cannot believe how I found you, this is so pretty."}
          />
        </div>
        <div className={st.small_review_cards_block}>
          <div className={st.small_review_cards}>
            <ReviewCard
              isSmall={true}
              commentary={
                "I cannot believe how I found you, this is so pretty."
              }
            />
            <ReviewCard
              isSmall={true}
              commentary={
                "I cannot believe how I found you, this is so pretty."
              }
            />
          </div>
          <ReviewCardsScrollBar />
        </div>
      </div>
    </>
  );
};

export default Review;
