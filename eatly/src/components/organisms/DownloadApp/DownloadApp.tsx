import st from "./downloadapp.module.css";
import mobile from "../../../assets/mobile.png";
import mobile_sm from "../../../assets/mobile_sm.png";
import mobile_sm_webp from "../../../assets/mobile_sm.webp";
import mobile_webp from "../../../assets/mobile.webp";

import DownloadAppTextBtnBlock from "../DownloadAppTextBtnBlock/DownloadAppTextBtnBlock";

const DownloadApp = () => {
  return (
    <>
      <div className={st.downloadapp}>
        {/* <img src={mobile} className={st.download_img} alt="Mobile Phone" /> */}
        <img
          srcSet={`${mobile_sm_webp} 540w, ${mobile_webp} 1048w, ${mobile_sm} 540w, ${mobile} 1048w`}
          sizes="(max-width: 1048px) 100vw, 1440px"
          src={mobile_sm}
          className={st.download_img}
          alt="Mobile Phone"
          loading="lazy"
          decoding="async"
        />
        <DownloadAppTextBtnBlock />
      </div>
    </>
  );
};

export default DownloadApp;
