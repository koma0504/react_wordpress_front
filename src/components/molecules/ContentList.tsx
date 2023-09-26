import { ReactNode } from "react";
import PageSubTitle from "../atoms/PageSubTitle/PageSubTitle";
import PageText from "../atoms/PageText/PageText";

const ContentList = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <PageSubTitle>{children}</PageSubTitle>
      <PageText>{children}</PageText>
    </>
  );
};

export default ContentList;
