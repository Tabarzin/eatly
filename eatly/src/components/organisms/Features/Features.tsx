import React from "react";
import st from "./features.module.css";
import Text from "../../atoms/Text/Text";

const Features = () => {
  return (
    <div className={st.features}>
      <div className={st.features_block}>
        <Text className={st.large}> 10K</Text>
        <Text className={st.small}>
          Satisfied Customers <br /> All Great Over The World
        </Text>
      </div>
      <div className={st.features_block}>
        <Text className={st.large}>4M </Text>
        <Text className={st.small}>
          Healthy Dishes Sold <br />
          Including Milk Shakes Smooth
        </Text>
      </div>
      <div className={st.features_block}>
        <Text className={st.large}>99.99%</Text>
        <Text className={st.small}>
          Customer Support <br />
          We Provide Great Experiences
        </Text>
      </div>
    </div>
  );
};

export default Features;
