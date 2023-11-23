import { SuccessResponse } from "../types/utils.type";
import http from "../utils/http";
import {
  IDefaultAddress,
  IDistrict,
  IItemAddress,
  IParamsAddAddress,
  IProvince,
  IWard,
} from "../types/address.types";
const addressApi = {
  getProvince: () =>
    http.get<SuccessResponse<IProvince[]>>(
      `/api/address_shipping/get_province`
    ),
  getDistrict: (province_id: number | string) => {
    let formData = new FormData();
    formData.append("province_id", province_id.toString());
    return http.post<SuccessResponse<IDistrict[]>>(
      "/api/address_shipping/get_district",
      formData
    );
  },
  getWard: (district_id: number | string) => {
    let formData = new FormData();
    formData.append("district_id", district_id.toString());
    return http.post<SuccessResponse<IWard[]>>(
      "/api/address_shipping/get_ward",
      formData
    );
  },
  addAdress: (params: IParamsAddAddress) => {
    let formData = new FormData();
    formData.append("province_id", String(params.province_id));
    formData.append("district_id", String(params.district_id));
    formData.append("ward_id", String(params.ward_id));
    formData.append("name", String(params.name));
    formData.append("phone", String(params.phone));
    formData.append("address_detail", String(params.address_detail));
    formData.append("is_default", String(params.is_default));
    return http.post("/api/address_shipping/add_address_shipping", formData);
  },
  editAddress: (params: IParamsAddAddress) => {
    let formData = new FormData();
    formData.append("id", String(params.id));
    formData.append("province_id", String(params.province_id));
    formData.append("district_id", String(params.district_id));
    formData.append("ward_id", String(params.ward_id));
    formData.append("name", String(params.name));
    formData.append("phone", String(params.phone));
    formData.append("address_detail", String(params.address_detail));
    formData.append("is_default", String(params.is_default));
    return http.post("/api/address_shipping/edit_address_shipping", formData);
  },
  getListAddress: () =>
    http.get<SuccessResponse<IItemAddress[]>>(
      "/api/address_shipping/list_address_shipping"
    ),
  deleteAddress: (id: number) => {
    let formData = new FormData();
    formData.append("id", String(id));
    return http.post("/api/address_shipping/delete_address_shipping", formData);
  },
  defaultAddressAndFeeShip: () =>
    http.get<SuccessResponse<IDefaultAddress>>(
      "/api/address_shipping/address_default"
    ),
};
export default addressApi;
