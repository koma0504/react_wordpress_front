import { ReactNode } from "react";
import s from "./Frame.module.scss";

const Frame = ({ children }: { children: ReactNode }) => {
  return (
    <div className={s.frame}>
      <div className={s.page}>{children}</div>
    </div>
  );
};
export default Frame;
