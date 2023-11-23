import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Page } from "zmp-ui";
import Header from "../../components/header";
import { API_URL_IMAGE } from "../../constants/utils";

const ProblemByAge = () => {
  const location = useLocation();
  const data = location.state;
  const [isPause, setIsPause] = React.useState(false);
  const videoRef = React.useRef(null);

  const handleVideoClick = () => {
    if (isPause === false) {
      videoRef.current?.pause();
      setIsPause(true);
    } else {
      videoRef.current?.play();
      setIsPause(false);
    }
  };
  const handlePause = () => {
    if (isPause === false) {
      setIsPause(true);
    }
  };
  const handlePlay = () => {
    if (isPause === true) {
      setIsPause(false);
    }
  };

  return (
    <Box className="h-screen p-0 m-0">
      <Header title="Vấn đề" />
      <Page hideScrollbar className="w-full h-full pb-40 bg-white px-2 py-3">
        <div className="relative">
          {data.type === 2 && (
            <div className="flex flex-col items-center justify-center">
              <video
                src={`${API_URL_IMAGE}${data.src}`}
                className="w-full h-auto rounded-lg"
                autoPlay={true}
                controls
                ref={videoRef}
                onPause={handlePause}
                onPlay={handlePlay}
              />
              <span className="font-light text-[8px] italic text-[#8D8D8D] text-center">
                Video hướng dẫn giải thích
              </span>
            </div>
          )}
          {isPause === true && (
            <div
              className="flex justify-center items-center bg-black opacity-90 rounded-full w-10 h-10 absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 z-10"
              onClick={handleVideoClick}
            >
              <svg width="20" height="23" viewBox="0 0 20 23" fill="none">
                <path
                  d="M7.41667 18.1451C6.89167 18.1451 6.4 18.0072 5.96667 17.7315C4.94167 17.0789 4.375 15.7646 4.375 14.0366V9.11937C4.375 7.39143 4.94167 6.07709 5.96667 5.42452C6.99167 4.77194 8.3 4.89143 9.66667 5.7554L13.525 8.20944C14.8833 9.07341 15.6333 10.2683 15.6333 11.5734C15.6333 12.8786 14.8833 14.0734 13.525 14.9374L9.66667 17.3914C8.88333 17.8969 8.11667 18.1451 7.41667 18.1451ZM7.41667 6.38959C7.10833 6.38959 6.825 6.46312 6.58333 6.61937C5.96667 7.01459 5.625 7.89694 5.625 9.11937V14.0275C5.625 15.2407 5.96667 16.1322 6.59167 16.5275C7.21667 16.9227 8.08333 16.8032 9.04167 16.1966L12.9 13.7425C13.8583 13.1359 14.3833 12.3639 14.3833 11.5734C14.3833 10.783 13.8583 10.0109 12.9 9.4043L9.04167 6.95025C8.45 6.57341 7.9 6.38959 7.41667 6.38959Z"
                  fill="#e9636e"
                />
              </svg>
            </div>
          )}
          {data.type === 1 && (
            <img
              src={`${API_URL_IMAGE}${data.image}`}
              className="w-full h-[173px] rounded-xl object-cover"
            />
          )}
        </div>
        <div className="pt-5">
          <p className="text-[13px] text-black font-semibold">{data.title}</p>
          <p
            className="text-[13px] text-[#828282] leading-[18px] pt-2"
            dangerouslySetInnerHTML={{ __html: data.content }}
          ></p>
        </div>
      </Page>
    </Box>
  );
};

export default ProblemByAge;
