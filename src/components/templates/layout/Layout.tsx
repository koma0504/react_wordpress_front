import Frame from "@/components/organisms/frame/Frame";
import Header from "@/components/organisms/header/Header";
import { ReactNode } from "react";
import s from "./Layout.module.scss";
import { PageTransition } from "@/components/atoms/PageTransition/PageTransition";
import MovingNoiseCircle from "@/components/atoms/BgRandomAnimation/BgRandomAnimation";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Frame>
        <Header />
        <PageTransition>
          <main className={s.main}>
            <div className={s.container}>{children}</div>
          </main>
        </PageTransition>
      </Frame>
    </>
  );
};

export default Layout;
