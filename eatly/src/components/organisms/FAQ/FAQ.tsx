import st from "./faq.module.css";
import Text from "../../atoms/Text/Text";
import AccordionItem from "../../molecules/AccordionItem/AccordionItem";
import faq_lines from "../../../assets/faq_lines.svg";

const FAQ = () => {
  return (
    <section className={st.faq}>
      <div className={st.faq_title_block}>
        <img src={faq_lines} className={st.faq_lines} alt="Lines" />
        <Text type={"h3"} className={st.h3}>
          Frequently Asked <br />
          <span className={st.highlight}>Questions</span>
        </Text>
      </div>
      <div className={st.accordion}>
        <AccordionItem
          question={"How long does delivery take?"}
          answer={
            "You Can Get Information By Contacting Our Support Team Have 24/7 Service. What is The Difference Between Free And Paid Plan ?"
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
    </section>
  );
};

export default FAQ;
