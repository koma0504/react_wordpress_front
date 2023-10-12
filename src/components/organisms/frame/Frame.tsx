import { ReactNode, useEffect } from "react";
import s from "./Frame.module.scss";
import { useImageContext } from "@/components/atoms/BgImgProvider";
import styles from "../../../hooks/useTransition/useTransition.module.scss";

const Frame = ({ children }: { children: ReactNode }) => {
  const { backgroundImage } = useImageContext();

  return (
    <>
      <div
        className={s.frame}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={s.page}>{children}</div>
      </div>
    </>
  );
};
export default Frame;
