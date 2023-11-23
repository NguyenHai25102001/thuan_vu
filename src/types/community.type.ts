import { SuccessResponse } from "./utils.type";

export type PostCommunity = {
  data: {
    category_id: number;
    category_name: string;
    content: string;
    created_at: string;
    id: number;
    img: {
      created_at: string;
      id: number;
      new_id: number;
      updated_at: string;
      url_image: string;
    }[];
    is_active: number;
    is_experts: number;
    is_follow: number;
    is_wishlist: number;
    number_comment: number;
    number_like: number;
    number_share: number;
    title: string;
    updated_at: string;
    user_avatar: string;
    user_id: number;
    user_name: string;
  }[];
  last_page: number;
  current_page: number;
};
export type ItemPostCommunity = {
  category_id: number;
  category_name: string;
  content: string;
  created_at: string;
  id: number;
  img: {
    created_at: string;
    id: number;
    new_id: number;
    updated_at: string;
    url_image: string;
  }[];
  is_active: number;
  is_experts: number;
  is_follow: number;
  is_wishlist: number;
  number_comment: number;
  number_like: number;
  number_share: number;
  title: string;
  updated_at: string;
  user_avatar: string;
  user_id: number;
  user_name: string;
};
export interface PostCommunityConfig {
  page?: number | string;
}
export interface GetCommentCommunityConfig {
  page?: number | string;
  id?: number;
  type?: number;
}
export interface CommenPostCommunityConfig {
  id?: number;
  type?: number;
  comment?: string;
}
export interface CommentPost {
  last_page: number;
  data: TCommenPost[];
}
export interface TCommenPost {
  comment: string;
  created_at: string;
  id: number;
  new_id: number;
  type: string;
  updated_at: string;
  user_avatar: string | null;
  user_id: number;
  user_name: string | null;
}

export interface TVideoCommunity {
  last_page: number;
  data: TItemVideoCommunity[];
}
export interface TItemVideoCommunity {
  id: number;
  user_id: number;
  title: string;
  content: string;
  category_id: number;
  number_like: number;
  number_comment: number;
  number_share: number;
  is_active: number;
  point: number;
  status: number;
  status_name: string;
  url_video: string;
  poster: string;
  created_at: string;
  updated_at: string;
  user_name: string;
  user_avatar: string | null;
  category_name: string;
  is_wishlist: number;
}
export interface TLikeCommunityConfig {
  id: number | string;
  type: number;
}
export interface IParamsUploadPost {
  title: string;
  content: string;
  image?: any;
  categoryId: number;
}
