import st from "./herotitle.module.css";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import Text from "../../atoms/Text/Text";

const HeroTitle = () => {
  return (
    <div>
      <div className={st.line_sub}>
        <hr className={st.subtitle_line}></hr>
        <SubTitle className={st.subtitle_block} props="OVER 1000 USERS" />
      </div>

      <Text type={"h1"} className={st.h1}>
        Enjoy Foods All <br />
        Over The <span className={st.highlight}>World</span>
      </Text>
    </div>
  );
};

export default HeroTitle;
