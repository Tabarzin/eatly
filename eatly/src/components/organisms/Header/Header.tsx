import st from "./header.module.css";
import NavMenu from "../../molecules/NavMenu/NavMenu";
import Logo from "../../atoms/Logo/Logo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={st.header}>
      <Link className={st.link} to="/">
        <Logo />
      </Link>

      <NavMenu />
    </header>
  );
};

export default Header;
