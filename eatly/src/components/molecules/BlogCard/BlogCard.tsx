import st from "./blogcard.module.css";
import star from "../../../assets/star.svg";

import { Article } from "../../../store/articlesSlice";
import User from "../User/User";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { useEffect } from "react";
import { fetchUsersByIds } from "../../../store/userSlice";
import React from "react";

interface BlogCardProps {
  article: Article;
  userData: {
    image: string;
    firstName: string;
    lastName: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  const truncateText = (text: string, maxLines: number) => {
    const lines = text.split("\n");

    if (lines.length > maxLines) {
      const truncatedText = lines.slice(0, maxLines).join("\n");
      return truncatedText;
    }

    return text;
  };

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsersByIds([article.userId]));
  }, [dispatch, article.userId]);

  const userData = useSelector(
    (state: RootState) => state.user.usersData[article.userId]
  );

  return (
    <div className={st.blogcard}>
      <span className={st.title}>{article.title}</span>
      <div className={st.tags_star_block}>
        {userData && (
          <User
            user={{
              image: userData.image,
              firstName: userData.firstName,
              lastName: userData.lastName,
            }}
          />
        )}

        <div className={st.rating_star}>
          <span className={st.rating}>{article.reactions?.likes || 0}</span>
          <img src={star} alt="Star icon" />
        </div>
      </div>
      <span className={st.tags}>
        {article.tags.map((tag) => `#${tag}`).join(", ")}
      </span>
      <p className={st.blogcard_p_text}>{truncateText(article.body, 3)}</p>
    </div>
  );
};

export default BlogCard;
