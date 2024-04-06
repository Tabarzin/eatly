import st from "./heroimage.module.css";
import food_png from "../../../assets/food.png";
import graph from "../../../assets/graph.png";
import PurchasesCard from "../../molecules/PurchasesCard/PurchasesCard";
import purch_card_image_1 from "../../../assets/purch_card_image_1.png";
import linesNE from "../../../assets/3linesNE.svg";
import food_webp from "../../../assets/food.webp";
import linesSW from "../../../assets/3linesSW.svg";
import food_sm_webp from "../../../assets/food_sm.webp";
import arrow_rope_r from "../../../assets/arrow_rope_r.svg";

const HeroImage = () => {
  return (
    <section className={st.heroimage}>
      <div className={st.linesNE}>
        <img src={linesNE} alt="Lines" />
      </div>
      <div className={st.hero_purch_card}>
        <PurchasesCard
          imageSrc={purch_card_image_1}
          title={"Chicken Hell"}
          status={"On The Way"}
          time={"3:09 PM"}
        />
      </div>

      <img
        className={st.hero_image_food}
        srcSet={`${food_sm_webp} 300w, ${food_webp} 500w, ${food_png} 900w`}
        sizes="(max-width: 900px) 100vw, 900px"
        src={food_png}
        alt="Food Dish"
      />

      <div className={st.arrow_rope_r}>
        <img src={arrow_rope_r} alt="Arrow Image" />
      </div>
      <img className={st.graph} src={graph} alt="Graph" />
      <div className={st.linesSW}>
        <img src={linesSW} alt="Lines" />
      </div>
    </section>
  );
};

export default HeroImage;
