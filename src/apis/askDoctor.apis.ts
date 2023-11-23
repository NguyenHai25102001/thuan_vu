import http from "../utils/http";
const askDoctorApi = {
  getIncreaseViewsApi: (id: number) => http.get(`/api/question/add-view/${id}`),
  getQuesSimilar: (id: number) =>
    http.get(`/api/question/list-question-relate/${id}`),
  getMyQuesHome: () => http.get(`/api/question/list-my-question-home`),
  getAllMyQues: () => http.get(`/api/question/list-my-question`),
  getAllCategoryQues: () => http.get(`/api/question/list-category-all`),
  createQuestion: (fromdata) => http.post(`/api/question/create`, fromdata),
  chatGPTQues: (data) => http.post(`/api/question/chat-gpt-question`, data),
  getQuesByCategory: (id: number, page: number, data) =>
    http.post(`/api/question/list-question-category/${id}?page=${page}`, data),
  getQuesCategory: () => http.get(`/api/question/list-category`),
  getOutstandingQues: () => http.get(`/api/question/list-outstanding`),
  getAllQues: (page: number) => http.get(`/api/question/list-all?page=${page}`),
};
export default askDoctorApi;
