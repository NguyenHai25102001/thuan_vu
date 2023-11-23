// import { User } from "../types/user.type";

import { IBaby, User } from "../types/user.type";

export const saveAccsessTokenToLS = (access_token: string) => {
  localStorage.setItem("access_token", access_token);
};

export const saveListBabyToLS = (baby: IBaby[]) => {
  localStorage.setItem("list_baby", JSON.stringify(baby));
};

export const saveExpireTokenToLS = (expire: string) => {
  localStorage.setItem("expire_token", expire);
};
export const clearLS = async () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("profile");
  localStorage.removeItem("expire_token");
  localStorage.removeItem("list_baby");
};

export const getAccessTokenFromLS = () =>
  localStorage.getItem("access_token") || "";
//user
export const saveProfileToLS = (profile: User) => {
  localStorage.setItem("profile", JSON.stringify(profile));
};

export const getProfileFromLS = () => {
  const result = localStorage.getItem("profile");
  return result ? JSON.parse(result) : null;
};

export const getExpireTokenFromLS = () =>
  localStorage.getItem("expire_token") || "";

export const getListBabyFromLS = () => {
  const result = localStorage.getItem("list_baby");
  return result ? JSON.parse(result) : [];
};
export const saveIsFollowOA = () => {
  localStorage.setItem("isFollowOA", "2");
};

export const getIsFollowOA = () => {
  return localStorage.getItem("isFollowOA");
};
