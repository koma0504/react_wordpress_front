import type { NextPage } from "next";
// hooks
import usePostListSwr from "../hooks/swr/usePostListSwr";
// component
import PostBox from "../components/molecules/PostBox";
import PostType from "@/type/PostType";
import PostService from "@/serivces/PostService";
import s from "./Index.module.scss";
import Frame from "@/components/organisms/frame/Frame";
import Header from "@/components/organisms/header/Header";
import Layout from "@/components/templates/layout/Layout";
import PageTitle from "@/components/atoms/PageTilet/PageTilet";
const Home: NextPage<{
  staticPostList: PostType[];
}> = ({ staticPostList }) => {
  const postList = usePostListSwr(staticPostList);
  return (
    <>
      <Layout>
        {/* <div className={Index.container}>
            {postList!.map((post) => {
              return (
                <div
                  key={post.id}
                  className="w-1/3 pr-4 pb-4 [&:nth-of-type(3n)]:pr-0"
                >
                  <PostBox post={post} />
                </div>
              );
            })}
          </div> */}
        <PageTitle>home</PageTitle>
        <p>
          サンプルテキストsampletextさんぷるてきすと漢字漢字
          <br />
          サンプルテキストsampletextさんぷるてきすと漢字漢字サンプルテキストsampletextさんぷるてきすと漢字漢字サンプルテキストsampletextさんぷるてきすと漢字漢字サンプルテキストsampletextさんぷるてきすと漢字漢字サンプルテキストsampletextさんぷるてきすと漢字漢字サンプルテキストsampletextさんぷるてきすと漢字漢字サンプルテキストsampletextさんぷるてきすと漢字漢字サンプルテキストsampletextさんぷるてきすと漢字漢字サンプルテキストsampletextさんぷるてきすと漢字漢字サンプルテキストsampletextさんぷるてきすと漢字漢字サンプルテキストsampletextさんぷるてきすと漢字漢字サンプルテキストsampletextさんぷるてきすと漢字漢字サンプルテキストsampletextさんぷるてきすと漢字漢字サンプルテキストsampletextさんぷるてきすと漢字漢字サンプルテキストsampletextさんぷるてきすと漢字漢字サンプルテキストsampletextさんぷるてきすと漢字漢字サンプルテキストsampletextさんぷるてきすと漢字漢字サンプルテキストsampletextさんぷるてきすと漢字漢字サンプルテキストsampletextさんぷるてきすと漢字漢字サンプルテキストsampletextさんぷるてきすと漢字漢字サンプルテキストsampletextさんぷるてきすと漢字漢字
        </p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const staticPostList = await PostService.getList();
  return {
    props: {
      staticPostList: staticPostList,
    },
    revalidate: 10,
  };
}

export default Home;
