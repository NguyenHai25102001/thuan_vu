export interface IProductShop {
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
  product_variant: {
    id: number;
    product_id: number;
    name: string;
    money_base: number;
    money: number;
    created_at: string;
    updated_at: string;
  }[];
  combo: {
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
  };
}
export interface ICategoryShop {
  id: number;
  name: string;
  parent_id: number;
  image: string;
  id_category_kiotviet: number;
  created_at: string;
  updated_at: string;
}
export interface IDataByIdSector {
  last_page: number;
  data: IProductShop[];
}
