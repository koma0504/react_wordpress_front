import { ReactNode } from "react";
import s from "./PageTilet.module.scss";

const PageText = ({
  children,
  props,
}: {
  children: ReactNode;
  props?: "right" | "left";
}) => {
  const alignType = props === "left" ? s.left : s.right;
  return <h1 className={`${s.page_text} ${alignType}`}>{children}</h1>;
};

export default PageText;
