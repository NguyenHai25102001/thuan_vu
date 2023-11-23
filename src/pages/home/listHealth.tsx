import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Images from "../../static";
import askDoctorApi from "../../apis/askDoctor.apis";
import { useNavigate } from "zmp-ui";
import { ItemQuestion } from "../../types/askDoctor.type";
import { API_URL_IMAGE } from "../../constants/utils";
import { useQuery } from "@tanstack/react-query";
export default function ListHealthHome({ setCheck }: { setCheck: any }) {
  const swiperRef = React.useRef();
  const [outstandingQues, setOutstandingQues] = React.useState<ItemQuestion[]>(
    []
  );
  const navigate = useNavigate();
  const { data: outstandingQuesPage } = useQuery({
    queryKey: ["outstandingQuesPage"],
    queryFn: () => {
      return askDoctorApi.getOutstandingQues();
    },
    staleTime: 10 * 60 * 1000,
    onSuccess: (data) => {
      setCheck(true);
      setOutstandingQues(data.data?.data);
    },
  });

  return (
    <div className="relative">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={2.3}
        spaceBetween={12}
        style={{ paddingLeft: 8, paddingRight: 8 }}
      >
        {!!outstandingQuesPage &&
          !!outstandingQuesPage.data &&
          !!outstandingQuesPage.data.data &&
          !!outstandingQuesPage.data.data.length &&
          outstandingQuesPage.data.data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  onClick={() =>
                    navigate(`/detailQuestion/${item.id}`, {
                      state: { item },
                    })
                  }
                >
                  <img
                    src={`${API_URL_IMAGE}${item.image}`}
                    className=" w-full h-28 object-cover rounded-2xl"
                  />
                  <p className="line-clamp-2 text-black text-[12px] font-bold my-1">
                    {item.content_question}
                  </p>
                  <p className="line-clamp-1 text-[#828282] font-bold text-[10px]">
                    |{item.content_answer}
                  </p>
                  <div className="flex items-center justify-between w-full my-2">
                    <div>Truy cập</div>
                    <div className="flex items-center justify-center w-5 h-5 rounded-2xl bg-main">
                      <img
                        src={Images.iconArrowRightWhite}
                        className="w-[10px] h-[10px] object-contain"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div
        className="w-10 h-10 bg-[#707070] opacity-75 overflow-hidden rounded-full flex items-center justify-center
        absolute top-1/3 z-10 left-0 -translate-y-1/3
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
        absolute top-1/3 z-10 right-0 -translate-y-1/3
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
