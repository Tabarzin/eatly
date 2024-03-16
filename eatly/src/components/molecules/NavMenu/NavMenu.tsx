import st from "./navmenu.module.css";
import NavLink from "../../atoms/NavLink/NavLink";

const NavMenu = () => {
  return (
    <div className={st.navmenu}>
      <NavLink props="Recipes" />
      <span className={st.spacer}>
        <NavLink props="FAQ" />
      </span>
      <NavLink props="Blog" />
    </div>
  );
};

export default NavMenu;
