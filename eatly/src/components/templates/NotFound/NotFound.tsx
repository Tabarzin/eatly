import Button from "../../atoms/Button/Button";
import st from "./notfound.module.css";

const NotFound = () => {
  return (
    <div>
      <span>404</span>
      <span>Page Not Found</span>
      <Button type={"primary"}>Go Home</Button>
    </div>
  );
};

export default NotFound;
