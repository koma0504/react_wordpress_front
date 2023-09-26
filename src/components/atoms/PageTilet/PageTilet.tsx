import { ReactNode } from "react";
import s from "./PageTilet.module.scss";

const PageTitle = ({ children }: { children: ReactNode }) => {
  return <h1 className={s.page_title}>{children}</h1>;
};

export default PageTitle;
