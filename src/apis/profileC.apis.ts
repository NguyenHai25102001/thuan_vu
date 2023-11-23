import { TVideoCommunity } from "./../types/community.type";
import { SuccessResponse } from "./../types/utils.type";
import http from "../utils/http";
import {
  BabyModel,
  BabyUpdateModel,
  CreateBabyConfig,
  IBaby,
  IRBaby,
  PRMODEL,
} from "../types/user.type";
const profileApi = {
  getUserProfile: () => http.get<SuccessResponse<IRBaby>>("/api/userProfile"),
  createBaby: (params: CreateBabyConfig) =>
    http.post<SuccessResponse<BabyModel>>("/api/userProfile/create", params),
  editBaby: (id: string, params: BabyUpdateModel) =>
    http.put<SuccessResponse<PRMODEL>>(`/api/userProfile/update/${id}`, params),
  deleteBaby: (id: string) => http.delete(`/api/userProfile/delete/${id}`),
};
export default profileApi;
