import React from "react";
import st from "./downloadapp.module.css";
import mobile from "../../../assets/mobile.png";
import Text from "../../atoms/Text/Text";
import DownloadAppTextBtnBlock from "../DownloadAppTextBtnBlock/DownloadAppTextBtnBlock";

const DownloadApp = () => {
  return (
    <>
      <div className={st.downloadapp}>
        <img src={mobile} className={st.download_img} alt="Mobile Phone" />
        <DownloadAppTextBtnBlock />
      </div>
    </>
  );
};

export default DownloadApp;
