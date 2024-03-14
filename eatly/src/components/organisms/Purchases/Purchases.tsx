import st from "./purchases.module.css";
import Text from "../../atoms/Text/Text";
import purchases from "../../../assets/purchases.png";
import purch_card_image_1 from "../../../assets/purch_card_image_1.png";
import purch_card_image_2 from "../../../assets/purch_card_image_2.png";
import purch_card_image_3 from "../../../assets/purch_card_image_3.png";
import PurchasesCard from "../../molecules/PurchasesCard/PurchasesCard";

const Purchases = () => {
  return (
    <div className={st.purchases}>
      <div>
        <Text type={"h2"}>
          Control <span className={st.highlight}> Purchases</span> Via Dashboard
        </Text>
        <PurchasesCard
          imageSrc={purch_card_image_1}
          title="Chicken Hell"
          status="On The Way"
          time="3:09 PM"
        />
        <PurchasesCard
          imageSrc={purch_card_image_2}
          title="Swe Dish"
          status="Delivered"
          time="Yesterday"
        />
        <PurchasesCard
          imageSrc={purch_card_image_3}
          title="Fish Hell Veg"
          status="Cancelled"
          time="Yesterday"
        />
      </div>
      <img src={purchases} alt="Purchases" />
    </div>
  );
};

export default Purchases;
