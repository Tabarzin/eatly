import cn from "classnames";
import React, { CSSProperties, ReactNode } from "react";
import st from "./text.module.css";

// export type TextProps = {
//   /** Дополнительный класс */
//   className?: string;
//   /** Стиль отображения */
//   view?: "title" | "button" | "p-20" | "p-18" | "p-16" | "p-14";
//   /** Html-тег */
//   tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "p" | "span";
//   /** Начертание шрифта */
//   weight?: "normal" | "medium" | "bold";
//   /** Контент */
//   children: React.ReactNode;
//   /** Цвет */
//   color?: "primary" | "secondary" | "accent";
// };

// const Text: React.FC<TextProps> = ({
//   className,
//   view,
//   tag: Tag = "p",
//   weight,
//   children,
//   color,
// }) => {
//   return (
//     <Tag
//       className={cn(
//         "text",
//         `text_weight-${weight}`,
//         `text_view-${view}`,
//         color && `text_color-${color}`,

//         className
//       )}
//     >
//       {children}
//     </Tag>
//   );
// };

// export default Text;

type TextProps = {
  type?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "li";
  children: ReactNode;
  customStyle?: CSSProperties;
  className?: string;
};

// const Text: React.FC<TextProps> = ({ type = "p", children, customStyle }) => {
//   const Tag = type as keyof JSX.IntrinsicElements;
//   const className = st[`text-${type}`];
//   return (
//     <Tag className={className} style={customStyle}>
//       {children}
//     </Tag>
//   );
// };

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
