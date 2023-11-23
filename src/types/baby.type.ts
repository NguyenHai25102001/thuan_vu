export interface UserProfile {
  user: {
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
      startDay: string;
      endDay: string;
      check_code: number;
    };
  };
  baby: {
    id: number;
    name: string;
    gender: string;
    dob: string;
    otp: string;
    image: string;
    height: number;
    weight: number;
    isEarly: number;
    earlyAge: number;
    pamily: string;
    realAge: number;
    user_id: number;
    created_at: string;
    updated_at: string;
    standard_id: any;
  };
}
export interface BabyInfo {
  id: number;
  name: string;
  gender: string;
  dob: string;
  otp: string;
  image: string;
  height: number;
  weight: number;
  isEarly: number;
  earlyAge: number;
  pamily: string;
  realAge: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  standard_id: any;
}
export interface HealthyBaby {
  health: {
    id: number;
    day: string;
    weight: number;
    height: number;
    user_profile_id: number;
  }[];
}
export interface BabyHealthIndex {
  id: number;
  user_id: number;
  user_profiles_id: number;
  month: number;
  weight: number;
  height: number;
  type_sd_weight: number;
  type_sd_height: number;
  created_at: string;
  updated_at: string;
}
