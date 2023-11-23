import {
  babymotionsquareSmNew,
  bluesquareSmNew,
  blueyesquareSmNew,
  greenmindsquareSmNew,
  orangesquareSmNew,
  pinksquareSmNew,
  purplesquareSmNew,
} from "../static/svg";
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
} from "./iconSvgNew";
export const checkBgIconObject = (id: number) => {
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
      objSetCategory.bigbg = bluesquareSmNew;
      objSetCategory.bigIcon = cissorIcon;
      objSetCategory.smallBg = bluesquareSm;
      objSetCategory.smallIcon = cissorIconCate;
      break;
    case CATEGORY_CODE.MOTION_THO:
      objSetCategory.bigbg = babymotionsquareSmNew;
      objSetCategory.bigIcon = babyLessonIcon;
      objSetCategory.smallBg = babymotionsquareSm;
      objSetCategory.smallIcon = babyLessonIconCate;
      break;
    case CATEGORY_CODE.MINDS:
      objSetCategory.bigbg = greenmindsquareSmNew;
      objSetCategory.bigIcon = brainIcon;
      objSetCategory.smallBg = greenmindsquareSm;
      objSetCategory.smallIcon = brainIconCate;
      break;
    case CATEGORY_CODE.LANGUAGE:
      objSetCategory.bigbg = orangesquareSmNew;
      objSetCategory.bigIcon = faceLessonIcon;
      objSetCategory.smallBg = orangesquareSm;
      objSetCategory.smallIcon = faceLessonIconCate;
      break;
    case CATEGORY_CODE.SENSES:
      objSetCategory.bigbg = blueyesquareSmNew;
      objSetCategory.bigIcon = eyeLessonIcon;
      objSetCategory.smallBg = blueyesquareSm;
      objSetCategory.smallIcon = eyeLessonIconCate;
      break;
    case CATEGORY_CODE.INDEPEDENT:
      objSetCategory.bigbg = purplesquareSmNew;
      objSetCategory.bigIcon = brushIcon;
      objSetCategory.smallBg = purplesquareSm;
      objSetCategory.smallIcon = brushIconCate;
      break;
    case CATEGORY_CODE.EMOTION:
      objSetCategory.bigbg = pinksquareSmNew;
      objSetCategory.bigIcon = emotionIcon;
      objSetCategory.smallBg = pinksquareSm;
      objSetCategory.smallIcon = emotionIconCate;
      break;
    default:
      break;
  }
  return objSetCategory;
};
