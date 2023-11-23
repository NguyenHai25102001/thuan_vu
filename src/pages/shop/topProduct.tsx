import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Images from "../../static";
import { IProductShop } from "../../types/shop.types";
import { API_URL_IMAGE } from "../../constants/utils";
import { formatDecimalNumber } from "../../utils/Utilities";
import { useNavigate } from "react-router-dom";
import path from "../../constants/path";
interface IProps {
  data: IProductShop[];
}
export default function TopProduct(props: IProps) {
  const { data } = props;
  const swiperRef = React.useRef();
  const navigate = useNavigate();
  return (
    <div className="relative">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={4}
        spaceBetween={12}
        style={{ paddingLeft: 8, paddingRight: 8 }}
      >
        {!!data &&
          !!data.length &&
          data.map((item, index) => {
            return (
              <SwiperSlide key={item.id}>
                <div
                  onClick={() => {
                    navigate(`${path.home}${item.id}`);
                  }}
                >
                  <img
                    src={
                      item.image
                        ? `${API_URL_IMAGE}${item.image}`
                        : Images.bannerHome
                    }
                    className=" w-full h-20 object-cover rounded"
                  />
                  <p className="text-xs text-center font-['Nunito'] font-bold line-clamp-1 text-white my-1">
                    {item?.name}
                  </p>
                  <p className="text-xs text-center font-['Nunito'] font-bold line-clamp-1 text-white my-1">
                    {formatDecimalNumber(item?.money)} đ
                  </p>
                  <div className="flex items-center w-full justify-center">
                    <svg width="8" height="9" viewBox="0 0 8 9" fill="none">
                      <path
                        d="M4.08255 0.833344C4.57634 0.833344 5.0499 1.0265 5.39906 1.37031C5.74822 1.71413 5.94438 2.18045 5.94438 2.66668C5.94438 3.15291 5.74822 3.61922 5.39906 3.96304C5.0499 4.30686 4.57634 4.50001 4.08255 4.50001C3.58876 4.50001 3.1152 4.30686 2.76603 3.96304C2.41687 3.61922 2.22072 3.15291 2.22072 2.66668C2.22072 2.18045 2.41687 1.71413 2.76603 1.37031C3.1152 1.0265 3.58876 0.833344 4.08255 0.833344ZM4.08255 5.41668C6.13987 5.41668 7.80621 6.23709 7.80621 7.25001V8.16668H0.358887V7.25001C0.358887 6.23709 2.02522 5.41668 4.08255 5.41668Z"
                        fill="#99E7FF"
                      />
                    </svg>
                    <div className="text-center line-clamp-1 text-xs font-['Nunito'] font-bold ml-1 text-[#99e6ff]">
                      {item?.quantity_sold}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div
        className="w-10 h-10 bg-[#707070] opacity-75 overflow-hidden rounded-full flex items-center justify-center
          absolute top-1/3 -translate-y-1/2 z-10 left-0
          "
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
          <g clipPath="url(#clip0_746_2058)">
            <path
              d="M11.6261 3.42001L5.70239 9.50001L11.6261 15.58C11.7876 15.7452 12.0042 15.8355 12.2284 15.831C12.4525 15.8266 12.6658 15.7277 12.8213 15.5563C12.9769 15.3848 13.0619 15.1547 13.0577 14.9167C13.0535 14.6787 12.9604 14.4521 12.799 14.287L8.13252 9.50001L12.799 4.70779C12.9604 4.54262 13.0535 4.3161 13.0577 4.07806C13.0619 3.84002 12.9769 3.60995 12.8213 3.43848C12.6658 3.26701 12.4525 3.16818 12.2284 3.16373C12.0042 3.15927 11.7876 3.24956 11.6261 3.41473V3.42001Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_746_2058">
              <rect
                x="0.43457"
                y="19"
                width="19"
                height="17.8905"
                rx="8.94526"
                transform="rotate(-90 0.43457 19)"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div
        className="w-10 h-10 bg-[#707070] opacity-75 overflow-hidden rounded-full flex items-center justify-center
          absolute top-1/3 -translate-y-1/2 z-10 right-0
          
          "
        onClick={() => swiperRef.current?.slideNext()}
      >
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
          <g clipPath="url(#clip0_746_2063)">
            <path
              d="M6.8785 15.5747L12.8022 9.49474L6.8785 3.41474C6.71704 3.24957 6.50042 3.15928 6.27627 3.16373C6.05213 3.16819 5.83884 3.26702 5.68331 3.43849C5.52779 3.60996 5.44277 3.84002 5.44696 4.07806C5.45116 4.3161 5.54422 4.54262 5.70568 4.70779L10.3721 9.49474L5.70568 14.287C5.54422 14.4521 5.45116 14.6787 5.44696 14.9167C5.44277 15.1547 5.52779 15.3848 5.68331 15.5563C5.83884 15.7277 6.05213 15.8266 6.27627 15.831C6.50042 15.8355 6.71704 15.7452 6.8785 15.58V15.5747Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_746_2063">
              <rect
                x="0.179199"
                y="19"
                width="19"
                height="17.8905"
                rx="8.94526"
                transform="rotate(-90 0.179199 19)"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}
