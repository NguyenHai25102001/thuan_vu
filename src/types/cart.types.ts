export interface ICart {
  id: number;
  user_id: number;
  product_id: number;
  product_variant_id: null | any;
  combo_id: null | any;
  quantity: number;
  total_money: number;
  created_at: string;
  updated_at: string;
  data_product: IItemProductCart;
  data_product_variant: null | IItemProductVariantCart;
  product_combo: [] | IItemComboCart[];
}
export interface IItemProductCart {
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
export interface IItemProductVariantCart {
  id: number;
  product_id: number;
  name: string;
  money_base: number;
  money: number;
  created_at: string;
  updated_at: string;
}
export interface IItemComboCart {
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

export interface IPramsBuyCart {
  address_id: number;
  transport_name: string;
  fee_shipping: number;
  money_use_voucher: number;
  voucher_id_one: number;
  voucher_id_two: number;
}
export interface IDataOrderComplete {
  last_page: number;
  data: IDataBuyAgain[];
}
export interface IDataBuyAgain {
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
  image: string | null;
  order_item: {
    id: number;
    order_id: number;
    product_id: number;
    product_variant_id: null;
    combo_id: null;
    quantity: number;
    money_base: number;
    money: number;
    total_money: number;
    created_at: string;
    updated_at: string;
    product: {
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
      date_end: number;
      unit: string;
      type: number;
      created_at: string;
      updated_at: string;
      name_date_end: null;
    };
  }[];
}
