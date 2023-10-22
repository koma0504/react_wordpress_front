import Frame from "@/components/organisms/frame/Frame";
import Header from "@/components/organisms/header/Header";
import { ReactNode } from "react";
import s from "./Layout.module.scss";
import { PageTransition } from "@/components/atoms/PageTransition/PageTransition";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Frame>
        <Header />
        <PageTransition>
          <main className={s.main}>
            <div className={s.container}>{children}</div>
          </main>
          {/* <Footer /> */}
        </PageTransition>
      </Frame>
    </>
  );
};

export default Layout;
