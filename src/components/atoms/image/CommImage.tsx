// component
import Image from "next/image";
import s from "./CommImage.module.scss";

const CommImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className={s.image_contaner}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
};

export default CommImage;
