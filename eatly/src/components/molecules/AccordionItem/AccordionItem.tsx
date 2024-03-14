import React, { useState } from "react";
import AccordionButton from "../../atoms/AccordionButton/AccordionButton";
import Text from "../../atoms/Text/Text";
import st from "./accordionitem.module.css";

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={st.accordionitem}>
        <Text type={"p"} className={st.question}>
          {question}
        </Text>
        <AccordionButton isOpen={isOpen} onClick={toggleAccordion} />
      </div>
      {isOpen && (
        <Text type={"p"} className={st.answer}>
          {answer}
        </Text>
      )}
    </div>
  );
};

export default AccordionItem;
