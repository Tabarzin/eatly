import React from "react";
import st from "./category.module.css";
import { StringProps } from "../../../types/types";

const Category: React.FC<StringProps> = ({ props }) => {
  return <div className={st.category}>{props}</div>;
};

export default Category;
