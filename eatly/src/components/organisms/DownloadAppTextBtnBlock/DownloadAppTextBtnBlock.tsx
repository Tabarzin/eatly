import st from "./downloadAppTextBtnBlock.module.css";
import Text from "../../atoms/Text/Text";
import List from "../../molecules/List/List";
import Button from "../../atoms/Button/Button";
import arrowSW from "../../../assets/arrowSW.png";

const DownloadAppTextBtnBlock = () => {
  return (
    <div>
      <Text type={"h2"}>
        Premium <span className={st.highlight}>Quality </span>For Your Health
      </Text>
      <List />
      <Button type={"primary"}>
        Download{" "}
        <svg
          width="27"
          height="26"
          viewBox="0 0 27 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.59259 13.0001H20.7811"
            stroke="white"
            strokeWidth="2.25773"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.1865 5.41675L20.7808 13.0001L13.1865 20.5834"
            stroke="white"
            strokeWidth="2.25773"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
      <img src={arrowSW} alt="Arrow" />
    </div>
  );
};

export default DownloadAppTextBtnBlock;
