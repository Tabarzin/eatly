import React from "react";
import st from "./navlink.module.css";
import { StringProps } from "../../../types/types";

const NavLink: React.FC<StringProps> = ({ props }) => {
  return <span className={st.navlink}>{props}</span>;
};

export default NavLink;
