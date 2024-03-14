import st from "./faq.module.css";
import Text from "../../atoms/Text/Text";
import AccordionItem from "../../molecules/AccordionItem/AccordionItem";

const FAQ = () => {
  return (
    <div>
      <div>
        <Text type={"h3"}>
          Frequently Asked <span className={st.highlight}>Questions</span>
        </Text>
      </div>
      <div>
        <AccordionItem
          question={"How long does delivery take?"}
          answer={
            "You Can Get Information By Contacting Our Support Team Have 24/7 Service.What is The Difference Between Free And Paid Plan ?"
          }
        />
        <hr className={st.line}></hr>
        <AccordionItem
          question={"How Does It Work ?"}
          answer={
            "You Can Get Information By Contacting Our Support Team Have 24/7 Service.What is The Difference Between Free And Paid Plan ?"
          }
        />
        <hr className={st.line}></hr>
        <AccordionItem
          question={"How does your food delivery service work?"}
          answer={
            "You Can Get Information By Contacting Our Support Team Have 24/7 Service.What is The Difference Between Free And Paid Plan ?"
          }
        />
        <hr className={st.line}></hr>
        <AccordionItem
          question={"What payment options do you accept?"}
          answer={
            "You Can Get Information By Contacting Our Support Team Have 24/7 Service.What is The Difference Between Free And Paid Plan ?"
          }
        />
        <hr className={st.line}></hr>
        <AccordionItem
          question={"Do you offer discounts or promotions?"}
          answer={
            "You Can Get Information By Contacting Our Support Team Have 24/7 Service.What is The Difference Between Free And Paid Plan ?"
          }
        />
        <hr className={st.line}></hr>
      </div>
    </div>
  );
};

export default FAQ;
