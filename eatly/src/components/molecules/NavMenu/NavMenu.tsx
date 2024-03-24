import st from "./navmenu.module.css";
import NavLink from "../../atoms/NavLink/NavLink";
import { HashLink as Link } from "react-router-hash-link";

const NavMenu = () => {
  return (
    <div className={st.navmenu}>
      <Link className={st.link} to="/#recipes">
        <NavLink props="Recipes" />
      </Link>

      <span className={st.spacer}>
        <Link className={st.link} to="/#faq">
          <NavLink props="FAQ" />
        </Link>
      </span>
      <Link className={st.link} to="/blog">
        <NavLink props="Blog" />
      </Link>
    </div>
  );
};

export default NavMenu;
