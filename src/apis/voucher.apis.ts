import { SuccessResponse } from "../types/utils.type";
import { IVoucher } from "../types/voucher.type";
import http from "../utils/http";
const voucherApi = {
  getPoint: () => http.get(`/api/users/get-point`),
  getProgramVocher: (page: number | string) =>
    http.get(`/api/voucher-program?page=${page}`),
  getMyVoucher: (page: number | string) =>
    http.get<SuccessResponse<IVoucher>>(`/api/voucher_my?page=${page}`),
  exchangePoints: (data) => http.post(`/api/voucher_my/exchange_points`, data),
  checkVoucher: (id) => {
    let formData = new FormData();
    formData.append("voucher_id", id);
    return http.post("/api/voucher_my/use_voucher", formData);
  },
};
export default voucherApi;
