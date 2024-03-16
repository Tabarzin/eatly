import st from "./heroimage.module.css";
import food from "../../../assets/food.png";
import graph from "../../../assets/graph.png";
import PurchasesCard from "../../molecules/PurchasesCard/PurchasesCard";
import purch_card_image_1 from "../../../assets/purch_card_image_1.png";

const HeroImage = () => {
  return (
    <div className={st.heroimage}>
      <div className={st.linesNE}>
        <svg
          width="41"
          height="28"
          viewBox="0 0 41 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.00023 12.8834C6.56253 9.20322 10.9297 8.58954 15.3593 8.17693C20.8882 7.66193 26.5141 7.46015 30.7933 1.99949"
            stroke="#685BB8"
            strokeWidth="2.65"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.61752 23.2276C4.86361 18.5543 9.58491 15.7927 15.1614 15.1702C18.0792 14.8447 21.038 15.1687 23.9374 14.6113C30.4694 13.355 36.5373 9.34304 39.3825 3.13852"
            stroke="#685BB8"
            strokeWidth="2.65"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30.1657 19.2189C28.0028 20.6219 25.6558 21.6904 23.0785 21.9969C17.9456 22.607 12.5693 21.7971 8.67207 25.9995"
            stroke="#685BB8"
            strokeWidth="2.65"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={st.hero_purch_card}>
        <PurchasesCard
          imageSrc={purch_card_image_1}
          title={"Chicken Hell"}
          status={"On The Way"}
          time={"3:09 PM"}
        />
      </div>
      <img src={food} alt="Food Dish" />
      <div className={st.arrow_rope_r}>
        <svg
          width="101"
          height="97"
          viewBox="0 0 101 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M71.6674 10.665C80.803 24.2797 86.0196 39.8403 80.7461 55.7517C75.9861 70.1135 63.0132 78.6203 48.1158 67.9651C41.0635 62.9212 36.4872 52.7419 41.0691 45.1791C46.1738 36.7534 57.5029 44.2181 60.5762 49.9522C67.7546 63.3447 63.1038 81.4038 47.3119 89.5618C28.6107 99.2227 20.562 80.755 20.7098 80.7507"
            stroke="#665AB5"
            strokeWidth="2.65"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M91.0252 14.5325C89.1008 14.9057 87.2148 14.5294 85.3113 14.2401C79.0607 13.2904 72.6697 10.4878 68.7865 5.86609C71.0232 11.7936 71.6843 20.1607 66.9233 25.1801"
            stroke="#665AB5"
            strokeWidth="2.65"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <img className={st.graph} src={graph} alt="Graph" />
      <div className={st.linesSW}>
        <svg
          width="38"
          height="37"
          viewBox="0 0 38 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.282 31.1194C30.1701 24.6499 32.3125 17.938 34.9009 11.3634"
            stroke="#685BB8"
            strokeWidth="2.65"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.91295 34.9999C15.7997 26.5425 22.8879 17.0927 29.4016 7.55621"
            stroke="#685BB8"
            strokeWidth="2.65"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.6308 15.8358C9.13431 13.2755 18.5092 6.43167 25.4206 1.99974"
            stroke="#685BB8"
            strokeWidth="2.65"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroImage;
