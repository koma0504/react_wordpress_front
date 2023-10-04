import useSWR from "swr";
import { WpGraphQlPostConst } from "../../constants/WpGraphQlConst";
import PostService from "@/serivces/PostService";
import PostType from "@/type/PostType";

const usePostSwr = ({
  id,
  staticPost,
}: {
  id: string;
  staticPost: PostType;
}) => {
  const { data: post } = useSWR(
    [WpGraphQlPostConst.list, id],
    (_: any, id: any) => PostService.getOne({ id }),
    { fallbackData: staticPost }
  );
  return post;
};

export default usePostSwr;
