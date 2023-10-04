import useSWR from "swr";
import { WpGraphQlPostConst } from "../../constants/WpGraphQlConst";
import PostService from "@/serivces/PostService";
import PostOnListType from "@/type/PostOnListType";

const usePostListSwr = (staticPostList: PostOnListType[]) => {
  const { data: postList } = useSWR(
    WpGraphQlPostConst.list,
    PostService.getList,
    { fallbackData: staticPostList }
  );
  return postList;
};

export default usePostListSwr;
