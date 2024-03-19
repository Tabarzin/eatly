import st from "./blogcard.module.css";
import star from "../../../assets/star.svg";

const BlogCard = () => {
  return (
    <div className={st.blogcard}>
      <span className={st.title}>How To Order Food ?</span>
      <div className={st.tags_star_block}>
        <span className={st.tags}>#history, #food</span>
        <div className={st.rating_star}>
          <span className={st.rating}>7</span>
          <img src={star} alt="Star icon" />
        </div>
      </div>
      <p className={st.blogcard_p_text}>
        It wasn't quite yet time to panic. There was still time to salvage the
        situation...
      </p>
    </div>
  );
};

export default BlogCard;
