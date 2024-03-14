import React from "react";
import st from "./features.module.css";
import cn from "classnames";
import Text from "../../atoms/Text/Text";

const Features = () => {
  return (
    <div className={st.features}>
      <div className={st.features_block}>
        <Text className={st.features_large}>10K</Text>
        <Text className={st.features_small}>
          Satisfied Customers <br /> All Great Over The World
        </Text>
      </div>
      <div className={st.features_block}>
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
    </div>
  );
};

export default Features;
