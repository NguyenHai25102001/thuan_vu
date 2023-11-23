import React from "react";
import { Swiper } from "zmp-ui";
import { BannerProblem } from "../../../types/detailProblem.type";
import detailProblemApi from "../../../apis/detailProblem.apis";
import { API_URL_IMAGE } from "../../../constants/utils";
import { useLocation } from "react-router-dom";
const SwiperSlideHeader = () => {
  const [dataBanner, setDataBanner] = React.useState<BannerProblem[]>([]);
  const location = useLocation();
  const data = location.state;
  const getDataDetail = async () => {
    const res = await detailProblemApi.getDetailProblem(data?.id);
    if (res.status) {
      setDataBanner(res.data.banner);
    } else {
      alert("Có lỗi xảy ra");
    }
  };
  React.useEffect(() => {
    getDataDetail();
  }, []);
  return (
    <div className="bg-white w-[100%] rounded-xl relative">
      <div className="bg-gradient"></div>
      <Swiper autoplay duration={2000} loop>
        {!!dataBanner &&
          !!dataBanner.length &&
          dataBanner.map((item, index) => {
            return (
              <Swiper.Slide key={index}>
                <img
                  src={`${API_URL_IMAGE}${item.src}`}
                  className="w-full h-[150px] object-cover rounded-2xl"
                />
              </Swiper.Slide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default SwiperSlideHeader;
