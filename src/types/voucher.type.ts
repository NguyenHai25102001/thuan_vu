export type Point = {
  point: number;
};
export type ProgramVocher = {
  banner: string;
  content: string;
  created_at: string;
  describe: string;
  id: number;
  navigate: null;
  status: number;
  title: string;
  updated_at: string;
};
export type Voucher = {
  count_use_voucher: number;
  count_voucher: number;
  created_at: string;
  describe: string;
  group_goods_id: number | null;
  id: number;
  image: string;
  is_active: number;
  maximum_price: number | null;
  minimum_value: number | null;
  percent_discount: number | null;
  reduced_price: number | null;
  score: number;
  status: number;
  time_end: string;
  title: string;
  type: number;
  updated_at: string;
  voucher_code: string;
  choose?: boolean;
};
export interface IVoucher {
  last_page: number;
  data: Voucher[];
}
