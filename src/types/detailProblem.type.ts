export type BannerProblem = {
  created_at: string;
  id: number;
  problem_detail_id: number;
  src: string;
  updated_at: string;
};
export type DetailProblem = {
  created_at: string;
  id: number;
  image: string;
  title: string;
  updated_at: string;
};
export type HandbookProblem = {
  category_id: number;
  content: string;
  created_at: string;
  id: number;
  image: string;
  src: string;
  title: string;
  type: number;
  updated_at: string;
};
export type ProductProblem = {
  id: number;
  name: string;
  id_sectors: number;
  name_sectors: string;
  id_group_goods: 2;
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
};
export type QuestionProblem = {
  content_answer: string;
  content_question: string;
  created_at: string;
  id: number;
  id_user: number;
  problem_detail_id: number;
  type_result: number;
  updated_at: string;
};
// const bb ={
//     content_answer: ""
// content_question: "Test đặt câu hỏi"
// created_at: "2023-07-28T06:19:58.000000Z"
// id: 6
// id_user: 28397
// problem_detail_id: 1
// type_result: 0
// updated_at: "2023-07-28T06:19:58.000000Z"
// }
