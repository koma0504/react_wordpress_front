import { WpGraphQlPostConst } from "@/constants/WpGraphQlConst";
import Repository from "./Repository";

class PostRepository {
  static getList() {
    return Repository(WpGraphQlPostConst.list).getWp();
  }
  static getOne({ id }: { id: string }) {
    return Repository(WpGraphQlPostConst.one, { variables: { id } }).getWp();
  }
  static getAllSulgList() {
    return Repository(WpGraphQlPostConst.allSulagList).getWp();
  }
}

export default PostRepository;
