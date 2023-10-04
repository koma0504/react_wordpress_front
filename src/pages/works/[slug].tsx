import PageTitle from "@/components/atoms/PageTilet/PageTilet";
import CommImage from "@/components/atoms/image/CommImage";
import Layout from "@/components/templates/layout/Layout";
import usePostSwr from "@/hooks/swr/usePosSwr";
import PostService from "@/serivces/PostService";
import PostType from "@/type/PostType";
import { NextPage } from "next";

const Post: NextPage<{
  staticPost: PostType;
  slug: string;
}> = ({ staticPost, slug }) => {
  const post = usePostSwr({ id: slug, staticPost });
  console.log(post);
  return (
    <Layout>
      <PageTitle>works</PageTitle>
      <div>
        <PageTitle>{staticPost.title}</PageTitle>
        <p>{staticPost.category.name}</p>
        <CommImage
          wrapWidth="clamp(20vw, 560px, 40vw)"
          wrapHeight="100%"
          src={staticPost.featuredImage.url}
          alt={staticPost.featuredImage.url}
          width={staticPost.featuredImage.width}
          height={staticPost.featuredImage.height}
        />
        <p>{staticPost.content}</p>
      </div>
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
