/* eslint-disable prettier/prettier */
export interface BlogModel {
  id: number;
  title: string;
  content?: string | null;
  image?: string | null;
  category_id: number;
  age: number;
  description: string | null;
  publish: string;
  created_at?: string | null;
  updated_at?: string | null;
  user_id?: string | number;
}

export interface Image {
  id: number;
  new_id: number;
  url_image: string;
  created_at: string;
  updated_at: string;
}

export interface BlogNewFeedModel {
  id: number;
  title: string;
  content?: string | null;
  img?: Array<Image> | null;
  category_id: number;
  age: number;
  description: string | null;
  publish: string;
  created_at?: string | null;
  updated_at?: string | null;
  user_name?: string;
  user_avatar?: string;
  number_like?: number;
  number_share?: number;
  number_comment?: number;
  url_video?: string;
  is_wishlist?: number;
  category_name?: string;
  is_experts?: number | string;
  is_follow?: number | string;
  user_id?: number | string;
}

export interface BlogHomePageModel {
  blogs: BlogModel[];
  current_page: number;
  total: number;
  total_page: number;
}

export interface ListBlogModel {
  blogs: BlogHomePageModel;
  // data?: BlogModel[];
  current_page: number;
  total: number;
  last_page: number;
}

export interface CreateBlogModel {
  message: string;
  status: number;
}

export interface ItemComment {
  comment: string;
  created_at: string;
  id: number;
  new_id: number;
  type: string;
  user_avatar: string;
  user_id: number;
  user_name: string;
}

export interface DataCommentObject {
  current_page?: number;
  last_page?: number;
  data: Array<ItemComment>;
}

export interface ListCommentModel {
  data: DataCommentObject;
  current_page: number;
  total: number;
  last_page: number;
  status: number;
  message: string;
  code: number;
}

export interface BlogParamsModel {
  page?: number;
  age?: number;
  category?: number;
}

export interface BlogNewFeedParamsModel {
  page?: number;
}

export interface Img {
  name: string;
  type: string;
  uri: string;
}

export interface VideoObject {
  name: string;
  type: string;
  uri: string;
}

export interface PostParamsModel {
  title: string;
  content: string;
  image?: any;
  video?: VideoObject;
  category_id?: number;
}

export interface ReactionBlogParams {
  idBlog?: number;
  typeBlog?: number; // 1: bai viet, 2: video
  page?: number;
  comment?: string;
}
export interface ListToyModel {
  current_page: number;
  total: number;
  total_page: number;
  toy: ToyModel[];
}
export interface ToyModel {
  id: number;
  name: string;
  image: string;
  age: number;
  category_id: number;
  place_id: number;
  links: string;
  month: number;
}
export interface LessonUpdateLikeModel {
  isLiked: boolean | 0 | 1;
  user_profile_id: number;
  date: string;
  lesson_id: number;
  category_id: number;
  updated_at: string;
  created_at: string;
  id: number;
}
