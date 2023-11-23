import React, { useContext } from "react";
import "react-circular-progressbar/dist/styles.css";
import Images from "../../static";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { AppContext } from "../../contexts/app.context";
import { useQuery } from "@tanstack/react-query";
import homeApi from "../../apis/home.apis";
import { convertTimeByFormat } from "../../module";
import {
  HistoryDayItemModel,
  HistoryStatusLessonParams,
  LessonHomeItemModels,
  LessonModel,
} from "../../types/home.type";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { checkBgIconColor } from "../../utils/Utilities";
import path from "../../constants/path";
import { CircularProgressbar } from "react-circular-progressbar";

const LessonHome = () => {
  const navigate = useNavigate();
  const { selectedBaby } = useContext(AppContext);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const { profile } = useContext(AppContext);
  const [data, setData] = React.useState<LessonHomeItemModels[]>([]);
  const [history, setHistory] = React.useState<HistoryDayItemModel[]>([]);
  const { data: dataLessonHome } = useQuery({
    queryKey: ["dataLessonHome", selectedBaby?.id],
    queryFn: () => {
      return homeApi.getLessonHome(selectedBaby?.id);
    },
    onSuccess: async (res) => {
      const dataLesson = res.data?.data?.getLesson;
      if (dataLesson) {
        const paramsPost: HistoryStatusLessonParams = {
          id: selectedBaby?.id,
          type: "progress",
          startDate: convertTimeByFormat(dataLesson[0]?.date, "YYYY-MM-DD"),
          endDate: convertTimeByFormat(
            dataLesson[dataLesson.length - 1]?.date,
            "YYYY-MM-DD"
          ),
        };
        setData(dataLesson);
        setCurrentIndex(
          dataLesson.findIndex(
            (x) =>
              convertTimeByFormat(x.date, "DD/MM/YYYY") ===
              convertTimeByFormat(Date.now(), "DD/MM/YYYY")
          ) > -1
            ? dataLesson.findIndex(
                (x) =>
                  convertTimeByFormat(x.date, "DD/MM/YYYY") ===
                  convertTimeByFormat(Date.now(), "DD/MM/YYYY")
              )
            : 0
        );
        getHistory(paramsPost);
      }
    },
    enabled: Boolean(selectedBaby?.id),
  });
  console.log("dataLessonHome", dataLessonHome);

  const getHistory = async (dataPost: HistoryStatusLessonParams) => {
    if (!!dataPost.id) {
      try {
        const res = await homeApi.getHistoryStatus(dataPost);
        if (res.data.code === 200) {
          setHistory(res.data.data.history);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("none");
    }
  };
  const itemDetailLesson = (
    item: LessonModel,
    currentDay: string,
    index: number,
    isDisabled: boolean,
    status: string | null
  ) => {
    let isBlock = false;
    let iconRight = (
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
        <path
          d="M1 1L7 7L1 13"
          stroke="url(#paint0_linear)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="4"
            y1="13"
            x2="4"
            y2="1"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#e9636e" />
            <stop offset="1" stopColor="#e9636e" />
          </linearGradient>
        </defs>
      </svg>
    );
    if (status) {
      if (status === "completed") {
        iconRight = (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.58484 0.249869L3.32991 5.85143L1.41516 3.81037C1.0875 3.47304 0.566683 3.47786 0.244579 3.82121C-0.0775257 4.16456 -0.0820515 4.71974 0.234407 5.06901L2.73954 7.73938C3.06562 8.08687 3.5942 8.08687 3.92029 7.73938L9.76559 1.50851C10.0821 1.15924 10.0775 0.604063 9.75542 0.260712C9.43332 -0.0826396 8.9125 -0.0874639 8.58484 0.249869Z"
              fill="#00C442"
            />
          </svg>
        );
      }
      if (status === "easily") {
        iconRight = (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.58484 0.249869L3.32991 5.85143L1.41516 3.81037C1.0875 3.47304 0.566683 3.47786 0.244579 3.82121C-0.0775257 4.16456 -0.0820515 4.71974 0.234407 5.06901L2.73954 7.73938C3.06562 8.08687 3.5942 8.08687 3.92029 7.73938L9.76559 1.50851C10.0821 1.15924 10.0775 0.604063 9.75542 0.260712C9.43332 -0.0826396 8.9125 -0.0874639 8.58484 0.249869Z"
              fill="#e9636e"
            />
          </svg>
        );
      }
      if (status === "hard") {
        iconRight = (
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path
              d="M6.58923 1.39966L1.40869 6.5802"
              stroke="#FF6188"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.59087 6.58316L1.40601 1.39722"
              stroke="#FF6188"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }
    }
    return (
      <div
        onClick={() => {
          navigate(path.detailLessonHome, {
            state: {
              key: item.id,
              status,
              dateTime: currentDay,
            },
          });
          // }
        }}
        className="flex items-center p-4"
      >
        <div className="w-10 h-10 relative mr-1 flex flex-col items-center justify-center bg-transparent">
          <div className="h-10 w-10 bg-transparent">
            <img
              src={checkBgIconColor(item?.category_id).smallBg}
              className="w-10 h-10 object-cover"
            />
          </div>
          <div className="z-10 absolute">
            {checkBgIconColor(item?.category_id).bigIcon}
          </div>
        </div>
        <p
          className="text-[#333] text-[13px] font-semibold flex-1 ml-4"
          style={{
            color:
              moment(currentDay) >= moment(new Date(Date.now())) ||
              isBlock ||
              (isDisabled && index > 1)
                ? "#828282"
                : "#333333",
          }}
        >
          {item.name}
        </p>

        <div className="w-5 h-5 object-contain">{iconRight}</div>
      </div>
    );
  };

  const renderItem = (item: LessonHomeItemModels) => {
    const currentPackBought = profile.pack_boughts;
    let dateConvert = convertTimeByFormat(item.date, "DD/MM/YYYY");
    let historyItem: HistoryDayItemModel = {
      lesson: [],
      lessonCompleted: 0,
      sumOfLesson: 7,
      time: convertTimeByFormat(Date.now(), "YYYY-MM-DD"),
    };
    let isDateHistoryExisted = false;
    if (history && history.length > 0) {
      const indexDate = history.findIndex(
        (x) =>
          convertTimeByFormat(x.time, "DD/MM/YYYY").toString() === dateConvert
      );
      if (indexDate > -1) {
        isDateHistoryExisted = true;
        historyItem = history[indexDate];
      }
    }
    if (
      convertTimeByFormat(item.date, "DD/MM/YYYY") ===
      convertTimeByFormat(Date.now(), "DD/MM/YYYY")
    ) {
      dateConvert = "HÔM NAY";
    }
    if (item.lesson && item.lesson.length > 0) {
      item.lesson.sort((a, b) => {
        return a.category_id - b.category_id;
      });
    }

    return (
      <div className="shadow rounded-2xl bg-white mx-2 my-4 p-4 border-1 border-[#626262]">
        <div className="flex justify-between">
          <div className="flex">
            <img src={Images.iconCalendar} className="w-4 h-4 mt-1 mr-2" />
            <div className="">
              <div className="flex items-end">
                <p className="text-textBold text-[15px] font-bold">
                  Phát triển đa giác quan
                </p>
                <p className="text-main text-[14px] font-medium">
                  {" "}
                  : {dateConvert}
                </p>
              </div>
              <p className="text-[#828282] text-[13px] font-normal">
                {`${item.lesson.length - historyItem.lessonCompleted}`} chương
                trình chưa hoàn thiện
              </p>
            </div>
          </div>
          {moment(item?.date) < moment(new Date(Date.now())) && (
            <div className="w-11 h-11">
              <CircularProgressbar
                value={
                  isDateHistoryExisted
                    ? Number(
                        (
                          (historyItem.lesson.filter((x) => x.status !== "hard")
                            .length /
                            historyItem.sumOfLesson) *
                          100
                        ).toFixed(1)
                      )
                    : 0
                }
                text={
                  isDateHistoryExisted
                    ? `${(
                        (historyItem.lesson.filter((x) => x.status !== "hard")
                          .length /
                          historyItem.sumOfLesson) *
                        100
                      ).toFixed(1)}%`
                    : "0%"
                }
              />
            </div>
          )}
        </div>
        <div className="h-[1px] w-full bg-main my-2"></div>
        {item.lesson.map((v, i) => {
          let isDisabled = true;
          if (
            currentPackBought &&
            currentPackBought.endDay &&
            currentPackBought.startDay
          ) {
            if (
              moment(currentPackBought.startDay) <=
                moment(new Date(Date.now())) &&
              moment(currentPackBought.endDay) > moment(new Date(Date.now()))
            ) {
              isDisabled = false;
            }
          }
          const status =
            !!historyItem &&
            !!historyItem.lesson &&
            historyItem.lesson.length > 0 &&
            historyItem.lesson.findIndex((x) => x.lesson_id === v.id) > -1
              ? historyItem.lesson[
                  historyItem.lesson.findIndex((x) => x.lesson_id === v.id)
                ].status
              : null;
          return (
            <div key={i}>
              {itemDetailLesson(v, item.date, i, isDisabled, status)}
              {i === item.lesson.length - 1 ? null : (
                <div className="h-[1px] w-full bg-main mt-1" />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="mt-2 bg-white rounded-t-xl py-2 pb-2">
      {!!dataLessonHome &&
        !!dataLessonHome.data &&
        !!dataLessonHome.data.data &&
        !!dataLessonHome.data.data.getLesson &&
        !!dataLessonHome.data.data.getLesson.length && (
          <Swiper
            initialSlide={dataLessonHome.data.data.getLesson.findIndex(
              (x) =>
                convertTimeByFormat(x.date, "DD/MM/YYYY") ===
                convertTimeByFormat(Date.now(), "DD/MM/YYYY")
            )}
            slidesPerView={1}
            spaceBetween={0}
            onSlideChange={(swiper) => {
              setCurrentIndex(swiper.activeIndex);
            }}
          >
            {dataLessonHome?.data?.data?.getLesson.map((item, index) => {
              return <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>;
            })}
          </Swiper>
        )}
      <div className="flex items-center w-full justify-center gap-1">
        {!!data &&
          !!data.length &&
          data.map((_, index) => {
            return (
              <div
                key={index}
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor:
                    currentIndex === index ? "#e9636e" : "#DEDEDE",
                }}
              ></div>
            );
          })}
      </div>
    </div>
  );
};
export default LessonHome;
