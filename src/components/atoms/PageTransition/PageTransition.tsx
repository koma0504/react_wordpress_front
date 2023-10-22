import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Router } from "next/router";
import s from "./PageTransition.module.scss";
import { useHover } from "../HoverContextProvider";
export const PageTransition = ({ children }: { children: ReactNode }) => {
  const pageRef = useRef(null);
  const { setIsHovering } = useHover();

  useEffect(() => {
    const fadeIn = () => {
      gsap.fromTo(
        pageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power2.out" }
      );
    };

    const fadeOut = () => {
      gsap.to(pageRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      setIsHovering(false);
    };

    Router.events.on("routeChangeStart", fadeOut);
    Router.events.on("routeChangeComplete", fadeIn);

    fadeIn();

    return () => {
      Router.events.off("routeChangeStart", fadeOut);
      Router.events.off("routeChangeComplete", fadeIn);
    };
  }, []);

  return (
    <div className={s.page_transition} ref={pageRef}>
      {children}
    </div>
  );
};
