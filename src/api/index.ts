export const baseUrl = "https://linokids.net/";
const revo = "https://cms.temchonggia.com/backend/";
const API = {
  loginZalo: () => baseUrl + "api/login-zalo-miniapp",
  milestones: () => baseUrl + `api/milestones/list-month`, // danh sách các tháng của cột mốc
  listMilestone: (id) => baseUrl + `api/milestones/list-milestone/${id}`, // chi tiết của danh sách các tháng của cột mốc
  getMilestonesInMonth: () =>
    baseUrl + "api/milestones/get-milestones-in-month",
  checkIsDoneMilestoneMonth: () =>
    baseUrl + "api/milestones/check-done-voucher",
  checkSetupMilestones: () =>
    baseUrl + "api/milestones/add-user-all-milestones",
  userProfile: () => baseUrl + "api/userProfile",
  updateMilestones: () => baseUrl + "api/milestones/update-mileston",
  getTimeDoneMileston: () =>
    baseUrl + "api/milestones/check-time-done-milestones",
  lookupRevo: () => revo + "api/product/antiCounterFeiting",
  checkPoint: () => revo + "api/pointTotal/customerPoint",
  getListGift: () => revo + "api/CustomerGifts/r1getListCustomerGifts",
  addInfoCustomer: () => revo + "api/CustomerInfoes/nonDac",
  confirmGift: () => revo + "api/PointTotal/confirmGiftNew",
  saveBrandGift: () => baseUrl + "api/brand-gift/save-gift-user",
  getHealthIndex: () => baseUrl + "api/health-index/weight-height",
  updateWeight: () => baseUrl + "api/health-index/update-weight",
  updateHeight: () => baseUrl + "api/health-index/update-height",
  getDataWHO: () => baseUrl + "api/health-index/weight-height-who",
  getDataParameters: () =>
    baseUrl + "api/milestones/get-milestones-in-month-category",
  getBlogs: (age, category, page) =>
    baseUrl + `api/blogs?age=${age}&category=${category}&page=${page}`,
  getDetailBlog: (id) => baseUrl + `api/blogs/${id}`,
  addMilestonWithMonthBaby: (id) =>
    baseUrl + `api/milestones/add-milestones-by-month`,
};

export default API;
