export interface User {
  id: number;
  userName: string;
  email_verified_at: any;
  level: string;
  otp: string;
  created_at: string;
  updated_at: string;
  device_id: string;
  date_check_code: string;
  status: number;
  session_id: string;
  point: number;
  point_agency: number;
  video_remind: number;
  video_warning: number;
  lock: number;
  pack_boughts: {
    check_code: number;
    endDay: string | null;
    startDay: string | null;
  };
}
export interface IUserBaby {
  created_at: string;
  date_check_code: string;
  device_id: string;
  email_verified_at: null | string;
  id: number;
  level: string;
  lock: number;
  otp: string;
  pack_boughts: {
    check_code: number;
    endDay: string | null;
    startDay: string | null;
  };
  point: number;
  point_agency: number;
  session_id: string;
  status: number;
  updated_at: string;
  userName: string;
  video_remind: number;
  video_warning: number;
}

export interface IBaby {
  created_at: string;
  dob: string;
  earlyAge: number;
  gender: string;
  height: number;
  id: number;
  image: string;
  isEarly: number;
  name: string;
  pamily: null | any;
  realAge: number;
  standard_id: null;
  updated_at: string;
  user_id: number;
  weight: number;
}
export interface IRBaby {
  baby: IBaby[];
  user: IUserBaby;
}

export interface BabyModel {
  id: number;
  name: string;
  gender: "male" | "female";
  dob: string;
  image: string | null;
  height: number | null;
  weight: number | null;
  isEarly: 0 | 1 | boolean;
  earlyAge: number | 0 | null;
  pamily: string | null;
  realAge: number;
  date: string;
  user_id: number | string;
  created_at: string;
  updated_at: string;
}
export interface CreateBabyConfig {
  user_id: number | string;
  name?: string;
  image?: string | null;
  gender?: "male" | "female";
  dob?: string;
  isEarly?: boolean;
  earlyAge?: number;
  pamily?: string | null;
  weight?: string | number;
  height?: string | number;
}
export interface BabyUpdateModel {
  user_id: number | string;
  name?: string;
  image?: string | null;
  gender?: "male" | "female";
  dob?: string;
  isEarly?: boolean;
  earlyAge?: number;
  pamily?: string;
  weight?: string | number;
  height?: string | number;
}
export interface PRMODEL {
  user: IUserBaby;
  baby: BabyModel[];
}
