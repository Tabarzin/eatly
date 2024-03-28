import React, { CSSProperties, ReactNode } from "react";
import st from "./text.module.css";

type TextProps = {
  type?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "li";
  children: ReactNode;
  customStyle?: CSSProperties;
  className?: string;
};

const Text: React.FC<TextProps> = ({
  type = "p",
  children,
  customStyle,
  className,
}) => {
  const Tag = type as keyof JSX.IntrinsicElements;
  const defaultClassName = st[`text-${type}`];

  const combinedClassName = className
    ? `${defaultClassName} ${className}`
    : defaultClassName;

  return (
    <Tag className={combinedClassName} style={customStyle}>
      {children}
    </Tag>
  );
};

export default Text;
