import { useImageContext } from "@/components/atoms/BgImgProvider";
import PageTitle from "@/components/atoms/PageTilet/PageTilet";
import Layout from "@/components/templates/layout/Layout";
import usePostListSwr from "@/hooks/swr/usePostListSwr";
import PostService from "@/serivces/PostService";
import Link from "next/link";
import s from "./works.module.scss";
import PostOnListType from "@/type/PostOnListType";
import CommImage from "@/components/atoms/image/CommImage";
import { useHover } from "@/components/atoms/HoverContextProvider";

const Works = ({ staticPostList }: { staticPostList: PostOnListType[] }) => {
  const postList = usePostListSwr(staticPostList);
  const { setBackgroundImage } = useImageContext();
  console.log(postList);
  const { setIsHovering } = useHover();

  return (
    <Layout>
      <PageTitle>works</PageTitle>
      <ul className={s.work_list}>
        {postList!.map((post) => {
          return (
            <li
              className={s.work_item}
              key={post.id}
              // onMouseOver={() => {
              //   setBackgroundImage(post.featuredImage.url);
              // }}
              // onMouseOut={() => {
              //   setBackgroundImage("");
              // }}
            >
              <Link
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                href={`/works/${encodeURIComponent(post.slug)}`}
              >
                <h2 className={s.work_title}>{post.title}</h2>
                <CommImage
                  wrapWidth="100%"
                  wrapHeight="100%"
                  src={post.featuredImage.url}
                  alt={post.featuredImage.url}
                  width={post.featuredImage.width}
                  height={post.featuredImage.height}
                />
                <p className={s.category}>{post.category.name}</p>
                <div className={s.tag_list}>
                  {post.tags.map((tag: any, index: number) => {
                    return (
                      <span className={s.tag} key={index}>
                        {tag.node.name},
                      </span>
                    );
                  })}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
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
export default Works;
