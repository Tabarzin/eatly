import st from "./blogcard.module.css";
import star from "../../../assets/star.svg";

import { Article } from "../../../store/articlesSlice";

interface BlogCardProps {
  article: Article;
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
  return (
    <div className={st.blogcard}>
      <span className={st.title}>{article.title}</span>
      <div className={st.tags_star_block}>
        <span className={st.tags}>
          {article.tags.map((tag) => `#${tag}`).join(", ")}
        </span>

        <div className={st.rating_star}>
          <span className={st.rating}>{article.reactions}</span>
          <img src={star} alt="Star icon" />
        </div>
      </div>

      <p
        className={st.blogcard_p_text}
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
        }}
      >
        {truncateText(article.body, 3)}
      </p>
    </div>
  );
};

export default BlogCard;
