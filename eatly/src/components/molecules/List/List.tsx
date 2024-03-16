import st from "./list.module.css";
import Text from "../../atoms/Text/Text";

const List = () => {
  return (
    <ul className={st.list}>
      <Text type={"li"} className={st.margin}>
        Premium quality food is made with ingredients that <br />
        are packed with essential vitamins, minerals.
      </Text>
      <Text type={"li"}>
        These foods promote overall wellness by support <br />
        healthy digestion and boosting immunity
      </Text>
    </ul>
  );
};

export default List;
