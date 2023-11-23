import http from "../utils/http";
const detailProblemApi = {
  getDetailProblem: (id: number) => http.get(`/api/problems/detail/${id}`),
  getListQuesProblem: (page: number | string, id: number) => {
    let formData = new FormData();
    formData.append("problem_detail_id", String(id));
    return http.post(`/api/problems/list-question?page=${page}`, formData);
  },
  createQuesProblem: (data) => http.post(`/api/problems/create-question`, data),
  getProblemList: () => http.get(`/api/problems/list`),
  // getProblemListMonth: () => http.get(`/api/problems_common/month`),
  getProblemListMonth: (page: number | string, id: number) => {
    let formData = new FormData();
    formData.append("month", String(id));
    return http.post(`/api/problems_common/month?page=${page}`, formData);
  },
  getDetailProblemListPost: (id: number) =>
    http.get(`/api/problems_common/list/${id}`),
  getDetailPostProblem: (id: number) =>
    http.get(`/api/problems_common/detail/${id}`),
  getProductWithSearch: (keySearch: string) => {
    let formData = new FormData();
    formData.append("key_search", keySearch);
    return http.post(`/api/problems/search`, formData);
  },
  getProductWithSearchKey: (keySearch: string, month: string) => {
    let formData = new FormData();
    formData.append("key_search", keySearch);
    formData.append("month", month);
    return http.post(`/api/problems_common/search`, formData);
  },
};
export default detailProblemApi;
