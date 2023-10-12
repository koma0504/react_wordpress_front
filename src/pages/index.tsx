import type { NextPage } from "next";
import s from "./Index.module.scss";
import Layout from "@/components/templates/layout/Layout";
import PageTitle from "@/components/atoms/PageTilet/PageTilet";
const Home: NextPage = () => {
  return (
    <Layout>
      <div>
        <PageTitle>我々は宇宙人</PageTitle>
      </div>
    </Layout>
  );
};

export default Home;
