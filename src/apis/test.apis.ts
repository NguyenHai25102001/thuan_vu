// import { AuthResponse } from "../types/auth.type";
import http from "../utils/http";
const testApi = {
  getApi: () => http.get("/api/question/list-category"),
};
export default testApi;
