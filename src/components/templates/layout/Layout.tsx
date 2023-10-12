import Frame from "@/components/organisms/frame/Frame";
import Header from "@/components/organisms/header/Header";
import { ReactNode } from "react";
import s from "./Layout.module.scss";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Frame>
      <Header />
      <main className={s.main}>
        <div className={s.container}>{children}</div>
      </main>
      {/* <Footer /> */}
    </Frame>
  );
};

export default Layout;
