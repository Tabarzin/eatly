import st from "./heroimage.module.css";
import food from "../../../assets/food.png";
import graph from "../../../assets/graph.png";

const HeroImage = () => {
  return (
    <div>
      <img src={food} alt="Food Dish" />
      <img src={graph} alt="Graph" />
    </div>
  );
};

export default HeroImage;
