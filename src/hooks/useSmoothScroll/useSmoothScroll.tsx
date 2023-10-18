// smoothScroll.js
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const smoothScrollTo = (position: any) => {
  gsap.to(window, {
    scrollTo: { y: position, autoKill: false },
    duration: 1,
    ease: "power2.out",
  });
};

// 他のコンポーネントでの使用方法
// import { smoothScrollTo } from './smoothScroll';
// ...
// smoothScrollTo(500);
