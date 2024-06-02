import React from "react";
import st from "./logo.module.css";
import logo from "../../../assets/logo.svg";

interface LogoProps {
  isLarge?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isLarge = false }) => {
  const textSize = isLarge ? "28px" : "22px";

  return (
    <>
      <div className={st.logo}>
        <img src={logo} alt="Logo" />

        <span className={st.logo_text} style={{ fontSize: textSize }}>
          eatly
        </span>
      </div>
    </>
  );
};

export default Logo;
