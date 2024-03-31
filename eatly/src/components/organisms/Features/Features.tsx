import st from "./features.module.css";
import Text from "../../atoms/Text/Text";
import features_line_1 from "../../../assets/features_line_1.svg";
import features_line_2 from "../../../assets/features_line_2.svg";
import features_right_line_1 from "../../../assets/features_right_line_1.svg";
import features_right_line_2 from "../../../assets/features_right_line_2.svg";

const Features = () => {
  return (
    <div className={st.features}>
      <div className={st.features_left_lines}>
        <img className={st.line_2} src={features_line_2} alt="Line" />
        <img className={st.line_1} src={features_line_1} alt="Line" />
      </div>
      <div className={st.features_blocks}>
        <div className={`${st.features_block} ${st.features_block_border}`}>
          <Text className={st.features_large}>10K+</Text>
          <Text className={st.features_small}>
            Satisfied Customers <br /> All Great Over The World
          </Text>
        </div>

        <div className={`${st.features_block} ${st.features_block_border}`}>
          <Text className={st.features_large}>4M </Text>
          <Text type={"p"} className={st.features_small}>
            Healthy Dishes Sold <br />
            Including Milk Shakes Smooth
          </Text>
        </div>

        <div className={st.features_block}>
          <Text className={st.features_large}>99.99%</Text>
          <Text type={"p"} className={st.features_small}>
            Customer Support <br />
            We Provide Great Experiences
          </Text>
        </div>
        <div className={st.features_right_lines}>
          <img
            className={st.right_line_1}
            src={features_right_line_1}
            alt="Line"
          />
          <img
            className={st.right_line_2}
            src={features_right_line_2}
            alt="Line"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
