export interface IProvince {
  id: number;
  ProvinceID: string;
  ProvinceName: string;
  CountryID: string;
  Code: string;
  NameExtension: string;
  IsEnable: string;
  RegionID: string;
  UpdatedBy: string;
  CanUpdateCOD: string;
  Status: string;
  PROVINCE_ID_VTP: string;
  PROVINCE_CODE_VTP: string;
  PROVINCE_NAME_VTP: string;
  created_at: string;
  updated_at: string;
}
export interface IDistrict {
  id: number;
  DistrictID: string;
  ProvinceID: string;
  DistrictName: string;
  Type: string;
  SupportType: string;
  NameExtension: string;
  CanUpdateCOD: string;
  Status: string;
  WhiteListClient: string;
  WhiteListDistrict: string;
  ReasonCode: string;
  ReasonMessage: string;
  OnDates: string;
  CreatedIP: string;
  CreatedEmployee: string;
  CreatedSource: string;
  UpdatedIP: string;
  UpdatedEmployee: string;
  UpdatedSource: string;
  DISTRICT_ID_VTP: string;
  DISTRICT_VALUE_VTP: string;
  DISTRICT_NAME_VTP: string;
  PROVINCE_ID_VTP: string;
  created_at: string;
  updated_at: string;
}
export interface IWard {
  id: number;
  WardCode: string;
  DistrictID: string;
  WardName: string;
  NameExtension: string;
  IsEnable: string;
  CanUpdateCOD: string;
  SupportType: string;
  Status: string;
  ReasonCode: string;
  ReasonMessage: string;
  WARDS_ID_VTP: string;
  WARDS_NAME_VTP: string;
  DISTRICT_ID_VTP: string;
  created_at: string;
  updated_at: string;
}
export interface IParamsAddAddress {
  id?: string | number;
  province_id: number | string;
  district_id: number | string;
  ward_id?: number | string;
  name: string;
  phone: string;
  address_detail: string;
  is_default: 0 | 1;
}
export interface IItemAddress {
  id: number;
  user_id: number;
  name: string;
  phone: string;
  province_id: number;
  district_id: number;
  ward_id: string;
  province_name: string;
  district_name: string;
  ward_name: string;
  address_detail: string;
  full_address: string;
  is_default: number;
  created_at: string;
  updated_at: string;
}
export interface IDefaultAddress {
  address: {
    id: number;
    user_id: number;
    name: string;
    phone: string;
    province_id: number;
    district_id: number;
    ward_id: string;
    province_name: string;
    district_name: string;
    ward_name: string;
    address_detail: string;
    full_address: string;
    is_default: number;
    created_at: string;
    updated_at: string;
  };
  fee_ship: number;
  code_unit: string;
}
