import st from "./navlink.module.css";

interface NavLinkProps {
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ title }) => {
  return <span className={st.navlink}>{title}</span>;
};

export default NavLink;
