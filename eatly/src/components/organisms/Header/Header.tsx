import st from "./header.module.css";
import NavMenu from "../../molecules/NavMenu/NavMenu";
import Logo from "../../atoms/Logo/Logo";

const Header = () => {
  return (
    <div className={st.header}>
      <Logo />

      <NavMenu />
    </div>
  );
};

export default Header;
