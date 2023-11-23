import React from "react";
import { Box, Page } from "zmp-ui";
import Header from "../../../components/header";
import { useLocation } from "react-router-dom";
import Images from "../../../static";
import handbookApi from "../../../apis/handbook.apis";
import {
  API_URL_IMAGE,
  API_URL_IMAGE_LINEABON,
} from "../../../constants/utils";
import ItemProductHome from "../../../components/itemProductHome";
import { IProductShop } from "../../../types/shop.types";
import SpinLoad from "../../../components/spinLoad";
import ModalAddProduct from "../../shop/modalAddProduct";

const ItemProduct = ({ img, title, use, price, sold, unit }) => {
  return (
    <div className="w-full h-auto flex justify-normal">
      <img src={img} className="w-[88px] h-[88px] object-cover rounded-lg" />
      <div className="mx-2 flex items-center justify-between w-full">
        <div className="flex flex-col items-start">
          <p className="text-[10px] text-black font-semibold">{title}</p>
          <p className="text-[7px] text-[#828282] font-semibold">|{use}</p>
          <p className="text-[10px] text-black font-semibold">
            {price}đ/{unit}
          </p>
          <p className="text-[7px] text-[#828282] font-semibold">
            Đã bán {sold}
          </p>
        </div>
        <div className="w-5 h-5 bg-main rounded-full flex justify-center items-center self-end mb-2">
          <span className="text-white font-semibold text-2xl">+</span>
        </div>
      </div>
    </div>
  );
};

const DetailHandBook = () => {
  const location = useLocation();
  const item = location.state.item;
  const data = location.state.detail;
  const refModalAddProduct = React.useRef(null);
  const [itemProductChoose, setItemProductChoose] =
    React.useState<IProductShop>();
  const [dataProduct, setDataProduct] = React.useState<IProductShop[]>([]);
  const [isPause, setIsPause] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const [lastPage, setLastpage] = React.useState(1);
  const videoRef = React.useRef(null);
  const [seeMore, setSeeMore] = React.useState(false);

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
  const getData = async () => {
    const res = await handbookApi.getArticleDetail(data?.id, page);
    console.log(res);

    if (res.status) {
      const newData = res.data.product.data.map((item) => {
        return {
          ...item,
          active: false,
        };
      });
      setDataProduct(newData);
      setLastpage(res.data.product.last_page);
      if (res.data.product.last_page > res.data.product.current_page) {
        setSeeMore(true);
      }
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
        const res = await handbookApi.getArticleDetail(data?.id, currentPage);
        if (res.status) {
          const newData = res.data.product.data.map((item) => {
            return {
              ...item,
              active: false,
            };
          });
          setDataProduct([...dataProduct, ...newData]);
          if (res.data.product.last_page > res.data.product.current_page) {
            setSeeMore(true);
          }
        } else {
          alert("Có lỗi xảy ra");
        }
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      } finally {
        setSeeMore(false);
        setIsLoading(false);
      }
    }
  };
  React.useEffect(() => {
    getData();
    loadmore();
  }, []);
  return (
    <Box className="h-screen p-0 m-0">
      <Header title={item ? `${item.title}` : "Chi tiết"} />
      <Page hideScrollbar className="w-full h-full pb-40 bg-white px-2 py-3">
        <div className="relative">
          {data.type === 2 && (
            <div className="flex flex-col items-center justify-center">
              <video
                src={`${API_URL_IMAGE_LINEABON}${data.src}`}
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
              src={`${API_URL_IMAGE_LINEABON}${data.image}`}
              className="w-full h-auto rounded-xl object-cover"
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
        <div className="flex items-center justify-between pt-5 w-[180px] max-w-[200px]">
          <span className="text-[9px] font-extrabold text-[#4f4f4f]">
            Sản phẩm theo vấn đề
          </span>
        </div>
        <div className="h-[1px] w-full bg-main mt-1"></div>
        <div className="px-5">
          {/* <div className="flex flex-col items-center px-5 pt-4"> */}
          {!!dataProduct &&
            !!dataProduct.length &&
            dataProduct.map((item, index) => {
              // const isLastItem = index === dataProduct.length - 1;
              return (
                <React.Fragment key={index}>
                  <ItemProductHome
                    item={item}
                    i={index}
                    onClickPlus={(event) => {
                      event.stopPropagation();
                      setItemProductChoose(item);
                      refModalAddProduct.current?.setShowModalAddProduct(true);
                    }}
                  />
                </React.Fragment>
              );
            })}
          {seeMore && (
            <div
              className="w-full h-[30px] bg-[#efefef] rounded-md mt-4 flex items-center justify-center"
              onClick={loadmore}
            >
              <span className="text-[15px] text-main font-semibold">
                Xem thêm
              </span>
            </div>
          )}
        </div>
        {isLoading && <SpinLoad />}
        <ModalAddProduct ref={refModalAddProduct} item={itemProductChoose} />
      </Page>
    </Box>
  );
};

export default DetailHandBook;
