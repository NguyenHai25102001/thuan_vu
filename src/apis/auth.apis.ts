// import { AuthResponse } from "../types/auth.type";
import http from "../utils/http";
const authApi = {
  login: (body: { phone: string }) =>
    http.post("/api/login-zalo-miniapp", body),
  logout: () => http.post("/api/logout"),
};
export default authApi;
