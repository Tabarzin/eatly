import st from "./downloadAppTextBtnBlock.module.css";
import Text from "../../atoms/Text/Text";
import List from "../../molecules/List/List";
import Button from "../../atoms/Button/Button";
import arrowSW from "../../../assets/arrowSW.png";
import arrow_right from "../../../assets/arrow_right.svg";

const DownloadAppTextBtnBlock = () => {
  return (
    <div className={st.text_btn_block}>
      <Text className={st.h2} type={"h2"}>
        Premium <span className={st.highlight}>Quality </span>
        <br />
        For Your Health
      </Text>
      <div className={st.list}>
        <List />
      </div>
      <Button type={"primary"}>
        Download
        <img src={arrow_right} alt="Arrow" className={st.arrow} />
      </Button>
      <img className={st.arrowSW} src={arrowSW} alt="Arrow" />
    </div>
  );
};

export default DownloadAppTextBtnBlock;
