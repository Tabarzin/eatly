import st from "./blogcard.module.css";
import star from "../../../assets/star.svg";

import { Article } from "../../../store/articlesSlice";

interface BlogCardProps {
  article: Article;
}

const BlogCard: React.FC<BlogCardProps> = ({ article }) => {
  return (
    <div className={st.blogcard}>
      <span className={st.title}>{article.title}</span>
      <div className={st.tags_star_block}>
        <span className={st.tags}>{article.tags.join(", #")}</span>
        <div className={st.rating_star}>
          <span className={st.rating}>{article.reactions}</span>
          <img src={star} alt="Star icon" />
        </div>
      </div>
      <p className={st.blogcard_p_text}>{article.body}</p>
    </div>
  );
};

export default BlogCard;

// const BlogCard = () => {
//   return (
//     <div className={st.blogcard}>
//       <span className={st.title}>How To Order Food ?</span>
//       <div className={st.tags_star_block}>
//         <span className={st.tags}>#history, #food</span>
//         <div className={st.rating_star}>
//           <span className={st.rating}>7</span>
//           <img src={star} alt="Star icon" />
//         </div>
//       </div>
//       <p className={st.blogcard_p_text}>
//         It wasn't quite yet time to panic. There was still time to salvage the
//         situation...
//       </p>
//     </div>
//   );
// };

// export default BlogCard;
