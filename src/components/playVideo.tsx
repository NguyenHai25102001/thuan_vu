import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API_URL_IMAGE, API_URL_IMAGE_LINEABON } from "../constants/utils";
import Images from "../static";
import { Page } from "zmp-ui";
import { showTimeAgo } from "../module";

export default function PlayVideo() {
  const location = useLocation();
  const { item } = location.state;
  const [isPause, setIsPause] = React.useState(false);
  const videoRef = React.useRef(null);
  const navigate = useNavigate();

  const handleVideoClick = () => {
    if (isPause) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
    setIsPause(!isPause);
  };
  return (
    <Page className="w-full h-full relative bg-white" hideScrollbar>
      <div
        onClick={() => navigate(-1)}
        className="w-10 h-10 rounded-full z-[9999] bg-[#000000] bg-opacity-80 absolute top-[7%] left-[5%] flex items-center justify-center"
      >
        <svg width="34" height="34" viewBox="0 0 44 44" fill="none">
          <path
            d="M26 30L18 22L26 14"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="relative">
        <video
          src={`${API_URL_IMAGE_LINEABON}${item.url_video}`}
          className="w-full h-auto"
          autoPlay={true}
          controls={true}
          ref={videoRef}
          onPause={() => setIsPause(true)}
          onPlay={() => setIsPause(false)}
        />
        {isPause && (
          <div
            onClick={handleVideoClick}
            className="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 z-10"
          >
            <img src={Images.iconPlay} className="w-14 h-14 " />
          </div>
        )}
      </div>
      <div>
        <div className="flex items-center my-2 px-2">
          <img
            src={`${item?.user_avatar}`}
            className="w-8 h-8 object-cover rounded-full"
          />
          <p className="text-xs font-['Nunito'] mx-2 text-[#828282] line-clamp-1 flex-1">
            {/* {item.} */}
            {item?.user_name}
          </p>
          <p className="text-xs font-['Nunito'] text-[#828282]">
            {showTimeAgo(item?.created_at)}
          </p>
        </div>
        <p className="text-xs font-medium text-[#483235] p-2 leading-6">
          {item?.content}
        </p>
      </div>
    </Page>
  );
}
