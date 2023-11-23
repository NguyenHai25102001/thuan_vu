import { BabyInfo, HealthyBaby, UserProfile } from "./../types/baby.type";
import http from "../utils/http";
import { SuccessResponse } from "../types/utils.type";
import { IListPointsBrand, ITemPointBrand } from "../types/brand.type";
const brandApi = {
  getListPointBrand: () =>
    http.get<SuccessResponse<ITemPointBrand>>(`/api/get-list-points-brand`),
};
export default brandApi;
