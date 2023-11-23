import { IProductShop } from "./shop.types";

export interface IBannerHome {
  image: string;
}
export interface IPointModel {
  point: number;
}

export interface LessonHomeModels {
  getLesson: LessonHomeItemModels[];
}
export interface LessonHomeItemModels {
  date: string;
  lesson: LessonModel[];
}
export interface LessonModel {
  id: number;
  name: string | null;
  content?: string | null;
  video?: string | null;
  age: number;
  image: string | null;
  like?: 0 | 1 | true | false;
  note?: string | null;
  status?: string | null;
  toys?: ToyModel[];
  category_id: number;
  place_id: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  target?: string | null;
}
export interface ToyModel {
  id: number;
  name: string;
  image: string;
  age: number;
  category_id: number;
  place_id: number;
  links: string;
  month: number;
}

export interface HistoryStatusModel {
  startDate: string;
  endDate: string;
  history: HistoryDayItemModel[];
}
export interface HistoryDayItemModel {
  time: string;
  lessonCompleted: number;
  sumOfLesson: number;
  lesson: HistoryLessonItemModel[];
}
export interface HistoryLessonItemModel {
  category_id: number;
  lesson_id: number;
  status: "completed" | "easily" | "hard" | string;
}
export interface HistoryStatusLessonParams {
  type: string;
  startDate: string;
  endDate: string;
  id: number | string;
}
export interface LessonUpdateStatusModel {
  status: {
    id: number;
    status: "completed" | "easily" | "hard";
    user_profile_id: number;
    time: string;
    lesson_id: number;
    category_id: number;
    updated_at: string;
    created_at: string;
  };
}

export interface ListShoppingHome {
  id: number;
  name: string;
  icon: string;
  banner: string;
  created_at: string;
  updated_at: string;
  product: IProductShop[];
}

export interface IItemProductHome {
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
}
