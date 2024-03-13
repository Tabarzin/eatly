import st from "./hero.module.css";
import HeroTitle from "../../molecules/HeroTitle/HeroTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Button from "../../atoms/Button/Button";
import HeroImage from "../../atoms/HeroImage/HeroImage";

const Hero = () => {
  return (
    <div className={st.hero}>
      <div>
        <HeroTitle />
        <Paragraph children="EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a $20 bonus." />
        <Button type={"primary"} children="Get Started" />
        <Button type={"secondary"} children="Go Pro" />
      </div>
      <div>
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
