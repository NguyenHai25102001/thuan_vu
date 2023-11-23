import React, { useContext } from "react";
import { Box, Page, useNavigate } from "zmp-ui";
import Images from "../../static";
import { Swiper, SwiperSlide } from "swiper/react";
import ItemAsk from "./itemAsk";
import askDoctorApi from "../../apis/askDoctor.apis";
import SpinLoad from "../../components/spinLoad";
import { AppContext } from "../../contexts/app.context";
import { showAgeByMonth } from "../../module";
import ShowListBaby from "../../components/showListBaby";
import { CategoryQuestion, ItemQuestion } from "../../types/askDoctor.type";

const InfoDoctor = ({ type, name, majors }) => {
  return (
    <div className="flex items-center justify-normal">
      <img src={Images.avatarDoctor} className="w-9 h-9 object-cover" />
      <div className="ml-1">
        <span className="flex text-[11px] leading-4 text-[#817068]">
          {type}
        </span>
        <span className="flex text-xs font-['Noto_Serif_Tamil'] leading-5 text-[#3D4A50] font-semibold">
          {name}
        </span>
        <span className="flex italic text-[11px] leading-4 text-[#055E8F]">
          {majors}
        </span>
      </div>
    </div>
  );
};
const InfoDoctor2 = () => {
  return (
    <div className="flex justify-between">
      <InfoDoctor
        type="Câu hỏi được trả lời bởi"
        name="BS.Hoàng Quốc Tưởng"
        majors="Chuyên khoa nhi"
      />
      <div className="pt-8 relative pr-0 mr-0">
        <img src={Images.boxShapeGreenToBlue} />
        <span className="absolute top-[35px] left-[20px] text-white">
          Tư vấn gọi điện
        </span>
      </div>
    </div>
  );
};

const AskDoctor = () => {
  const { selectedBaby } = useContext(AppContext);
  const refListBaby = React.useRef(null);
  const navigate = useNavigate();
  const [quesCategory, setQuesCategory] = React.useState<CategoryQuestion[]>(
    []
  );
  const [myQues, setMyQues] = React.useState<CategoryQuestion[]>([]);

  const [outstandingQues, setOutstandingQues] = React.useState([]);
  const [dataAsk, setDataAsk] = React.useState<ItemQuestion[]>([]);
  const [page, setPage] = React.useState(1);
  const [lastPage, setLastpage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const listInnerRef = React.useRef(null);
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (Math.ceil(scrollTop) + clientHeight === scrollHeight) {
        loadmore();
      }
    }
  };
  const getQuesCategoryHome = async () => {
    const res = await askDoctorApi.getQuesCategory();
    if (res.status) {
      setQuesCategory(res.data.data.list_category);
    } else {
      alert("Có lỗi xảy ra");
    }
  };
  const getMyQuesHome = async () => {
    const res = await askDoctorApi.getMyQuesHome();
    if (res.status) {
      setMyQues(res.data.data);
    } else {
      alert("Có lỗi xảy ra");
    }
  };
  const getOutstandingQuesHome = async () => {
    const res = await askDoctorApi.getOutstandingQues();
    if (res.status) {
      setOutstandingQues(res.data.data);
    }
  };
  const getAllQues = async () => {
    setIsLoading(true);
    const res = await askDoctorApi.getAllQues(page);
    if (res.status) {
      const newData = res.data.data.data.map((item) => {
        return {
          ...item,
          active: false,
        };
      });
      setIsLoading(false);
      setDataAsk(newData);
      setLastpage(res.data.data.last_page);
    } else {
      alert("Có lỗi xảy ra");
    }
  };
  const loadmore = async () => {
    if (page >= lastPage) {
      return;
    } else {
      try {
        setIsLoading(true);
        const currentPage = page + 1;
        setPage(currentPage);
        const res = await askDoctorApi.getAllQues(page);
        if (res.status) {
          const newData = res.data.data.data.map((item) => {
            return {
              ...item,
              active: false,
            };
          });
          setDataAsk([...dataAsk, ...newData]);
        } else {
          alert("Có lỗi xảy ra");
        }
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };
  React.useEffect(() => {
    getMyQuesHome();
    getQuesCategoryHome();
    getOutstandingQuesHome();
    getAllQues();
  }, []);
  return (
    <div className="h-full w-full p-0 m-0">
      <div className="bg-main h-[120px] w-full">
        <div className="flex relative">
          <img
            src={Images.brick}
            className="absolute top-7 right-[15%] opacity-20"
          />
          <img
            src={Images.brick}
            className="absolute top-7 right-[42%] opacity-20"
          />
          <img
            src={Images.brick}
            className="absolute top-7 left-[15%] opacity-20"
          />
        </div>
        <div className="z-10 relative">
          <img
            src={Images.brick}
            className="absolute top-16 left-8 opacity-20"
          />
          <img
            src={Images.brick}
            className="absolute top-16 right-8 opacity-20"
          />
        </div>
        <div className="flex mt-14 z-20 relative">
          <div
            className="bg-white rounded-full w-10 h-10 mx-3 flex justify-center items-center"
            onClick={() => navigate("/")}
          >
            <img src={Images.home2} className="object-contain w-5 h-5" />
          </div>
          <div
            className="flex-1 flex flex-col items-center justify-center pr-16"
            onClick={() => refListBaby.current?.setShow(true)}
          >
            <div className="flex items-center">
              <p className="text-white uppercase font-bold text-base mr-1 w-auto max-w-[200px] line-clamp-1">
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
            <span className="flex text-white text-center font-sm text-xs">
              {showAgeByMonth(selectedBaby?.realAge) || "0 tuổi"}
            </span>
          </div>
        </div>
      </div>
      <Page
        className="w-full h-full pb-40 bg-[#E9F6FF]"
        hideScrollbar
        ref={listInnerRef}
        onScroll={onScroll}
      >
        <div className="bg-white py-2 px-3">
          <div className="flex flex-1 justify-between items-center">
            <span className="text-lg">Đặt câu hỏi miễn phí</span>
            <div className="flex items-center rounded-lg bg-[#BBE8FB] w-[115px] h-[19px]">
              <svg
                className="ml-2"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
              >
                <path
                  d="M5 10C6.32608 10 7.59785 9.47322 8.53553 8.53553C9.47322 7.59785 10 6.32608 10 5C10 3.67392 9.47322 2.40215 8.53553 1.46447C7.59785 0.526784 6.32608 0 5 0C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5C0 6.32608 0.526784 7.59785 1.46447 8.53553C2.40215 9.47322 3.67392 10 5 10ZM4.21875 6.5625H4.6875V5.3125H4.21875C3.95898 5.3125 3.75 5.10352 3.75 4.84375C3.75 4.58398 3.95898 4.375 4.21875 4.375H5.15625C5.41602 4.375 5.625 4.58398 5.625 4.84375V6.5625H5.78125C6.04102 6.5625 6.25 6.77148 6.25 7.03125C6.25 7.29102 6.04102 7.5 5.78125 7.5H4.21875C3.95898 7.5 3.75 7.29102 3.75 7.03125C3.75 6.77148 3.95898 6.5625 4.21875 6.5625ZM5 2.5C5.16576 2.5 5.32473 2.56585 5.44194 2.68306C5.55915 2.80027 5.625 2.95924 5.625 3.125C5.625 3.29076 5.55915 3.44973 5.44194 3.56694C5.32473 3.68415 5.16576 3.75 5 3.75C4.83424 3.75 4.67527 3.68415 4.55806 3.56694C4.44085 3.44973 4.375 3.29076 4.375 3.125C4.375 2.95924 4.44085 2.80027 4.55806 2.68306C4.67527 2.56585 4.83424 2.5 5 2.5Z"
                  fill="#e9636e"
                />
              </svg>
              <span
                className="text-[11px] text-black ml-[2px]"
                onClick={() => navigate("/historyAsk")}
              >
                Câu hỏi tôi đã đặt
              </span>
            </div>
          </div>
          <div onClick={() => navigate("/askQuestions")}>
            <input
              placeholder="Khi con quấy khóc, phải làm gì..."
              className="w-full h-9 pl-4 border border-[#A2B9C0] rounded-lg mt-1 outline-none"
              readOnly
            />
          </div>
          <div className="flex flex-wrap pt-2">
            {!!quesCategory &&
              !!quesCategory?.length &&
              quesCategory.map((item) => {
                return (
                  <div
                    className="rounded-2xl flex justify-center items-center w-auto h-6 border border-[#A2B9C0] my-2 mr-[6px]"
                    key={item.id}
                    onClick={() => navigate("/searchAsk", { state: item })}
                  >
                    <span className="text-xs px-2 py-0 text-[#1a1817] font-normal">
                      {item.content}
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="my-2 mx-2">
          <div className="rounded-lg bg-white py-3 px-3">
            <img src={Images.bannerDoctor} />
            <InfoDoctor2 />
          </div>
        </div>
        {!!myQues && !!myQues?.length && (
          <div className="bg-white pt-2">
            <div className="flex justify-between">
              <div className="flex justify-center items-center">
                <svg
                  className="ml-3"
                  width="14"
                  height="14"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12ZM5.0625 7.875H5.625V6.375H5.0625C4.75078 6.375 4.5 6.12422 4.5 5.8125C4.5 5.50078 4.75078 5.25 5.0625 5.25H6.1875C6.49922 5.25 6.75 5.50078 6.75 5.8125V7.875H6.9375C7.24922 7.875 7.5 8.12578 7.5 8.4375C7.5 8.74922 7.24922 9 6.9375 9H5.0625C4.75078 9 4.5 8.74922 4.5 8.4375C4.5 8.12578 4.75078 7.875 5.0625 7.875ZM6 3C6.19891 3 6.38968 3.07902 6.53033 3.21967C6.67098 3.36032 6.75 3.55109 6.75 3.75C6.75 3.94891 6.67098 4.13968 6.53033 4.28033C6.38968 4.42098 6.19891 4.5 6 4.5C5.80109 4.5 5.61032 4.42098 5.46967 4.28033C5.32902 4.13968 5.25 3.94891 5.25 3.75C5.25 3.55109 5.32902 3.36032 5.46967 3.21967C5.61032 3.07902 5.80109 3 6 3Z"
                    fill="#e9636e"
                  />
                </svg>

                <span className="text-base font-semibold text-black ml-2">
                  Câu hỏi của tôi
                </span>
              </div>
              <div
                className="flex items-center justify-center mr-2"
                onClick={() => navigate("/historyAsk")}
              >
                <span className="text-[10px] font-semibold">{`Lịch sử câu hỏi >`}</span>
              </div>
            </div>
            <div>
              {!!myQues && !!myQues?.length && (
                <Swiper slidesPerView={1.5}>
                  {myQues.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <ItemAsk item={item} infoDoctor={false} img />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              )}
            </div>
          </div>
        )}
        <div className="pt-3">
          <div className="px-3">
            🔥
            <span className="text-black text-base font-semibold">
              Câu hỏi nổi bật
            </span>
            <div className="pt-0">
              {!!outstandingQues && !!outstandingQues?.length && (
                <Swiper slidesPerView={1.4}>
                  {outstandingQues.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <ItemAsk item={item} infoDoctor={false} img />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              )}
            </div>
          </div>
        </div>
        {!!dataAsk &&
          !!dataAsk.length &&
          dataAsk.map((item, index) => {
            return <ItemAsk item={item} key={index} infoDoctor={true} img />;
          })}
        {isLoading && <SpinLoad />}
      </Page>
      <ShowListBaby ref={refListBaby} />
    </div>
  );
};
export default AskDoctor;
