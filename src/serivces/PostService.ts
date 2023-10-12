import PostType from "@/type/PostType";
import RepositoryFactory from "../repositories/RepositoryFactory";
import PostOnListType from "@/type/PostOnListType";

class PostService {
  static async getList(): Promise<PostOnListType[]> {
    try {
      const res = await RepositoryFactory.post.getList();
      return res.data.data.posts.edges.map((data: any) => {
        const post: PostOnListType = {
          id: data.node.id,
          title: data.node.title,
          slug: data.node.slug,
          date: data.node.date,
          excerpt: data.node.excerpt,
          featuredImage: {
            url: data.node.featuredImage.node.sourceUrl,
            width: data.node.featuredImage.node.mediaDetails.width,
            height: data.node.featuredImage.node.mediaDetails.height,
          },
          category: {
            slug: data.node.categories.edges[0].node.slug,
            name: data.node.categories.edges[0].node.name,
          },
          tags: data.node.tags.edges,
        };
        return post;
      });
    } catch {
      return [];
    }
  }
  static async getOne({ id }: { id: string }): Promise<PostType | null> {
    try {
      const res = await RepositoryFactory.post.getOne({ id });
      const data = res.data.data.post;
      const post: PostType = {
        id: data.id,
        title: data.title,
        slug: data.slug,
        date: data.date,
        content: data.content,
        featuredImage: {
          url: data.featuredImage.node.sourceUrl,
          width: data.featuredImage.node.mediaDetails.width,
          height: data.featuredImage.node.mediaDetails.height,
        },
        category: {
          slug: data.categories.edges[0].node.slug,
          name: data.categories.edges[0].node.name,
        },
        tags: data.tags.edges,
      };
      return post;
    } catch {
      throw Error("Error");
    }
  }
  static async getAllSulgList(): Promise<{ params: { slug: string } }[]> {
    try {
      const res = await RepositoryFactory.post.getAllSulgList();
      return res.data.data.posts.edges.map((data: any) => {
        return { params: { slug: data.node.slug } };
      });
    } catch {
      return [];
    }
  }
}

export default PostService;
