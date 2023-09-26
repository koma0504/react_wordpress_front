import { ReactNode } from "react";
import s from "./PageSubTitle.module.scss";

const PageSubTitle = ({ children }: { children: ReactNode }) => {
  return <h2 className={s.sub_title}>{children}</h2>;
};

export default PageSubTitle;
