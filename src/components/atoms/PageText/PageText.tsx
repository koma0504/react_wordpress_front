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
  return <p className={`${s.page_text} ${alignType}`}>{children}</p>;
};

export default PageText;
