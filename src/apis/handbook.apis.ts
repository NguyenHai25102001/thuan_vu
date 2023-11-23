import http from "../utils/http";
import httpLieabon from "../utils/httpLineanBon";
const handbookApi = {
  getCateHanbook: (page: number) =>
    httpLieabon.get(`/api/handbook/category?page=${page}`),
  getCateHanbookSearch: (keySearch: string) => {
    let formData = new FormData();
    formData.append("key_search", keySearch);
    return httpLieabon.post(`/api/handbook/search`, formData);
  },
  getDetailHanbook: (id: number) =>
    httpLieabon.get(`/api/handbook/detail-category/${id}`),
  getArticleDetail: (id: number, page: number | string) =>
    httpLieabon.get(`/api/handbook/detail/${id}?page=${page}`),
};
export default handbookApi;
