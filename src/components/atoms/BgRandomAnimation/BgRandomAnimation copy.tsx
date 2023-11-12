// components/RandomAnimation.js
import React, { useEffect, useState, useRef } from "react";
import s from "./BgRandomAnimation.module.scss";

export const BgRandomAnimation = () => {
  const [transform, setTransform] = useState("");
  const targetTransform = useRef({ translateX: 0, translateY: 0 });
  const currentTransform = useRef({ translateX: 0, translateY: 0 });

  const generateRandomTransform = () => {
    targetTransform.current = {
      translateX: Math.random() * 400 - 100,
      translateY: Math.random() * 400 - 100,
    };
  };

  const updateTransform = () => {
    const lerp = (start: number, end: number, alpha: number) =>
      (1 - alpha) * start + alpha * end;

    currentTransform.current = {
      translateX: lerp(
        currentTransform.current.translateX,
        targetTransform.current.translateX,
        0.01
      ),
      translateY: lerp(
        currentTransform.current.translateY,
        targetTransform.current.translateY,
        0.01
      ),
    };

    setTransform(
      `translate(${currentTransform.current.translateX}px, ${currentTransform.current.translateY}px)`
    );

    requestAnimationFrame(updateTransform);
  };

  useEffect(() => {
    generateRandomTransform();
    const intervalId = setInterval(generateRandomTransform, 8000);
    requestAnimationFrame(updateTransform);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div
        className={s.blur_circle_l}
        style={{
          transform,
        }}
      ></div>
    </>
  );
};
