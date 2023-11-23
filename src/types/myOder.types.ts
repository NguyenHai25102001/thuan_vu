import { IProductShop } from "./shop.types";

export interface IMyOder {
  last_page: number;
  data: IDataMyOrder[];
}
export interface IDataMyOrder {
  id: number;
  code_order: string;
  user_id: number;
  name: string;
  phone: string;
  province_id: number;
  district_id: number;
  ward_id: string;
  address_detail: string;
  full_address: string;
  transport_name: string;
  order_code_transport: string;
  fee_shipping: number;
  money_use_voucher: number;
  total_money_product: number;
  total_money: number;
  status: number;
  created_at: string;
  updated_at: string;
  order_item: IOrderItem[];
  status_name: string;
}
export interface IOrderItem {
  id: number;
  order_id: number;
  product_id: number;
  product_variant_id: number;
  combo_id: null;
  quantity: number;
  money_base: number;
  money: number;
  total_money: number;
  created_at: string;
  updated_at: string;
  product: IProductMyOder;
  product_variant: IProductVariantMyOrder;
  combo: IProductComboMyOrder;
}

export interface IProductMyOder {
  id: number;
  name: string;
  id_sectors: number;
  name_sectors: string;
  id_group_goods: number;
  name_group_goods: string;
  id_category_kiotviet: number;
  id_product_kiotviet: number;
  id_shop_kiotviet: number;
  describe: string;
  image: string;
  money_base: number;
  money: number;
  inventory_number: number;
  quantity_sold: number;
  date_end: string;
  unit: string;
  type: number;
  created_at: string;
  updated_at: string;
}
export interface IProductVariantMyOrder {
  id: number;
  product_id: number;
  name: string;
  money_base: number;
  money: number;
  created_at: string;
  updated_at: string;
}
export interface IProductComboMyOrder {
  id: number;
  product_id: number;
  money_base: number;
  money: number;
  created_at: string;
  updated_at: string;
  data_product: {
    id: number;
    combo_id: number;
    product_id: number;
    created_at: string;
    updated_at: string;
  }[];
}
