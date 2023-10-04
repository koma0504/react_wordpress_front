// component
import Image from "next/image";
import s from "./CommImage.module.scss";
import React from "react";

interface imageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  wrapWidth: string;
  wrapHeight: string;
}

const CommImage: React.FC<imageProps> = ({
  src,
  alt,
  width,
  height,
  wrapWidth,
  wrapHeight,
}) => {
  return (
    <div
      style={{ width: wrapWidth, height: wrapHeight }}
      className={s.image_contaner}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default CommImage;
