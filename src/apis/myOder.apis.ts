import { SuccessResponse } from "./../types/utils.type";
import http from "../utils/http";
import { IMyOder } from "../types/myOder.types";

const myOderApi = {
  myOder: (status: number, page: number) => {
    let formData = new FormData();
    formData.append("status", String(status));
    return http.post<SuccessResponse<IMyOder>>(
      `/api/place-order-shop/my-order?page=${page}`,
      formData
    );
  },
  cancelOrder: (id: number) =>
    http.post(`/api/place-order-shop/cancel-order/${id}`),
};
export default myOderApi;
