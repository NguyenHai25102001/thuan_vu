// import { AuthResponse } from "../types/auth.type";
import {
  BlogHomePageModel,
  LessonUpdateLikeModel,
  ListBlogModel,
  ListToyModel,
} from "../types/blogs.type";
import {
  HistoryStatusLessonParams,
  HistoryStatusModel,
  IBannerHome,
  IPointModel,
  LessonHomeModels,
  LessonModel,
  LessonUpdateStatusModel,
  ListShoppingHome,
} from "../types/home.type";
import { SuccessResponse } from "../types/utils.type";
import http from "../utils/http";
import httpLieabon from "../utils/httpLineanBon";
const homeApi = {
  getBannerHome: () =>
    http.get<SuccessResponse<IBannerHome[]>>("/api/banner-mini-app"),
  getPointHome: () =>
    http.get<SuccessResponse<IPointModel>>("/api/users/get-point"),
  getLessonHome: (id: number | string) =>
    http.get<SuccessResponse<LessonHomeModels>>(`/api/lessons/getLesson/${id}`),
  getHistoryStatus: (params: HistoryStatusLessonParams) =>
    http.post<SuccessResponse<HistoryStatusModel>>("/api/status/new", params),
  getDetailLessonHome: (id: string | number) =>
    http.get<SuccessResponse<LessonModel>>(`/api/lessons/${id}`),
  getDetailLessonHomeVideo: (id: string | number) =>
    httpLieabon.get<SuccessResponse<LessonModel>>(`/api/lessons/${id}`),
  updateStatusLesson: (
    course_id: number | string,
    baby_id: number | string,
    status: "completed" | "easily" | "hard",
    time: string
  ) => {
    const body = {
      status,
      user_profile_id: baby_id,
      time,
    };
    return http.post<SuccessResponse<LessonUpdateStatusModel>>(
      `/api/status/create/${course_id}`,
      body
    );
  },
  getBlogs: (params: { category?: number; page?: number; age?: number }) =>
    http.get<SuccessResponse<BlogHomePageModel>>("api/blogs", {
      params,
    }),
  getToyByMonth: (age: number) => {
    const params = {
      type: "months",
      age,
    };
    return http.get<SuccessResponse<ListToyModel>>("/api/toys", {
      params,
    });
  },
  likeLesson: (
    course_id: number | string,
    baby_id: number | string,
    isLiked: boolean | 0 | 1
  ) => {
    const body = {
      isLiked,
      user_profile_id: baby_id,
    };
    return http.post<SuccessResponse<LessonUpdateLikeModel>>(
      `/api/likes/create/${course_id}`,
      body
    );
  },
  listShoppingHome: () =>
    http.get<SuccessResponse<ListShoppingHome[]>>("/api/shopping_list"),
  caculateMoneyHome: () => http.get("/api/data_calculate_money"),
  infoPercentBaby: (params) => {
    let formData = new FormData();
    formData.append("user_profiles_id", params.user_profiles_id);
    formData.append("month", params.month);
    return http.post("/api/health-index/weight-height-who", formData);
  },
  getCategory: () =>
    http.get<SuccessResponse<{ id: number; name: string }[]>>("/api/category"),
};
export default homeApi;
