import React from "react";
import st from "./accordionbutton.module.css";

interface AccordionButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const AccordionButton: React.FC<AccordionButtonProps> = ({
  isOpen,
  onClick,
}) => {
  return (
    <button className={st.accordionbutton} onClick={onClick}>
      {isOpen ? (
        <span className={st.minus}> - </span>
      ) : (
        <span className={st.plus}> + </span>
      )}
    </button>
  );
};

export default AccordionButton;
