import { gsap } from "gsap";
import React, { ReactNode, useEffect, useRef } from "react";

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const progress =
          window.scrollY / (document.body.scrollHeight - window.innerHeight);
        gsap.to(containerRef.current, {
          y:
            -progress *
            (containerRef.current.scrollHeight - window.innerHeight),
          ease: "none",
          duration: 0.5,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="aa" ref={containerRef}>
      {children}
    </div>
  );
};

export default SmoothScroll;
