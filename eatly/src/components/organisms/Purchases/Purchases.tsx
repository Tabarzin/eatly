import st from "./purchases.module.css";
import Text from "../../atoms/Text/Text";
import purchases from "../../../assets/purchases.png";
import purchases_webp from "../../../assets/purchases.webp";
import purch_card_image_1 from "../../../assets/purch_card_image_1.png";
import purch_card_image_2 from "../../../assets/purch_card_image_2.png";
import purch_card_image_3 from "../../../assets/purch_card_image_3.png";
import PurchasesCard from "../../molecules/PurchasesCard/PurchasesCard";

const Purchases = () => {
  return (
    <div className={st.purchases}>
      <div className={st.text_block}>
        <Text className={st.h2} type={"h2"}>
          Control <span className={st.highlight}> Purchases</span>
          <br /> Via Dashboard
        </Text>

        <PurchasesCard
          className={`${st.purch_card} ${st.first_purch_card}`}
          imageSrc={purch_card_image_1}
          title="Chicken Hell"
          status="On The Way"
          time="3:09 PM"
        />

        <PurchasesCard
          className={st.purch_card}
          imageSrc={purch_card_image_2}
          title="Swe Dish"
          status="Delivered"
          time="Yesterday"
        />
        <PurchasesCard
          className={st.purch_card}
          imageSrc={purch_card_image_3}
          title="Fish Hell Veg"
          status="Cancelled"
          time="Yesterday"
        />
      </div>
      <picture>
        <source srcSet={purchases_webp} type="image/webp" />
        <img
          className={st.purch_img}
          src={purchases}
          alt="Purchases"
          loading="lazy"
          decoding="async"
        />
      </picture>
    </div>
  );
};

export default Purchases;
