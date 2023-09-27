import type { NextPage } from "next";
// hooks
import usePostListSwr from "../hooks/swr/usePostListSwr";
// component
import PostBox from "../components/molecules/PostBox";
import PostType from "@/type/PostType";
import PostService from "@/serivces/PostService";
import s from "./Index.module.scss";
import Layout from "@/components/templates/layout/Layout";
import PageTitle from "@/components/atoms/PageTilet/PageTilet";
const Home: NextPage<{
  staticPostList: PostType[];
}> = ({ staticPostList }) => {
  const postList = usePostListSwr(staticPostList);
  return (
    <>
      <Layout>
        <div className={s.container}>
          {postList!.map((post) => {
            return (
              <div key={post.id}>
                <PostBox post={post} />
              </div>
            );
          })}
        </div>
        <PageTitle>home</PageTitle>
        <p className={s.px}>px</p>
        <p className={s.em}>em</p>
        <p className={s.rem}>rem</p>
        {/* <p>
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
        <p>サンプルテキストsampletextさんぷるてきすと漢字漢字</p> */}
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
