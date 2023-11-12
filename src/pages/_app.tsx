import { HoverContextProvider } from "@/components/atoms/HoverContextProvider";
import MouseStalker from "@/components/atoms/MouseStalker/MouseStalker";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Cormorant_Garamond } from "next/font/google";
const CormorantGaramondFont = Cormorant_Garamond({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={CormorantGaramondFont.className}>
      <HoverContextProvider>
        <MouseStalker />
        <Component {...pageProps} />
      </HoverContextProvider>
    </div>
  );
}
