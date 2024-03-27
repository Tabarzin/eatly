import React from "react";
import st from "./button.module.css";

type ButtonProps = {
  type: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ type, children }) => {
  const mainClassName = st.button;
  const className = type === "primary" ? st.primaryButton : st.secondaryButton;

  return (
    <button className={`${mainClassName} ${className}`}>{children}</button>
  );
};

export default Button;
