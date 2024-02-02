import type { NextPage } from "next";
import s from "./Index.module.scss";
import Layout from "@/components/templates/layout/Layout";
import PageTitle from "@/components/atoms/PageTilet/PageTilet";
import { useEffect, useState } from "react";

const RandomImage = () => {
  const images = [
    "./img/top_image01.jpg",
    "./img/top_image02.jpg",
    "./img/top_image03.jpg",
  ];

  // ランダムに画像を選ぶ関数
  const getRandomImage = () => {
    return images[Math.floor(Math.random() * images.length)];
  };

  const [imageUrl, setImageUrl] = useState(getRandomImage());

  useEffect(() => {
    setImageUrl(getRandomImage());
  }, []);

  return <img className={s.top_image} src={imageUrl} alt="top_images" />;
};

const Home: NextPage = () => {
  return (
    <Layout>
      <RandomImage />
      <div className={s.top_title}>
        <PageTitle>心に刻むクリエイティブ</PageTitle>
      </div>
    </Layout>
  );
};

export default Home;
