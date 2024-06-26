import Button from "../../atoms/Button/Button";
import st from "./notfound.module.css";
import oops from "../../../assets/oops.svg";
import { HashLink as Link } from "react-router-hash-link";
import Header from "../../organisms/Header/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className={st.notfound}>
        <img src={oops} alt="Page Not Found" className={st.notfound_img} />
        <Link to="/">
          <Button type={"primary"}>Go Home</Button>
        </Link>
        <span className={st.notfound_copyright}>
          Image by <a href="http://www.freepik.com"> Freepik </a>{" "}
        </span>
      </main>
    </>
  );
};

export default NotFound;
