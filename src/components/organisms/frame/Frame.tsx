import { ReactNode } from "react";
import s from "./Frame.module.scss";
import MovingNoiseCircle from "@/components/atoms/BgRandomAnimation/BgRandomAnimation";
// import { BgRandomAnimation } from "@/components/atoms/BgRandomAnimation/BgRandomAnimation";
// import { useImageContext } from "@/components/atoms/BgImgProvider";

const Frame = ({ children }: { children: ReactNode }) => {
  // const { backgroundImage } = useImageContext();

  return (
    <>
      <div
        className={s.frame}
        // style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* <BgRandomAnimation /> */}
        {/* <div className={s.bg}></div> */}
        <MovingNoiseCircle />

        <div className={s.page}>{children}</div>
      </div>
    </>
  );
};
export default Frame;
