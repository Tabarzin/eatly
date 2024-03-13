import st from "./herotitle.module.css";
import H1Title from "../../atoms/H1Title/H1Title";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import Title from "../../atoms/Title/Title";

const HeroTitle = () => {
  return (
    <div>
      <div className={st.subtitle_block}>
        <hr className={st.subtitle_line}></hr>
        <SubTitle props="OVER 1000 USERS" />
      </div>

      <H1Title props="Enjoy Foods All Over The World" />
    </div>
  );
};

export default HeroTitle;
