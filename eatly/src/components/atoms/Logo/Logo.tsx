import { useState } from "react";
import st from "./logo.module.css";

export default function Logo() {
  return (
    <>
      <div className={st.logo}>
        <svg
          width="46"
          height="43"
          viewBox="0 0 46 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3.67432"
            y="4.97827"
            width="42.2674"
            height="37.3367"
            rx="6.96951"
            fill="#6C5FBC"
          />
          <rect
            x="1.0075"
            y="1.0075"
            width="40.2524"
            height="35.3217"
            rx="5.96201"
            fill="#DBD9EE"
            stroke="#6C5FBC"
            stroke-width="2.01499"
          />
          <path
            d="M32.624 11.916L9.72243 11.8154"
            stroke="#6C5FBC"
            stroke-width="2.08432"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32.6094 16.4718L27.5161 16.4496C25.4094 16.4404 23.7056 14.3915 23.7134 11.8767C23.7212 9.3619 25.4377 7.32794 27.5444 7.33714L32.6377 7.35938"
            stroke="#6C5FBC"
            stroke-width="2.08432"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.3616 26.4933L10.7073 26.4197C10.162 26.4173 9.70515 25.8827 9.69477 25.2318L9.65049 23.5157C9.6402 22.8352 10.1005 22.2603 10.6705 22.2628L17.2505 22.3361L17.3616 26.4933Z"
            stroke="#6C5FBC"
            stroke-width="2.08432"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M27.8133 28.9654L18.4076 28.8503C17.8623 28.8479 17.4055 28.3134 17.3951 27.6624L17.2754 22.3214L32.555 22.5064L32.5653 23.187C32.642 26.4124 30.5024 29.0067 27.8133 28.9654Z"
            stroke="#6C5FBC"
            stroke-width="2.08432"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span className={st.logo_text}>eatly</span>
      </div>
    </>
  );
}
