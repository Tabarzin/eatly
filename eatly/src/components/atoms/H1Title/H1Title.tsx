import React from "react";
import st from "./h1title.module.css";
import { StringProps } from "../../../types/types";

const H1Title: React.FC<StringProps> = ({ props }) => {
  return <h1 className={st.h1title}>{props}</h1>;
};

export default H1Title;
