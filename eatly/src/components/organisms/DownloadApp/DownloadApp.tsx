import React from "react";
import st from "./downloadapp.module.tsx";
import mobile from "../../../assets/mobile.png";
import Text from "../../atoms/Text/Text";
import DownloadAppTextBtnBlock from "../DownloadAppTextBtnBlock/DownloadAppTextBtnBlock";

const DownloadApp = () => {
  return (
    <div>
      <img src={mobile} alt="Mobile Phone" />
      <DownloadAppTextBtnBlock />
    </div>
  );
};

export default DownloadApp;
