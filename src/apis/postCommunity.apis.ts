import { omitBy } from "lodash";
import {
  CommenPostCommunityConfig,
  CommentPost,
  GetCommentCommunityConfig,
  IParamsUploadPost,
  ItemPostCommunity,
  PostCommunityConfig,
  TLikeCommunityConfig,
  TVideoCommunity,
} from "./../types/community.type";
// import { AuthResponse } from "../types/auth.type";
import { PostCommunity } from "../types/community.type";
import { SuccessResponse } from "../types/utils.type";
import http from "../utils/http";
const communityApi = {
  getPostCommunity: (params: PostCommunityConfig) =>
    http.get<SuccessResponse<PostCommunity>>(`/api/social/new`, {
      params,
    }),
  getCommentBlog: (params: GetCommentCommunityConfig) => {
    return http.get<SuccessResponse<CommentPost>>(
      `/api/social/get-comment/${params.id}/${params.type}?page=${params.page}`
    );
  },
  commentPost: (params: CommenPostCommunityConfig) => {
    let formData = new FormData();
    formData.append("new_id", params.id.toString());
    formData.append("type", params.type.toString());
    formData.append("comment", params.comment);
    return http.post("/api/social/comment", formData);
  },
  getVideoBlog: (params: PostCommunityConfig) =>
    http.get<SuccessResponse<TVideoCommunity>>("/api/social/new-video", {
      params,
    }),
  likeCommunity: (params: TLikeCommunityConfig) => {
    let formData = new FormData();
    formData.append("id_blog", params.id.toString());
    formData.append("type_blog", params.type.toString());
    return http.post("/api/social/wishlist-new", formData);
  },
  upLoadPost: (param: IParamsUploadPost) => {
    let formData = new FormData();
    formData.append("title", param.title);
    formData.append("content", param.content);
    formData.append("category_id", param.categoryId.toString());
    // params.image.forEach((item) => {
    formData.append("img[]", param.image);
    // });
    return http.post("api/social/create-new", formData);
  },
};
export default communityApi;
