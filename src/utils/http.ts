import axios, { AxiosError, AxiosInstance, HttpStatusCode } from "axios";
import {
  clearLS,
  getAccessTokenFromLS,
  saveAccsessTokenToLS,
  saveExpireTokenToLS,
  saveProfileToLS,
} from "./auth";
import path from "../constants/path";
import { AuthResponse } from "../types/auth.type";
import { API_URL } from "../constants/utils";
class Http {
  instance: AxiosInstance;
  private accessToken: string;
  constructor() {
    this.accessToken = getAccessTokenFromLS();
    console.log("this.accessToken", this.accessToken);
    this.instance = axios.create({
      baseURL: API_URL,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken) {
          config.headers.Authorization = "Bearer" + this.accessToken;
          return config;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    //add a response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config;
        console.log(url);

        if (url === path.login) {
          const data = response.data as AuthResponse;
          this.accessToken = (response.data as AuthResponse).data?.token;
          saveProfileToLS(data.data.user);
          saveExpireTokenToLS(data.data.expires_in);
          saveAccsessTokenToLS(this.accessToken);
        } else if (url === path.logout) {
          this.accessToken = "";
          clearLS();
        }
        return response;
      },
      function (error: AxiosError) {
        return Promise.reject(error);
      }
    );
  }
}
const http = new Http().instance;
export default http;
