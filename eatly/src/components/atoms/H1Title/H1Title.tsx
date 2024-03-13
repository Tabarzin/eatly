import React from "react";
import st from "./h1title.module.css";
import { StringProps } from "../../../types/types";

const H1Title: React.FC<StringProps> = ({ props, className }) => {
  return (
    <h1 className={`${st.h1title} ${className}`}>
      Enjoy Foods All Over The <span className={st.highlight}>World</span>
    </h1>
  );
};

export default H1Title;
