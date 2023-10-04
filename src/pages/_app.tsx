import { BgImgProvider } from "@/components/atoms/BgImgProvider";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <BgImgProvider>
        <Component {...pageProps} />
      </BgImgProvider>
    </>
  );
}
