import React from "react";
import st from "./reviewcard.module.css";

interface ReviewCardProps {
  reviewerName: string;
  commentary: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  reviewerName,
  commentary,
}) => {
  return (
    <div className={st.reviewcard}>
      <div className={st.name_quote}>
        <p className={st.reviewer}>{reviewerName}</p>

        <svg
          width="59"
          height="45"
          viewBox="0 0 59 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M37.3071 44.9998C34.2301 38.8945 32.6916 32.263 32.6916 25.1051C32.6916 17.842 34.5635 11.842 38.3072 7.10523C42.0508 2.36841 47.8715 0 55.7692 0V9.94732C52.9999 9.94732 50.9742 10.5789 49.6921 11.842C48.41 13.1052 47.769 15.5262 47.769 19.1052V20.6841H59V44.9998H37.3071ZM5.46145 45C2.38445 38.8948 0.845947 32.2632 0.845947 25.1054C0.845947 17.8422 2.71779 11.8423 6.46148 7.10545C10.2052 2.36864 16.0258 0.000227863 23.9235 0.000227863V9.94755C21.1542 9.94755 19.1285 10.5791 17.8464 11.8423C16.5643 13.1054 15.9233 15.5265 15.9233 19.1054V20.6843H27.1543V45H5.46145Z"
            fill="#DADADA"
          />
        </svg>
      </div>
      <p className={st.commentary}>{commentary}</p>
    </div>
  );
};

export default ReviewCard;
