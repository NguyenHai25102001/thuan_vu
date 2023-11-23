import Images from "../static";
import {
  babyLessonIcon,
  babyLessonIconCate,
  babymotionsquare,
  babymotionsquareSm,
  bluesquare,
  bluesquareSm,
  blueyesquare,
  blueyesquareSm,
  brainIcon,
  brainIconCate,
  brushIcon,
  brushIconCate,
  cissorIcon,
  cissorIconCate,
  emotionIcon,
  emotionIconCate,
  eyeLessonIcon,
  eyeLessonIconCate,
  faceLessonIcon,
  faceLessonIconCate,
  graysquare,
  graysquareSm,
  greenmindsquare,
  greenmindsquareSm,
  orangesquare,
  orangesquareSm,
  pinksquare,
  pinksquareSm,
  purplesquare,
  purplesquareSm,
  redbabyface,
} from "../static/SvgIcon";
import {
  babyLessonIconNew,
  babymotionsquareSmNew,
  bluesquareSmNew,
  blueyesquareSmNew,
  brainIconNew,
  brushIconNew,
  cissorIconNew,
  emotionIconNew,
  eyeLessonIconNew,
  faceLessonIconNew,
  graysquareSmNew,
  greenmindsquareSmNew,
  orangesquareSmNew,
  pinksquareSmNew,
  purplesquareSmNew,
  redbabyfacenew,
} from "../static/svg";

export const checkBgIconColor = (id: number) => {
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
    bigIcon: redbabyfacenew,
    smallBg: Images.bgTinh,
  };
  if (id === CATEGORY_CODE.MOTION_TINH) {
    objSetCategory.smallBg = Images.bgTinh;
    objSetCategory.bigIcon = cissorIconNew;
  } else if (id === CATEGORY_CODE.MOTION_THO) {
    objSetCategory.smallBg = Images.bgTho;
    objSetCategory.bigIcon = babyLessonIconNew;
  } else if (id === CATEGORY_CODE.MINDS) {
    objSetCategory.smallBg = Images.bgNhanThuc;
    objSetCategory.bigIcon = brainIconNew;
  } else if (id === CATEGORY_CODE.LANGUAGE) {
    objSetCategory.smallBg = Images.bgNgonNgu;
    objSetCategory.bigIcon = faceLessonIconNew;
  } else if (id === CATEGORY_CODE.SENSES) {
    objSetCategory.smallBg = Images.bgGiacQuan;
    objSetCategory.bigIcon = eyeLessonIconNew;
  } else if (id === CATEGORY_CODE.INDEPEDENT) {
    objSetCategory.smallBg = Images.bgTuLap;
    objSetCategory.bigIcon = brushIconNew;
  } else if (id === CATEGORY_CODE.EMOTION) {
    objSetCategory.smallBg = Images.bgCamXuc;
    objSetCategory.bigIcon = emotionIconNew;
  } else {
    (objSetCategory.smallBg = Images.bgTinh),
      (objSetCategory.bigIcon = redbabyfacenew);
  }
  return objSetCategory;
};
export default class Utilities {
  static setCategoryObject(id: number) {
    try {
      let objSetCategory = {
        smallIcon: redbabyface,
        bigIcon: redbabyface,
        smallBg: graysquareSm,
        bigbg: graysquare,
      };
      const CATEGORY_CODE = {
        MOTION_TINH: 222222,
        MOTION_THO: 111111,
        INDEPEDENT: 555555,
        SENSES: 777777,
        EMOTION: 666666,
        MINDS: 444444,
        LANGUAGE: 333333,
      };
      switch (id) {
        case CATEGORY_CODE.MOTION_TINH:
          objSetCategory.bigbg = bluesquare;
          objSetCategory.bigIcon = cissorIcon;
          objSetCategory.smallBg = bluesquareSm;
          objSetCategory.smallIcon = cissorIconCate;
          break;
        case CATEGORY_CODE.MOTION_THO:
          objSetCategory.bigbg = babymotionsquare;
          objSetCategory.bigIcon = babyLessonIcon;
          objSetCategory.smallBg = babymotionsquareSm;
          objSetCategory.smallIcon = babyLessonIconCate;
          break;
        case CATEGORY_CODE.MINDS:
          objSetCategory.bigbg = greenmindsquare;
          objSetCategory.bigIcon = brainIcon;
          objSetCategory.smallBg = greenmindsquareSm;
          objSetCategory.smallIcon = brainIconCate;
          break;
        case CATEGORY_CODE.LANGUAGE:
          objSetCategory.bigbg = orangesquare;
          objSetCategory.bigIcon = faceLessonIcon;
          objSetCategory.smallBg = orangesquareSm;
          objSetCategory.smallIcon = faceLessonIconCate;
          break;
        case CATEGORY_CODE.SENSES:
          objSetCategory.bigbg = blueyesquare;
          objSetCategory.bigIcon = eyeLessonIcon;
          objSetCategory.smallBg = blueyesquareSm;
          objSetCategory.smallIcon = eyeLessonIconCate;
          break;
        case CATEGORY_CODE.INDEPEDENT:
          objSetCategory.bigbg = purplesquare;
          objSetCategory.bigIcon = brushIcon;
          objSetCategory.smallBg = purplesquareSm;
          objSetCategory.smallIcon = brushIconCate;
          break;
        case CATEGORY_CODE.EMOTION:
          objSetCategory.bigbg = pinksquare;
          objSetCategory.bigIcon = emotionIcon;
          objSetCategory.smallBg = pinksquareSm;
          objSetCategory.smallIcon = emotionIconCate;
          break;
        default:
          break;
      }
      return objSetCategory;
    } catch (error) {
      console.log(error);
    }
  }

  static formatDateString = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB");
  };
  static formatDecimalNumber = (number: string) => {
    const numberFormat = number.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    return numberFormat;
  };
}
export const formatDecimalNumber = (numberParams: string | number) => {
  const number = numberParams.toString();
  const numberFormat = number.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return numberFormat;
};
export const roundedNumber = (numberParams: string | number) => {
  const number = numberParams.toString();
  const roundedNumber = Number(number).toFixed(1);
  if (isNaN(roundedNumber)) {
    return 0;
  }
  return roundedNumber;
};
//
export const getMonth = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  return currentMonth;
};
export const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
