import moment from "moment";

export const showTimeAgo = (time: string) => {
  if (!time) return;
  const language = "vn";
  const now = Math.floor(Date.now() / 1000);
  const newTime = Date.parse(time.slice(0, 19));
  const ago = now - Math.floor(newTime / 1000);
  if (ago < 60) {
    return language === "vn" ? "Vừa xong" : "Now";
  } else if (ago < 3600) {
    return `${Math.floor(ago / 60)} ${
      language === "vn"
        ? "phút trước"
        : Math.floor(ago / 60) > 1
        ? "minutes ago"
        : "minute ago"
    }`;
  } else if (ago < 86400) {
    return `${Math.floor(ago / 3600)} ${
      language === "vn"
        ? "giờ trước"
        : Math.floor(ago / 3600) > 1
        ? "hour ago"
        : "hours ago"
    }`;
  } else if (ago < 86400 * 30) {
    return `${Math.floor(ago / 86400)} ${
      language === "vn"
        ? "ngày trước"
        : Math.floor(ago / 86400) > 1
        ? "day ago"
        : "days ago"
    }`;
  } else if (ago < 86400 * 365) {
    return `${Math.floor(ago / (86400 * 30))} ${
      language === "vn"
        ? "tháng trước"
        : Math.floor(ago / (86400 * 30)) > 1
        ? "months ago"
        : "month ago"
    }`;
  } else {
    return `${Math.floor(ago / (86400 * 365))} ${
      language === "vn"
        ? "năm trước"
        : Math.floor(ago / (86400 * 365)) > 1
        ? "years ago"
        : "year ago"
    }`;
  }
};
export const handleShare = async (content: string) => {
  if (navigator && navigator.share) {
    const res = await navigator.share({
      text: content,
    });
  }
};
export const showAgeByMonth = (month: number) => {
  let showAge = "";
  if (month === 0) {
    showAge = "Dưới 4 tuần tuổi";
  } else if (month > 0 && month <= 30) {
    showAge = month + " tháng tuổi";
  } else {
    showAge = `${Math.floor(month / 12)} tuổi`;
  }
  return showAge;
};
export const convertTimeByFormat = (
  date?: any,
  format?: string,
  isFromNow?: boolean
) => {
  try {
    let dateTmp: Date;
    let time = "";
    if (!date) {
      return "";
    }
    if (typeof date === "number") {
      const currentTimeMili = Date.now();
      const currentTimeMiliStr = (currentTimeMili / 1000).toFixed(0);
      if (String(date).length <= String(currentTimeMiliStr).length) {
        dateTmp = new Date(date * 1000);
        time = moment(dateTmp).format(format || "DD/MM/YYYY");
      }
    }

    if (!date || String(date).toLowerCase().includes("invalid")) {
      time = "";
    }

    const formartTmp = format || "DD/MM/YYYY";
    dateTmp = new Date(date);
    time = moment(dateTmp).format(formartTmp);
    if (isFromNow) {
      time = moment(dateTmp).fromNow();
    }
    return time;
  } catch (error) {
    return "";
  }
};
