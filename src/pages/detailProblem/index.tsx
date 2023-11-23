import React, { useContext } from "react";
import { Box, Page } from "zmp-ui";
import Images from "../../static";
import { useLocation, useNavigate } from "react-router-dom";
import {
  HandbookProblem,
  QuestionProblem,
} from "../../types/detailProblem.type";
import { API_URL_IMAGE } from "../../constants/utils";
import HeaderProblem from "./header";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import SwiperSlideHeader from "./swiper";
import detailProblemApi from "../../apis/detailProblem.apis";
import { AppContext } from "../../contexts/app.context";
import { showTimeAgo } from "../../module";
import SpinLoad from "../../components/spinLoad";
import ItemProductShop from "../../components/itemProductShop";
import { IProductShop } from "../../types/shop.types";
import ModalAddProduct from "../shop/modalAddProduct";
import ModaNotify from "../../components/modaNotify";

const ItemHandBook = ({ onClick, title, image }) => {
  return (
    <div
      className="items-center flex flex-col justify-center "
      onClick={onClick}
    >
      <img
        src={image}
        className="w-[100%] h-16 object-cover self-start rounded-lg mb-3"
      />
      <p className="text-[12px] leading-[20px] text-[#376464] line-clamp-2">
        {title}
      </p>
    </div>
  );
};
const DetailProblem = () => {
  const { selectedBaby } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const title = location.state.title;
  const data = location.state;
  const [dataProduct, setDataProduct] = React.useState<IProductShop[]>([]);
  const [dataHandbook, setDataHandbook] = React.useState<HandbookProblem[]>([]);
  const [contentQues, setContentQues] = React.useState("");
  const [dataQues, setDataQues] = React.useState<QuestionProblem[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const refModalAddProduct = React.useRef(null);
  const [showAlert, setShowAlert] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const [itemProductChoose, setItemProductChoose] =
    React.useState<IProductShop>();
  const getDataDetail = async () => {
    try {
      setIsLoading(true);
      const res = await detailProblemApi.getDetailProblem(data?.id);
      if (res.status) {
        setIsLoading(false);
        setDataProduct(res.data.product);
        setDataHandbook(res.data.handbook);
      } else {
        setIsLoading(true);
        setDescription("Có lỗi xảy ra");
        setShowAlert(true);
      }
    } catch (e) {
      console.error(e);
      setIsLoading(true);
    } finally {
      setIsLoading(false);
    }
  };
  const getDataQues = async () => {
    try {
      setIsLoading(true);
      const res = await detailProblemApi.getListQuesProblem(page, data?.id);
      if (res.status) {
        setIsLoading(false);
        setDataQues(res.data.data.data);
      } else {
        setIsLoading(true);
        setDescription("Có lỗi xảy ra");
        setShowAlert(true);
      }
    } catch (e) {
      console.error(e);
      setIsLoading(true);
    } finally {
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    getDataDetail();
  }, []);
  React.useEffect(() => {
    getDataQues();
  }, []);
  const createQuesProblem = async () => {
    let formData = new FormData();
    formData.append("problem_detail_id", data?.id);
    formData.append("content_question", contentQues);
    const res = await detailProblemApi.createQuesProblem(formData);
    if (res.status) {
      setDescription("Gửi câu hỏi thành công");
      setShowAlert(true);
      getDataQues();
      setContentQues("");
    } else {
      setDescription("Có lỗi xảy ra");
      setShowAlert(true);
    }
  };
  return (
    <Box className="h-screen p-0 m-0">
      <HeaderProblem
        onClick={() => navigate(-1)}
        title={title}
        image={`${API_URL_IMAGE}${data?.image}`}
      />
      <Page hideScrollbar className="w-full h-full pb-60 px-2 bg-white">
        {isLoading && <SpinLoad />}
        <SwiperSlideHeader />
        {/* sản phẩm */}
        {dataProduct.length > 0 && (
          <div className="rounded-lg shadow-[0px_2px_4px_0px_rgba(0,_0,_0,_0.25)] px-3 mb-2 mt-3 pt-4">
            <span className="paytoneOne text-[15px] py-0 text-[#332D37]">
              Sản phẩm về{" "}
              <span className="paytoneOne text-[15px] text-[#332D37] lowercase">
                {title}
              </span>
            </span>
            <div className="flex pb-2 overflow-x-scroll no-scrollbar">
              {!!dataProduct &&
                !!dataProduct.length &&
                dataProduct.map((item, i) => {
                  return (
                    <div key={i} className="w-[calc(100%/3)] shrink-0">
                      <ItemProductShop
                        item={item}
                        onClickPlus={(event) => {
                          event.stopPropagation();
                          setItemProductChoose(item);
                          refModalAddProduct.current?.setShowModalAddProduct(
                            true
                          );
                        }}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        )}
        {/* handbook */}
        {dataHandbook.length > 0 && (
          <div className="shadow-[0px_0px_1px_0px_rgba(0,_0,_0,_0.25)] w-full mt-4 rounded-lg">
            <div className="flex items-center justify-center">
              <div className="flex justify-between items-center w-[60%] pt-3">
                <img src={Images.boxShapeBrownBlack} className="w-[35px] h-1" />
                <span className="paytoneOne text-center text-[15px] font-bold text-[#8a838e]">
                  Kiến thức bổ ích
                </span>
                <img
                  src={Images.boxShapeBrownBlack}
                  className="w-[35px] h-1 rotate-180 z-1"
                />
              </div>
            </div>
            <div className="py-3 px-3">
              {!!dataHandbook && !!dataHandbook?.length && (
                <Swiper slidesPerView={3} spaceBetween={8}>
                  {dataHandbook.map((detail, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <ItemHandBook
                          image={`${API_URL_IMAGE}${detail.src}`}
                          title={detail.title}
                          onClick={() =>
                            navigate(`/detailHandbook/${detail.id}`, {
                              state: { detail },
                            })
                          }
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              )}
            </div>
          </div>
        )}
        {/* hỏi đáp */}
        <div className="mt-3 h-auto min-h-[485px] shadow-[0px_4px_4px_0px_rgba(194,_194,_194,_0.25)]">
          <div className="flex items-center justify-between rounded-t-xl px-3 pt-2 pb-5 bg-gradient-to-b from-[#3FC4FE] to-transparent">
            <div className="flex items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M11.2579 2.142L10.0714 1.387L9.84544 2.836C9.48575 5.124 8.01402 7.25 6.39069 8.744C3.21277 11.67 2.51692 14.85 3.5009 17.475C4.44251 19.987 6.8323 21.707 9.25788 21.994L9.81908 22.06C8.43115 21.159 7.54039 19.054 7.85112 17.481C8.15808 15.935 9.20515 14.487 11.2164 13.151L12.2305 12.479L12.6091 13.684C12.8322 14.396 13.2183 14.968 13.6109 15.549C13.7992 15.829 13.9904 16.112 14.1655 16.413C14.771 17.458 14.9311 18.62 14.5403 19.773C14.1844 20.821 13.5968 21.645 12.7889 22.102L13.7023 21.994C15.9791 21.725 17.6504 20.898 18.7361 19.515C19.8123 18.144 20.1899 16.379 20.1899 14.5C20.1899 12.75 19.5129 10.946 18.7144 9.445C17.7785 7.687 16.5572 6.227 15.2239 4.812C14.9932 5.302 15.0111 5.5 14.5365 6.287C13.9205 4.5488 12.7637 3.08633 11.2579 2.142Z"
                  fill="#F26091"
                />
              </svg>
              <span className="text-[15px] text-textBold paytoneOne">
                Hỏi - Đáp
              </span>
            </div>
            <div onClick={() => navigate("/allProblemQues")}>
              <span className="text-[#6262620] text-[10px] font-bold">
                Xem tất cả &gt;
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="mt-2 flex justify-between items-center w-[95%]">
              <input
                value={contentQues}
                className="border border-[#CCD3DC] w-full outline-none rounded-l-lg pl-2 h-10 text-[#06164B] text-sm font-semibold placeholder:text-[#828282]"
                placeholder="Đặt câu hỏi để được giải đáp theo vấn đề"
                onChange={(e) => setContentQues(e.target.value)}
              />
              <div
                className="w-10 h-10 rounded-r-lg bg-[#51C6F2] flex items-center justify-center"
                onClick={createQuesProblem}
              >
                <svg
                  className="rotate-45 mr-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15.8325 8.17463L10.109 13.9592L3.59944 9.88767C2.66675 9.30414 2.86077 7.88744 3.91572 7.57893L19.3712 3.05277C20.3373 2.76963 21.2326 3.67283 20.9456 4.642L16.3731 20.0868C16.0598 21.1432 14.6512 21.332 14.0732 20.3953L10.106 13.9602"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          {!!dataQues &&
            !!dataQues.length &&
            dataQues.map((item, i) => {
              if (i >= 3) return;
              return (
                <div className="px-5 pt-3 flex justify-normal" key={i}>
                  <img
                    src={`${selectedBaby?.image}`}
                    className="w-10 h-10 object-cover rounded-full self-start"
                  />
                  <div className="flex flex-1 flex-col items-start pl-2">
                    <span className="text-[15px] font-['Piazzolla'] font-semibold self-start pl-1">
                      {selectedBaby?.name}
                    </span>
                    <div className="bg_message mt-1">
                      <p className="text-sm font-['Piazzolla'] text-black mx-3 my-1 line-clamp-3">
                        {item.content_question}
                      </p>
                    </div>
                    {item.content_answer != "" && (
                      <div className="bg-[#d9d9d9] rounded-lg h-auto w-full min-h-[70px] mt-3 ml-2 py-1 px-2">
                        <span className="text-sm font-['Piazzolla'] text-black">
                          {item.content_answer}
                        </span>
                      </div>
                    )}
                    <span className="text-[#828282] text-[13px] self-end pt-4">
                      {showTimeAgo(item.created_at)}
                    </span>
                    <div className="bg-[#efefef] w-full h-[2px] my-4"></div>
                  </div>
                </div>
              );
            })}
        </div>
      </Page>
      <ModalAddProduct ref={refModalAddProduct} item={itemProductChoose} />
      {showAlert === true ? (
        <ModaNotify
          description={description}
          setPopupVisible={setShowAlert}
          popupVisible={showAlert}
        />
      ) : null}
    </Box>
  );
};

export default DetailProblem;
