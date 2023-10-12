import CommImage from "@/components/atoms/image/CommImage";
import Layout from "@/components/templates/layout/Layout";
import usePostSwr from "@/hooks/swr/usePosSwr";
import PostService from "@/serivces/PostService";
import PostType from "@/type/PostType";
import { NextPage } from "next";
import s from "./slug.module.scss";

const Post: NextPage<{
  staticPost: PostType;
  slug: string;
}> = ({ staticPost, slug }) => {
  const post = usePostSwr({ id: slug, staticPost });
  console.log("post", post);
  return (
    <Layout>
      <div className={s.header}>
        <p className={s.title}>{staticPost.title}</p>
        <p className={s.category}>{staticPost.category.name}</p>
        <div className={s.tag_list}>
          {staticPost.tags.map((tag: any, index: number) => {
            return (
              <span className={s.tag} key={index}>
                {tag.node.name},
              </span>
            );
          })}
        </div>
        <CommImage
          wrapWidth="100%"
          wrapHeight="fit-content"
          src={staticPost.featuredImage.url}
          alt={staticPost.featuredImage.url}
          width={staticPost.featuredImage.width}
          height={staticPost.featuredImage.height}
        />
      </div>

      <div
        className={s.wp_content}
        dangerouslySetInnerHTML={{ __html: staticPost!.content }}
      ></div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = await PostService.getAllSulgList();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const slug = params.slug;
  const staticPost = await PostService.getOne({ id: slug });
  if (!staticPost) {
    return { notFound: true };
  }
  return {
    props: { staticPost, slug },
    revalidate: 10,
  };
}
export default Post;
