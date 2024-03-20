import st from "./header.module.css";
import NavMenu from "../../molecules/NavMenu/NavMenu";
import Logo from "../../atoms/Logo/Logo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={st.header}>
      <Link className={st.link} to="/">
        <Logo />
      </Link>

      <NavMenu />
    </div>
  );
};

export default Header;
