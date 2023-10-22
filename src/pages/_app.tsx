import { HoverContextProvider } from "@/components/atoms/HoverContextProvider";
import MouseStalker from "@/components/atoms/MouseStalker/MouseStalker";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HoverContextProvider>
        <MouseStalker />
        <Component {...pageProps} />
      </HoverContextProvider>
    </>
  );
}
