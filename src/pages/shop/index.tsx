import React, { useContext, useRef, useState } from "react";
import { Page, Sheet, Swiper, Tabs } from "zmp-ui";
import Images from "../../static";
import TopProduct from "./topProduct";
import { IListAccess } from "../home/typesHome";
import FlashSale from "./flashSale";
import { useNavigate } from "react-router-dom";
import path from "../../constants/path";
import { useQuery } from "@tanstack/react-query";
import shopApi from "../../apis/shop.apis";
import { API_URL_IMAGE } from "../../constants/utils";
import homeApi from "../../apis/home.apis";
import ItemProductHome from "../../components/itemProductHome";
import { BtnAccessHome, TitleHome } from "../home";
import { IProductShop } from "../../types/shop.types";
import ModalAddProduct from "./modalAddProduct";
import { AppContext } from "../../contexts/app.context";
import { showAgeByMonth } from "../../module";
import cartApi from "../../apis/cart.apis";
import ItemBigBuyAgain from "./itemBigBuyAgain";
const width = window.innerWidth;
const TitleShop = ({
  icon,
  title,
  titleMore,
  clickMore,
}: {
  icon: any;
  title: string;
  titleMore: string;
  clickMore: () => void;
}) => {
  return (
    <div className="flex items-center justify-between border-t-4 border-t-[#f3f3f3] pl-2 ">
      <div className="flex items-center">
        <img src={icon} className="w-6 h-6 object-contain" />
        <span className="text-textBold font-medium text-[15px] flex-1">
          {title}
        </span>
      </div>
      <div className="pr-2 pl-5 py-3" onClick={clickMore}>
        <span className="text-[#626262] text-xs font-normal">
          {titleMore} {">"}
        </span>
      </div>
    </div>
  );
};

const Shop = () => {
  const { selectedBaby } = useContext(AppContext);
  const [itemProductChoose, setItemProductChoose] =
    React.useState<IProductShop>();
  const refModalAddProduct = React.useRef(null);

  const navigate = useNavigate();
  const { data: dataShop, isLoading } = useQuery({
    queryKey: ["dataShop"],
    queryFn: () => {
      return shopApi.getDataShop();
    },
  });
  const { data: dataCategory } = useQuery({
    queryKey: ["dataCategory"],
    queryFn: () => {
      return shopApi.getCategoryShop();
    },
    staleTime: 1 * 60 * 1000,
  });
  const { data: dataListShoppingHome } = useQuery({
    queryKey: ["dataListShoppingHome"],
    queryFn: () => {
      return homeApi.listShoppingHome();
    },
    // enabled: Boolean(product),
  });
  const { data: dataBuyAgain } = useQuery({
    queryKey: ["dataBuyAgain"],
    queryFn: () => {
      return cartApi.getListOrderComplete(1);
    },
  });

  return (
    <div className="flex flex-col w-full h-full bg-[#F7F8FD] relative">
      <div className="bg-main pt-14 pb-4">
        {/* header  */}
        <div className="flex items-center px-2">
          <div
            className="relative p-2"
            onClick={() => navigate(`${path.cart}`)}
          >
            <img src={Images.iconCart} className="w-6 h-6 object-contain" />
            {/* <div className="w-4 h-4 rounded-full flex items-center justify-center bg-white absolute top-0 right-0">
              <p className="text-center text-xs font-['Nunito'] font-bold text-[#f26091]">
                2
              </p>
            </div> */}
          </div>
          <div
            className="text-center text-sm font-['Nunito'] font-bold  text-white w-full pr-8"
            onClick={() => navigate(`${path.home}${24}`)}
          >
            {selectedBaby?.name} -{" "}
            {showAgeByMonth(selectedBaby?.realAge) || "0 tuổi"}
          </div>
        </div>
      </div>
      {/* main  */}
      <Page
        className="flex-1 w-full h-full pt-0  bg-white mt-[-1px]"
        hideScrollbar
      >
        {/* tìm kiếm  */}
        <div className="pb-44">
          <div
            onClick={() => navigate(path.searchProduct)}
            className="mx-2 my-4 border-solid border-[#c3dbe5] overflow-hidden bg-white flex flex-row justify-start gap-2 h-10 items-center px-4 border rounded"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clipPath="url(#clip0_1054_6164)">
                <path
                  d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z"
                  fill="#8F90A6"
                />
              </g>
              <defs>
                <clipPath id="clip0_1054_6164">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="text-sm font-['Nunito'] text-[#8e90a5]">
              Nhập tên sản phầm cần tìm
            </div>
          </div>
          {/* banner  */}
          <div className="px-2">
            {!!dataShop &&
              !!dataShop.data &&
              !!dataShop.data.banner &&
              dataShop.data.banner.length === 1 && (
                <img
                  src={`${API_URL_IMAGE}${dataShop.data.banner[0].image}`}
                  className="w-full h-[150px] object-cover rounded-2xl"
                />
              )}
            {!!dataShop &&
              !!dataShop.data &&
              !!dataShop.data.banner &&
              dataShop.data.banner.length > 1 && (
                <Swiper autoplay duration={2000} loop>
                  {dataShop.data.banner.map((item, index) => {
                    return (
                      <Swiper.Slide key={item.id}>
                        <img
                          src={`${API_URL_IMAGE}${item.image}`}
                          className="w-full h-[150px] object-cover rounded-2xl"
                        />
                      </Swiper.Slide>
                    );
                  })}
                </Swiper>
              )}
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between pl-2">
              <p className="text-sm font-['Nunito'] font-bold text-[#333333]">
                DANH MỤC SẢN PHẨM
              </p>
              <p
                className="text-right text-xs font-['Nunito'] font-bold text-[#616161 pl-6 pr-2"
                onClick={() => navigate(path.listCategory)}
              >
                Xem thêm
                {"  "}
                &#62;
              </p>
            </div>
            <div className="grid grid-cols-5 bg-white rounded-xl px-2 pt-4 pb-3 items-start justify-center">
              {!!dataCategory &&
                !!dataCategory.data &&
                !!dataCategory.data.data &&
                !!dataCategory.data.data.length &&
                dataCategory.data.data.map((item, index) => {
                  if (index >= 10) return;
                  return (
                    <div
                      className="flex flex-col items-center justify-center mb-1"
                      key={item.id}
                      onClick={() =>
                        navigate(path.category, { state: item.id })
                      }
                    >
                      <img
                        src={
                          item.image
                            ? `${API_URL_IMAGE}${item.image}`
                            : Images.iconPresent
                        }
                        className="w-14 h-14 object-cover rounded-md"
                      />
                      <p className="text-center text-xs font-['Nunito'] font-semibold text-[#828282] mt-1 h-8 mx-1 line-clamp-2">
                        {item.name}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
          {/* mua lai  */}
          {!!dataBuyAgain &&
            !!dataBuyAgain.data &&
            !!dataBuyAgain.data.data &&
            !!dataBuyAgain.data.data.data &&
            !!dataBuyAgain.data.data.data.length && (
              <div>
                <div className="flex items-center pl-2">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="red">
                    <path
                      d="M11.2619 22.1044L11.2864 18.1045C11.289 17.6945 11.631 17.3566 12.041 17.3591C12.451 17.3616 12.7889 17.7037 12.7864 18.1137L12.7618 22.1136C12.7593 22.5236 12.4172 22.8615 12.0073 22.859C11.5973 22.8565 11.2594 22.5144 11.2619 22.1044Z"
                      fill="#626262"
                    />
                    <path
                      d="M20.281 14.1796C20.9079 13.0635 20.7567 11.6325 19.8557 10.1669L18.0436 7.23576C17.9249 7.03502 17.8563 6.8046 17.8577 6.5746L17.8634 5.64462L17.8665 5.14463C17.8813 2.72468 16.5595 1.38653 14.1396 1.37167L10.1396 1.34711C7.71968 1.33225 6.38154 2.65405 6.36668 5.07401L6.36361 5.574L6.3579 6.50398C6.35648 6.73398 6.28507 6.96354 6.16385 7.1628L4.31595 10.0715C3.76056 10.9481 3.48528 11.8064 3.48037 12.6064C3.47717 13.1264 3.5941 13.6271 3.84133 14.0787C4.45451 15.1925 5.74067 15.8204 7.46064 15.8309L16.6405 15.8873C18.3604 15.8979 19.6542 15.2858 20.281 14.1796Z"
                      fill="#626262"
                    />
                  </svg>
                  <p className="text-sm font-['Nunito'] font-semibold  text-[#333333] flex-1 ml-2 uppercase">
                    Mua lại nhanh chóng
                  </p>
                  <div
                    onClick={() => navigate(path.listBuyAgain)}
                    className="text-right text-xs font-['Nunito'] font-bold  text-[#616161] pr-2 pl-4"
                  >
                    Xem tất cả
                    {"  "}
                    &#62;
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-6 px-6 py-2">
                  {dataBuyAgain.data.data.data.map((item) => {
                    return <ItemBigBuyAgain item={item} key={item.id} />;
                  })}
                </div>
              </div>
            )}
          {/* flash sale  */}
          {!!dataShop &&
            !!dataShop.data &&
            !!dataShop?.data?.product_sale &&
            !!dataShop.data.product_sale.length && (
              <div>
                <div className="flex items-center">
                  <div className="flex items-center pl-2 py-2 flex-1">
                    <img
                      src={Images.iconBurn}
                      className="w-6 h-6 mr-2 object-contain"
                    />
                    <p className="text-sm font-['Nunito'] font-semibold">
                      FLASH SALE
                    </p>
                  </div>
                  <p
                    onClick={() => navigate(path.topProduct, { state: 2 })}
                    className="text-xs font-['Nunito'] font-bold pr-2 pl-4 py-2 text-[#616161]"
                  >
                    Xem thêm
                    {"  "}
                    &#62;
                  </p>
                </div>
                <div className="w-full px-2 rounded-xl overflow-hidden">
                  <img
                    src={Images.bannerFlashSale}
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <FlashSale data={dataShop?.data?.product_sale} />
              </div>
            )}
          {/* shopping  */}
          {!!dataListShoppingHome &&
            !!dataListShoppingHome.data &&
            !!dataListShoppingHome?.data.data &&
            !!dataListShoppingHome.data.data.length &&
            dataListShoppingHome.data.data.map((item, index) => {
              return (
                <div className="bg-white rounded-xl my-4" key={index}>
                  <TitleHome
                    icon={
                      item.icon
                        ? `${API_URL_IMAGE}${item.icon}`
                        : Images.iconoBottleMilk
                    }
                    title={item.name}
                    titleMore="Xem thêm"
                    onClick={() => navigate(path.listProduct, { state: item })}
                  />
                  <div>
                    <div className="px-2 pb-4">
                      <img
                        src={
                          item.banner
                            ? `${API_URL_IMAGE}${item.banner}`
                            : Images.bannerDrinkHome
                        }
                        className="w-full h-auto my-2"
                      />
                      {!!item &&
                        !!item.product &&
                        !!item.product.length &&
                        item.product.map((element, i) => {
                          if (i > 2) return;
                          return (
                            <ItemProductHome
                              item={element}
                              key={element.id}
                              i={i}
                              onClickPlus={(event) => {
                                event.stopPropagation();
                                setItemProductChoose(element);
                                refModalAddProduct.current?.setShowModalAddProduct(
                                  true
                                );
                              }}
                            />
                          );
                        })}
                      <BtnAccessHome
                        onClick={() =>
                          navigate(path.listProduct, { state: item })
                        }
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          <div className="w-full items-end justify-center flex border-t-4 border-t-[#f3f3f3] pt-2 pb-8">
            <img src={Images.imgFoot} className="w-[80%] h-auto" />
          </div>
        </div>
      </Page>
      <ModalAddProduct ref={refModalAddProduct} item={itemProductChoose} />
    </div>
  );
};
export default Shop;
