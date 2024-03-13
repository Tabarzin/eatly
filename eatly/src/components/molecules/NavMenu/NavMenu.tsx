import React from "react";
import st from "./navmenu.module.css";
import NavLink from "../../atoms/NavLink/NavLink";

const NavMenu = () => {
  return (
    <div className={st.navmenu}>
      <NavLink props="Recipes" />
      <NavLink props="FAQ" />
      <NavLink props="Blog" />
    </div>
  );
};

export default NavMenu;
