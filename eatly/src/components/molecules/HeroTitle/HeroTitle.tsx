import st from "./herotitle.module.css";
import SubTitle from "../../atoms/SubTitle/SubTitle";
import Text from "../../atoms/Text/Text";

const HeroTitle = () => {
  return (
    <div>
      <div className={st.subtitle_block}>
        <hr className={st.subtitle_line}></hr>
        <SubTitle props="OVER 1000 USERS" />
      </div>
      <Text type={"h1"}>
        Enjoy Foods All Over The <span className={st.highlight}>World</span>
      </Text>
    </div>
  );
};

export default HeroTitle;
