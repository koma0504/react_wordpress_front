// components/MouseStalker.tsx
import React, { useEffect, useState, useRef } from "react";
import s from "./MouseStalker.module.scss";
import { useHover } from "../HoverContextProvider";

const MouseStalker: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [renderPosition, setRenderPosition] = useState({ x: 0, y: 0 });
  const { isHovering } = useHover();
  const animationFrameId = useRef<number | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const updatePosition = () => {
    const dx = (position.x - renderPosition.x) * 0.4;
    const dy = (position.y - renderPosition.y) * 0.4;
    setRenderPosition((prevPosition) => ({
      x: prevPosition.x + dx,
      y: prevPosition.y + dy,
    }));
    animationFrameId.current = requestAnimationFrame(updatePosition);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
      animationFrameId.current = requestAnimationFrame(updatePosition);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        if (animationFrameId.current !== null) {
          cancelAnimationFrame(animationFrameId.current);
        }
      };
    }
  });

  return (
    <div
      className={`${s.mouse_stalker} ${isHovering ? s.hover : ""}`}
      style={{
        transform: `translate(-50%, -50%) translate3d(${renderPosition.x}px, ${renderPosition.y}px, 0)`,
      }}
    >{`${isHovering ? "click" : ""}`}</div>
  );
};

export default MouseStalker;
