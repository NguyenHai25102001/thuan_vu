import React, { useContext } from "react";
import Images from "../../static";
import PostTab from "./postTab";
import VideoTab from "./videoTab";
import { useNavigate } from "react-router-dom";
import ShowListBaby from "../../components/showListBaby";
import { AppContext } from "../../contexts/app.context";
import { showAgeByMonth } from "../../module";
import path from "../../constants/path";
const WIDTH_WINDOW = window.innerWidth;

const Community = () => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const { selectedBaby } = useContext(AppContext);
  const refScroll = React.useRef(null);

  const navigate = useNavigate();
  const refListBaby = React.useRef(null);

  const handleTabClick = (index) => {
    setCurrentIndex(index);
    const tabPosition = WIDTH_WINDOW * index;
    refScroll.current?.scrollTo({
      left: tabPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col w-full h-full bg-[#F7F8FD] relative">
      <div className="bg-main pt-14 pb-4">
        {/* header  */}
        <div className="flex items-center px-2">
          <div className="relative px-2">
            <div
              className="w-12 h-12 flex items-center justify-center"
              onClick={() => navigate(-1)}
            >
              <img
                src={Images.iconHomeBack}
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
          <div
            className="w-full flex flex-col items-center justify-center pr-12"
            onClick={() => refListBaby.current?.setShow(true)}
          >
            <div className="flex items-center">
              <p className="text-center uppercase ptext-base font-['Nunito'] mr-1 font-bold p text-white p">
                {selectedBaby?.name}
              </p>
              <svg width="14" height="10" viewBox="0 0 12 8" fill="none">
                <path
                  d="M9 1L5 5L1 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-cente text-xs font-['Nunito'] text-white">
              {showAgeByMonth(selectedBaby?.realAge) || "0 tuổi"}
            </p>
          </div>
        </div>
      </div>
      {/* main  */}
      <div>
        {/* 2 button  */}
        <div className="flex items-center px-2 gap-4 mt-5 mb-2 w-full ">
          <div
            className="flex items-center w-full gap-2 rounded-full flex-1 justify-center py-2"
            style={{
              backgroundColor: currentIndex === 0 ? "#e9636e" : "#dedede",
            }}
            onClick={() => handleTabClick(0)}
          >
            {currentIndex === 0 ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M15 2.25H3C2.17275 2.25 1.5 2.92275 1.5 3.75V14.25C1.5 15.0773 2.17275 15.75 3 15.75H15C15.8273 15.75 16.5 15.0773 16.5 14.25V3.75C16.5 2.92275 15.8273 2.25 15 2.25ZM3 14.25V3.75H15L15.0015 14.25H3Z"
                  fill="white"
                />
                <path
                  d="M4.5 5.25H13.5V6.75H4.5V5.25ZM4.5 8.25H13.5V9.75H4.5V8.25ZM4.5 11.25H9V12.75H4.5V11.25Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M15 2.25H3C2.17275 2.25 1.5 2.92275 1.5 3.75V14.25C1.5 15.0773 2.17275 15.75 3 15.75H15C15.8273 15.75 16.5 15.0773 16.5 14.25V3.75C16.5 2.92275 15.8273 2.25 15 2.25ZM3 14.25V3.75H15L15.0015 14.25H3Z"
                  fill="#828282"
                />
                <path
                  d="M4.5 5.25H13.5V6.75H4.5V5.25ZM4.5 8.25H13.5V9.75H4.5V8.25ZM4.5 11.25H9V12.75H4.5V11.25Z"
                  fill="#828282"
                />
              </svg>
            )}
            <span
              className=" text-xs  font-semibold text-white"
              style={{
                color: currentIndex === 0 ? "#ffffff" : "#828282",
              }}
            >
              Bài viết
            </span>
          </div>
          <div
            className="flex items-center w-full bg-[#dedede] gap-2 rounded-full flex-1 justify-center py-2"
            style={{
              backgroundColor: currentIndex === 1 ? "#e9636e" : "#dedede",
            }}
            onClick={() => handleTabClick(1)}
          >
            {currentIndex === 0 ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.103 2.897 19 4 19H16C17.103 19 18 18.103 18 17V13.667L22 17V7L18 10.333V7ZM16.002 17H4V7H16L16.001 11.999L16 12L16.001 12.001L16.002 17Z"
                  fill="#828282"
                />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.103 2.897 19 4 19H16C17.103 19 18 18.103 18 17V13.667L22 17V7L18 10.333V7ZM16.002 17H4V7H16L16.001 11.999L16 12L16.001 12.001L16.002 17Z"
                  fill="white"
                />
              </svg>
            )}
            <span
              className="text-xs font-semibold"
              style={{
                color: currentIndex === 1 ? "#ffffff" : "#828282",
              }}
            >
              Videos
            </span>
          </div>
        </div>
        {/* tạo bài viết  */}
        <div
          onClick={() => {
            if (currentIndex === 0) {
              navigate(path.uploadPost);
            } else {
              navigate(path.uploadVideo);
            }
          }}
          className="border-solid border-[#ebebeb] bg-white flex flex-col items-start pl-5 py-2 border rounded-[20px] w-[96%] mx-auto"
        >
          <div className="text-xs text-[#828282] ">Tạo bài đăng</div>
        </div>
        <div className="bg-[#ebebeb] w-full h-2 mt-3" />
      </div>
      <div
        ref={refScroll}
        className="no-scrollbar h-full w-full "
        style={{
          overflow: "hidden",
          display: "flex",
          scrollBehavior: "smooth",
        }}
      >
        <div
          className="no-scrollbar h-full "
          style={{
            flex: `0 0 ${WIDTH_WINDOW}px`,
          }}
        >
          <PostTab choose={currentIndex} />
        </div>
        <div
          className="no-scrollbar h-full "
          style={{
            flex: `0 0 ${WIDTH_WINDOW}px`,
          }}
        >
          <VideoTab choose={currentIndex} />
        </div>
      </div>
      <ShowListBaby ref={refListBaby} />
    </div>
  );
};
export default Community;
