export type CategoryQuestion = {
  content: string;
  created_at: string | null;
  id: number;
  status: number;
  updated_at: string | null;
};
export type InfoUser = {
  created_at: string;
  dob: string;
  earlyAge: number;
  gender: string;
  height: number;
  id: number;
  image: string;
  isEarly: number;
  name: string;
  pamily: string;
  realAge: number;
  standard_id: number | null;
  updated_at: string;
  user_id: number;
  weight: number;
};
export type ItemQuestion = {
  content_answer: string;
  content_question: string;
  created_at: string;
  id: number;
  id_category_question: number;
  id_user: number;
  id_user_expert: number;
  image: string;
  month_question: number | null;
  number_view: string;
  status: number;
  type_result: number;
  updated_at: string;
};
export type Question = {
  content_answer: string;
  content_question: string;
  created_at: string;
  id: number;
  id_category_question: number;
  id_user: number;
  id_user_expert: number;
  image: string;
  info_category: {
    id: number;
    content: string;
    status: number;
    created_at: null;
    updated_at: null;
  };
  info_user: {
    id: number;
    name: string;
    gender: string;
    dob: string;
    image: string;
  };
  month_question: null;
  number_view: string;
  status: number;
  type_result: number;
  updated_at: any;
};
