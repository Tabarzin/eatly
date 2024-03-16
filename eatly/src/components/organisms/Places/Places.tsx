import st from "./places.module.css";
import Text from "../../atoms/Text/Text";
import InfoCard from "../../molecules/InfoCard/InfoCard";
import infocard_image_1 from "../../../assets/infocard_image_1.png";
import infocard_image_2 from "../../../assets/infocard_image_2.png";
import infocard_image_3 from "../../../assets/infocard_image_3.png";

const Places = () => {
  return (
    <div className={st.places}>
      <span className={st.h3}>
        <Text type={"h3"}>
          Our Top <span className={st.highlight}> Lunch</span>
        </Text>
      </span>
      <div className={st.infocardblock}>
        <InfoCard
          imageSrc={infocard_image_1}
          title={"The Chicken King"}
          time={"24min •"}
          rating={"4.8"}
        />
        <InfoCard
          imageSrc={infocard_image_1}
          title={"The Chicken King"}
          time={"24min •"}
          rating={"4.8"}
        />
        <InfoCard
          imageSrc={infocard_image_1}
          title={"The Chicken King"}
          time={"24min •"}
          rating={"4.8"}
        />
      </div>
    </div>
  );
};

export default Places;
