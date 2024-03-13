import React from "react";
import st from "./subtitle.module.css";
import { StringProps } from "../../../types/types";

const SubTitle: React.FC<StringProps> = ({ props }) => {
  return <span className={st.subtitle}>{props}</span>;
};

export default SubTitle;
