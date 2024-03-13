import st from "./navmenu.module.css";
import NavLink from "../../atoms/NavLink/NavLink";

const NavMenu = () => {
  return (
    <div className={st.navmenu}>
      <NavLink title="Recipes" />
      <NavLink title="FAQ" />
      <NavLink title="Blog" />
    </div>
  );
};

export default NavMenu;
