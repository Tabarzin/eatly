import React from "react";
import st from "./paragraph.module.css";

interface ParagraphProps {
  type?: "primary" | "secondary";
  children: string;
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  type = "primary",
}) => {
  const mainClass = st.paragraph;
  const textClass = type === "primary" ? st.primaryText : st.secondaryText;

  return (
    <p className={`${mainClass} ${textClass} ${st.highlight}`}>{children}</p>
  );
};

export default Paragraph;
