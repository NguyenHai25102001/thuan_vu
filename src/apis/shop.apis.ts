import { SuccessResponse } from "./../types/utils.type";
import http from "../utils/http";
import {
  ICategoryShop,
  IDataByIdSector,
  IProductShop,
} from "../types/shop.types";

const shopApi = {
  getDataShop: () => http.get("/api/shop"),
  getCategoryShop: () =>
    http.get<SuccessResponse<ICategoryShop[]>>("/api/sectors"),
  getCategoryShopTwo: (id: number) =>
    http.get<SuccessResponse<ICategoryShop[]>>(`/api/group-goods/${id}`),
  getProductByCategory: (id: number) => {
    let formData = new FormData();
    formData.append("id_group_goods", String(id));
    return http.post<SuccessResponse<IProductShop[]>>(
      "/api/group-goods/product",
      formData
    );
  },
  getProductBuyIdSector: (id: number, page: number) =>
    http.get<SuccessResponse<IDataByIdSector>>(
      `/api/shopping_list/product/${id}?page=${page}`
    ),
  searchProduct: (keySearch: string, page: number) => {
    let formData = new FormData();
    formData.append("key_search", keySearch);
    return http.post<SuccessResponse<IDataByIdSector>>(
      `/api/product-search?page=${page}`,
      formData
    );
  },
  getDataAll: (id: number, page: number) =>
    http.get(`/api/product-shop-all/${id}?page=${page}`),

  getTopProduct: (page: number) =>
    http.get<SuccessResponse<IDataByIdSector>>(`/api/product-top?page=${page}`),
  getFlashSaleProduct: () =>
    http.get<SuccessResponse<IProductShop[]>>(`/api/product-flash-sale`),
};
export default shopApi;
