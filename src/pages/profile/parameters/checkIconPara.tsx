import {
  babyLessonIconNewPara,
  brainIconNewPara,
  brushIconNewPara,
  cissorIconNewPara,
  emotionIconNewPara,
  eyeLessonIconNewPara,
  faceLessonIconNewPara,
  redbabyfacenewPara,
} from "./icPara";

export const checkIconByCatePara = (id: number) => {
  const CATEGORY_CODE = {
    MOTION_TINH: 222222,
    MOTION_THO: 111111,
    INDEPEDENT: 555555,
    SENSES: 777777,
    EMOTION: 666666,
    MINDS: 444444,
    LANGUAGE: 333333,
  };
  let objSetCategory = {
    bigIcon: redbabyfacenewPara,
  };
  if (id === CATEGORY_CODE.MOTION_TINH) {
    objSetCategory.bigIcon = cissorIconNewPara;
  } else if (id === CATEGORY_CODE.MOTION_THO) {
    objSetCategory.bigIcon = babyLessonIconNewPara;
  } else if (id === CATEGORY_CODE.MINDS) {
    objSetCategory.bigIcon = brainIconNewPara;
  } else if (id === CATEGORY_CODE.LANGUAGE) {
    objSetCategory.bigIcon = faceLessonIconNewPara;
  } else if (id === CATEGORY_CODE.SENSES) {
    objSetCategory.bigIcon = eyeLessonIconNewPara;
  } else if (id === CATEGORY_CODE.INDEPEDENT) {
    objSetCategory.bigIcon = brushIconNewPara;
  } else if (id === CATEGORY_CODE.EMOTION) {
    objSetCategory.bigIcon = emotionIconNewPara;
  } else {
    objSetCategory.bigIcon = redbabyfacenewPara;
  }
  return objSetCategory;
};
