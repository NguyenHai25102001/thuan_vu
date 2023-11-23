import http from "../utils/http";
const problemByAgeApi = {
  getProblems: (data) => http.post(`/api/problems/month`, data),
};
export default problemByAgeApi;
