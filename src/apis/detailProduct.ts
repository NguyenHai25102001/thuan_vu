import { ISuccessProductDetail } from "../types/detailProduct.types";
import http from "../utils/http";
const detailProductApi = {
  getDetailProduct: (id: number) =>
    http.get<ISuccessProductDetail>(`/api/product/${id}`),
};

export default detailProductApi;
