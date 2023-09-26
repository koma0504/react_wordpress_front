import useSWR from "swr";
import { WpGraphQlPostConst } from "../../constants/WpGraphQlConst";
import PostType from "@/type/PostType";
import PostService from "@/serivces/PostService";

const usePostListSwr = (staticPostList: PostType[]) => {
  const { data: postList } = useSWR(
    WpGraphQlPostConst.list,
    PostService.getList,
    { fallbackData: staticPostList }
  );
  return postList;
};

export default usePostListSwr;
