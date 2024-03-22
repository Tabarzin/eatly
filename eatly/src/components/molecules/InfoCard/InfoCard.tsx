import React from "react";
import st from "./infocard.module.css";

type InfoCardProps = {
  mealType: string;
  imageSrc: string;
  time: string;
  title: string;
  rating: string;
  className?: string;
};

const InfoCard: React.FC<InfoCardProps> = ({
  mealType,
  imageSrc,
  title,
  time,
  rating,
  className,
}) => {
  return (
    <div className={st.infocard}>
      <img src={imageSrc} className={className} alt="Info Card" />
      <div className={st.infocard_text}>
        <span className={st.meal_type}>{mealType}</span>
        <span className={st.title}>{title}</span>
        <div className={st.text}>
          <span className={st.details}>{time}</span>
          <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
            <path
              d="M16.9495 21.8124C18.6676 22.7529 20.1786 21.6131 19.85 19.6184L19.26 16.0369L21.7593 13.5005C23.1493 12.0898 22.575 10.2415 20.6514 9.95043L17.1975 9.4279L15.6604 6.18548C14.7995 4.36923 12.9301 4.34969 12.0676 6.16936L10.5229 9.4279L7.069 9.95043C5.14808 10.241 4.56914 12.0878 5.9611 13.5005L8.46038 16.0369L7.87038 19.6184C7.54225 21.6102 9.05035 22.7542 10.7709 21.8124L13.8602 20.1215L16.9495 21.8124Z"
              fill="#6C5FBC"
            />
            <mask
              id="mask0_1_501"
              maskUnits="userSpaceOnUse"
              x="5"
              y="4"
              width="18"
              height="19"
            >
              <path
                d="M16.9495 21.8124C18.6676 22.7529 20.1786 21.6131 19.85 19.6184L19.26 16.0369L21.7593 13.5005C23.1493 12.0898 22.575 10.2415 20.6514 9.95043L17.1975 9.4279L15.6604 6.18548C14.7995 4.36923 12.9301 4.34969 12.0676 6.16936L10.5229 9.4279L7.069 9.95043C5.14808 10.241 4.56914 12.0878 5.9611 13.5005L8.46038 16.0369L7.87038 19.6184C7.54225 21.6102 9.05035 22.7542 10.7709 21.8124L13.8602 20.1215L16.9495 21.8124Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_1_501)"></g>
          </svg>

          <span className={st.details}>{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
