import React from "react";
import Header from "../../components/header";
import { Page, Swiper, Switch } from "zmp-ui";
import Images from "../../static";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import detailProductApi from "../../apis/detailProduct";
import { API_URL_IMAGE } from "../../constants/utils";
import {
  IComboDetailProduct,
  IDetailProduct,
  IProductSimilar,
  IVariant,
} from "../../types/detailProduct.types";
import { formatDecimalNumber } from "../../utils/Utilities";
import ItemProductHome from "../../components/itemProductHome";
import ModalAddProduct from "../shop/modalAddProduct";
import { IProductShop } from "../../types/shop.types";
import { baseUrl } from "../../api";
import cartApi from "../../apis/cart.apis";
import path from "../../constants/path";
import LoadingPage from "../loadingScreen";
import { openChat } from "zmp-sdk/apis";
import ModaNotify from "../../components/modaNotify";
const NUMLIMIT = 250;
export default function DetailProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dataProduct, setDataProduct] = React.useState<IDetailProduct>();
  const [dataCombo, setDataCombo] = React.useState<IComboDetailProduct>();
  const [dataSimilar, setDataSimilar] = React.useState<IProductSimilar[]>([]);
  const [dataVariant, setDataVariant] = React.useState<IVariant[]>([]);
  const [idVariant, setIdVariant] = React.useState(-1);
  const [money, setMoney] = React.useState(0);
  const [moneyBase, setMoneyBase] = React.useState(0);
  const [showMore, setShowmore] = React.useState(false);
  const [height, setHeight] = React.useState<string | number>(150);
  const [showAlert, setShowAlert] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const [itemProductChoose, setItemProductChoose] =
    React.useState<IProductShop>();
  const refModalAddProduct = React.useRef(null);
  const { data, isLoading } = useQuery({
    queryKey: ["detailProduct", id],
    queryFn: () => {
      return detailProductApi.getDetailProduct(Number(id));
    },
    onSuccess: (res) => {
      setDataProduct(res.data.data);
      setDataCombo(res.data.combo);
      setDataSimilar(res.data.product_similar.data);
      setDataVariant(res.data.product_variant);
      if (
        !!res &&
        !!res.data &&
        !!res.data.product_variant &&
        !!res.data.product_variant.length
      ) {
        setMoneyBase(res.data.product_variant[0].money_base);
        setMoney(res.data.product_variant[0].money);
        setIdVariant(res.data.product_variant[0].id);
      } else {
        setMoneyBase(res.data.data.money_base);
        setMoney(res.data.data.money);
      }
    },
    enabled: Boolean(id),
  });
  const clickItemVariant = (item) => {
    setIdVariant(item.id);
    setMoney(item.money);
    setMoneyBase(item.money_base);
  };
  const buyNow = useMutation({
    mutationFn: () =>
      cartApi.addToCart({
        product_id: id,
        quantity: 1,
        product_variant_id: idVariant === -1 ? "" : idVariant,
        type: 1,
      }),
    onSuccess: () => {
      navigate(path.cart);
    },
    onError: (e) => {
      setDescription("Thử lại sau");
      setShowAlert(true);
      console.log("error comment", e);
    },
  });
  const openChatScreen = async () => {
    try {
      await openChat({
        type: "oa",
        id: "3995727626295309125",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const buyCombo = useMutation({
    mutationFn: (id: number) => cartApi.buyCombo(id),
    onSuccess: () => {
      setDescription("Đã thêm combo vào giỏ hàng");
      setShowAlert(true);
    },
    onError: (e) => {
      setDescription("Thử lại sau");
      setShowAlert(true);
      console.log("error comment", e);
    },
  });

  return (
    <div className="flex flex-col w-full h-full bg-white relative">
      <Header title="THÔNG TIN SẢN PHẨM" />
      <div className="w-full h-full relative overflow-y-auto bg-[#f5f5f5] no-scrollbar">
        {!!data &&
          !!data.data &&
          !!data.data.image &&
          data.data.image.length === 0 && (
            <div className="w-full pt-[100%] relative">
              <img
                src={`${API_URL_IMAGE}${data.data?.data?.image}`}
                className="w-full h-auto object-cover absolute top-0"
              />
            </div>
          )}
        {!!data &&
          !!data.data &&
          !!data.data.image &&
          data.data.image.length === 1 && (
            <div className="w-full pt-[100%] relative">
              <img
                src={`${API_URL_IMAGE}${data.data.image[0].image}`}
                className="w-full h-auto object-cover absolute top-0"
              />
            </div>
          )}
        {!!data &&
          !!data.data &&
          !!data.data.image &&
          data.data.image.length > 1 && (
            <Swiper autoplay={true} duration={2000} loop dots={false}>
              {data.data.image.map((item, index) => {
                return (
                  <Swiper.Slide key={item.id}>
                    <img
                      src={`${API_URL_IMAGE}${item.image}`}
                      className="w-full h-auto object-cover"
                    />
                  </Swiper.Slide>
                );
              })}
            </Swiper>
          )}
        <div className="bg-white rounded-t-2xl pt-4 pb-2 w-full z-50">
          <p className="text-base font-['Nunito'] text-black font-semibold  ml-2">
            {dataProduct?.name}
          </p>
          <div className="flex gap-1 items-center my-1 ml-2">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <g clipPath="url(#clip0_795_2207)">
                <path
                  d="M5.84791 0.621328L7.00463 3.25961C7.04814 3.3589 7.1175 3.44469 7.20548 3.50803C7.29345 3.57137 7.39682 3.60993 7.50478 3.61969L10.3227 3.87234C10.6415 3.91875 10.7687 4.30977 10.5375 4.53492L8.41486 6.31812C8.24299 6.4625 8.16478 6.68937 8.21205 6.90852L8.82908 9.79688C8.88322 10.114 8.55064 10.3563 8.26533 10.2059L5.8058 8.76562C5.71304 8.71118 5.60742 8.68248 5.49986 8.68248C5.3923 8.68248 5.28669 8.71118 5.19392 8.76562L2.73439 10.2051C2.44994 10.3546 2.1165 10.1131 2.17064 9.79602L2.78767 6.90766C2.83408 6.68852 2.75674 6.46164 2.58486 6.31727L0.461346 4.53578C0.231033 4.31148 0.358221 3.91961 0.676189 3.8732L3.49408 3.62055C3.60204 3.61079 3.70541 3.57223 3.79339 3.50889C3.88136 3.44555 3.95073 3.35976 3.99424 3.26047L5.15096 0.622188C5.29447 0.333438 5.70525 0.333438 5.84791 0.621328Z"
                  fill="#FDD835"
                />
                <path
                  d="M5.76375 3.41774L5.56782 1.47384C5.56008 1.36556 5.53774 1.17993 5.71133 1.17993C5.84883 1.17993 5.9236 1.4661 5.9236 1.4661L6.51141 3.02673C6.73313 3.62056 6.64204 3.82423 6.42805 3.94454C6.18227 4.08204 5.81961 3.97462 5.76375 3.41774Z"
                  fill="#FFFF8D"
                />
                <path
                  d="M8.18791 6.1454L9.874 4.8297C9.95736 4.76009 10.1077 4.64923 9.98744 4.5229C9.89205 4.42322 9.63423 4.56673 9.63423 4.56673L8.15869 5.14337C7.71869 5.29548 7.4265 5.52064 7.40072 5.80423C7.3672 6.18236 7.70665 6.47369 8.18791 6.1454Z"
                  fill="#F4B400"
                />
              </g>
              <defs>
                <clipPath id="clip0_795_2207">
                  <rect width="11" height="11" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="text-xs font-['Nunito'] text-black">5</div>
            <div className="bg-[#828282] w-[1px] h-3" />
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M0.805385 1.5746C0.702606 1.57301 0.603307 1.61182 0.528846 1.68268C0.457492 1.75458 0.417452 1.85177 0.417452 1.95306C0.417452 2.05436 0.457492 2.15155 0.528846 2.22345L3.16115 4.85576C3.19565 4.89064 3.23683 4.91819 3.28224 4.93676C3.32764 4.95533 3.37633 4.96454 3.42538 4.96383C3.52269 4.96383 3.62769 4.92999 3.70192 4.85576C3.77337 4.78391 3.81347 4.6867 3.81347 4.58537C3.81347 4.48404 3.77337 4.38684 3.70192 4.31499L1.06962 1.68268C1.03508 1.64785 0.993888 1.62033 0.948492 1.60177C0.903096 1.5832 0.854427 1.57396 0.805385 1.5746ZM9.19462 1.5746C9.14557 1.57396 9.0969 1.5832 9.05151 1.60177C9.00611 1.62033 8.96492 1.64785 8.93038 1.68268L6.29808 4.31499C6.22663 4.38684 6.18652 4.48404 6.18652 4.58537C6.18652 4.6867 6.22663 4.78391 6.29808 4.85576C6.37231 4.92999 6.47731 4.96383 6.57462 4.96383C6.62367 4.96454 6.67236 4.95533 6.71776 4.93676C6.76317 4.91819 6.80435 4.89064 6.83885 4.85576L9.47115 2.22345C9.54251 2.15155 9.58255 2.05436 9.58255 1.95306C9.58255 1.85177 9.54251 1.75458 9.47115 1.68268C9.39669 1.61182 9.29739 1.57301 9.19462 1.5746ZM0.384615 4.23076C0.172692 4.23076 0 4.40345 0 4.61537V5.76922C0 5.98114 0.172692 6.15383 0.384615 6.15383H0.769231V6.53845C0.769231 6.57268 1.53846 9.61537 1.53846 9.61537C1.65269 9.8196 1.74885 9.99999 1.92308 9.99999H8.07692C8.28885 9.99999 8.37154 9.83152 8.46154 9.61537C8.46154 9.61537 9.23077 6.57268 9.23077 6.53845V6.15383H9.61539C9.82731 6.15383 10 5.98114 10 5.76922V4.61537C10 4.40345 9.82731 4.23076 9.61539 4.23076H8.04077L7.05538 5.21652C6.90538 5.36652 6.70231 5.45652 6.49038 5.45652C6.27885 5.45652 6.08769 5.36691 5.93731 5.21652C5.8088 5.08962 5.72794 4.92231 5.70832 4.74277C5.68871 4.56323 5.73154 4.38242 5.82962 4.23076H4.17077C4.26879 4.38246 4.31156 4.5633 4.29188 4.74284C4.27219 4.92238 4.19126 5.08966 4.06269 5.21652C3.91269 5.36652 3.72115 5.45652 3.50962 5.45652C3.29693 5.4545 3.09374 5.36819 2.94462 5.21652L1.95923 4.23076H0.384615ZM3.46154 6.15383C3.67346 6.15383 3.84615 6.32652 3.84615 6.53845V8.84614C3.84615 9.05806 3.67346 9.23075 3.46154 9.23075C3.24962 9.23075 3.07692 9.05806 3.07692 8.84614V6.53845C3.07692 6.32652 3.24962 6.15383 3.46154 6.15383ZM5 6.15383C5.21192 6.15383 5.38462 6.32652 5.38462 6.53845V8.84614C5.38462 9.05806 5.21192 9.23075 5 9.23075C4.78808 9.23075 4.61538 9.05806 4.61538 8.84614V6.53845C4.61538 6.32652 4.78808 6.15383 5 6.15383ZM6.53846 6.15383C6.75038 6.15383 6.92308 6.32652 6.92308 6.53845V8.84614C6.92308 9.05806 6.75038 9.23075 6.53846 9.23075C6.32654 9.23075 6.15385 9.05806 6.15385 8.84614V6.53845C6.15385 6.32652 6.32654 6.15383 6.53846 6.15383Z"
                fill="#828282"
              />
            </svg>
            <p className="text-xs font-['Nunito'] text-[#828282] ">
              Đã bán {dataProduct?.quantity_sold}
            </p>
          </div>
          <p className="text-xs font-['Nunito'] font-bold text-[#828282] ml-2 line-through">
            {formatDecimalNumber(moneyBase)}đ / {dataProduct?.unit}
          </p>
          <p className="text-base font-['Nunito'] font-bold text-main ml-2">
            {formatDecimalNumber(money)}đ / {dataProduct?.unit}
          </p>
          <div className="w-full h-2 bg-[#ebebeb] my-2"></div> {/* line */}
          {/*phân loại  */}
          {!!dataVariant && dataVariant.length ? (
            <div>
              <p className="text-sm font-['Nunito'] font-semibold ml-2">
                Phân loại
              </p>
              <div className="flex flex-wrap w-full px-2 pt-2">
                {!!dataVariant &&
                  !!dataVariant.length &&
                  dataVariant.map((item) => {
                    return (
                      <div
                        key={item.id}
                        onClick={() => clickItemVariant(item)}
                        className="mr-4 mb-2 px-2 py-[5px] border-solid flex items-center justify-center border-[#cfcfcf] border rounded"
                        style={{
                          minWidth: 100,
                          borderColor:
                            item.id === idVariant ? "red" : "#cfcfcf",
                        }}
                      >
                        <span
                          className="text-xs font-medium text-[#565656]"
                          style={{
                            color: item.id === idVariant ? "red" : "#cfcfcf",
                          }}
                        >
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
              </div>
              <div className="w-full h-2 bg-[#ebebeb] my-2" /> {/* line */}
            </div>
          ) : (
            <div />
          )}
          {/* combo  */}
          {!!dataCombo && !!dataProduct && (
            <div>
              <p className="text-sm font-['Nunito'] font-semibold ml-2">
                Combo được yêu thích
              </p>
              <div className="flex items-center pl-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2.25013 2.25019C3.99951 1.37569 5.43763 2.43769 6.00013 3.18769C6.56263 2.43769 8.00076 1.37569 9.75013 2.25019C12.0001 3.37519 11.4376 6.18769 9.75013 7.87519C8.92663 8.69869 7.47651 10.1488 6.41601 10.9554C6.29754 11.0454 6.15221 11.0929 6.00347 11.0901C5.85472 11.0873 5.71127 11.0344 5.59626 10.9401C4.62388 10.1552 3.06201 8.68706 2.25013 7.87519C0.562634 6.18769 0.00013411 3.37519 2.25013 2.25019Z"
                    fill="#F8312F"
                  />
                  <path
                    d="M6.00013 3.1875V4.33125C6.47638 3.32437 7.65951 1.98 9.62188 2.18887C7.93063 1.42762 6.54876 2.45587 6.00013 3.1875ZM4.47988 2.07637C3.84763 1.85625 3.08451 1.83262 2.25013 2.25C0.00013411 3.375 0.562634 6.1875 2.25013 7.875C3.06201 8.68687 4.62388 10.155 5.59626 10.9399C5.71131 11.0342 5.85479 11.087 6.00353 11.0897C6.15227 11.0924 6.29759 11.0449 6.41601 10.9549C6.51126 10.8825 6.60951 10.8049 6.71038 10.7231C5.64013 9.9195 4.13788 8.6535 3.32226 7.92487C1.46338 6.26325 0.843509 3.49425 3.32226 2.3865C3.68835 2.21987 4.07952 2.11507 4.47988 2.07637Z"
                    fill="#CA0B4A"
                  />
                  <path
                    d="M7.90744 6.27542C8.4161 6.5691 9.22981 6.11201 9.7249 5.2545C10.22 4.39698 10.209 3.46375 9.70031 3.17007C9.19165 2.87639 8.37795 3.33348 7.88286 4.191C7.38777 5.04851 7.39878 5.98174 7.90744 6.27542Z"
                    fill="#F37366"
                  />
                </svg>
                <p className="text-xs font-['Nunito'] text-[#828282] ml-2">
                  390 người yêu thích combo này
                </p>
              </div>
              <div className="flex w-full pr-4 py-1 items-center justify-between overflow-x-scroll no-scrollbar">
                <div className="flex flex-col items-center justify-center w-[30%] shrink-0">
                  <img
                    src={
                      dataProduct?.image
                        ? `${API_URL_IMAGE}${dataProduct.image}`
                        : Images.bannerDrinkHome
                    }
                    className=" h-[85px] w-[85px] object-cover rounded-lg"
                  />
                  <span className="text-center text-sm text-[#828282] font-['Nunito'] font-semibold w-full mt-1">
                    {formatDecimalNumber(dataProduct?.money)} đ
                  </span>
                </div>
                <div className="flex items-center justify-center w-[10%] pl-2 shrink-0">
                  <span className="text-3xl font-['Nunito'] font-semibold mb-5">
                    +
                  </span>
                </div>
                <div className="flex items-center flex-1">
                  {!!dataCombo &&
                    !!dataCombo.data_product &&
                    !!dataCombo.data_product.length &&
                    dataCombo.data_product.map((item, index) => {
                      return (
                        <div
                          className="flex flex-col items-center justify-center ml-5 shrink-0"
                          key={item.id}
                        >
                          <img
                            src={
                              item.infor_product?.image
                                ? `${baseUrl}${item.infor_product?.image}`
                                : Images.bannerDrinkHome
                            }
                            className=" h-[85px] w-[85px] object-cover rounded-lg"
                          />
                          <span className="text-center text-sm font-['Nunito'] text-[#828282] font-semibold w-full mt-1">
                            {formatDecimalNumber(item.infor_product?.money)}
                          </span>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="w-[90%] h-[1px] bg-[#D9D9D9] mx-auto"></div>
              {!!dataCombo && !!dataCombo.money && (
                <div className="flex items-center justify-between px-2 py-2">
                  <p className="text-sm font-['Nunito'] font-semibold  text-[#d60013]">
                    Giá combo: {formatDecimalNumber(dataCombo?.money)} đ
                  </p>
                  <div
                    onClick={() => buyCombo.mutate(dataCombo?.id)}
                    className="bg-[#f26091] flex items-center justify-center rounded-lg w-[30%] py-2"
                  >
                    <p className="text-center text-sm font-['Nunito'] font-semibold text-white">
                      Mua ngay
                    </p>
                  </div>
                </div>
              )}
              <div className="w-full h-2 bg-[#ebebeb] my-2"></div>
            </div>
          )}
          {/* mô tả  */}
          <p className="text-sm font-['Nunito'] font-semibold ml-2">
            Mô tả sản phẩm
          </p>
          {!!dataProduct && !!dataProduct.describe && (
            <div>
              <div
                className="text-[#828282] pb-4 font-bold text-[11px] text-left px-2 mb-2 mt-1, overflow-hidden"
                style={{
                  height:
                    dataProduct?.describe.length < NUMLIMIT ? "auto" : height,
                }}
                dangerouslySetInnerHTML={{ __html: dataProduct?.describe }}
              ></div>
              {/* xem thêm  */}
              {dataProduct?.describe.length >= NUMLIMIT && (
                <div
                  className="flex items-center justify-center w-full py-1"
                  onClick={() => {
                    setShowmore((prev) => !prev);
                    setHeight(showMore ? 150 : "auto");
                  }}
                >
                  <p className="text-center text-sm font-['Nunito'] font-bold  text-main mr-2">
                    {!showMore ? "Xem thêm" : "Thu gọn"}
                  </p>
                  {showMore ? (
                    <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                      <path
                        d="M11.5413 9.08451L7.03705 4.01141L2.36288 8.8993L0.97928 7.33755L7.08955 0.933942L12.9772 7.57966L11.5413 9.08451Z"
                        fill="black"
                        fillOpacity="0.25"
                      />
                    </svg>
                  ) : (
                    <svg width="13" height="6" viewBox="0 0 13 6" fill="none">
                      <path
                        d="M1.45118 0.324091L6.01553 3.78224L10.631 0.362587L12.0331 1.4272L5.99973 5.90715L0.0333272 1.37688L1.45118 0.324091Z"
                        fill="black"
                        fillOpacity="0.25"
                      />
                    </svg>
                  )}
                </div>
              )}
            </div>
          )}
          {/* tương tự  */}
          <p className="text-sm font-['Nunito'] font-semibold ml-2">
            Sản phẩm tương tự
          </p>
          <div className="px-2">
            {!!dataSimilar &&
              !!dataSimilar.length &&
              dataSimilar.map((item, i) => {
                return (
                  <ItemProductHome
                    item={item}
                    key={item.id}
                    i={i}
                    onClickPlus={(event) => {
                      event.stopPropagation();
                      setItemProductChoose(item);
                      refModalAddProduct.current?.setShowModalAddProduct(true);
                    }}
                  />
                );
              })}
            {/* <div className="bg-[#efefef] flex flex-col w-[98%] items-center justify-center mx-auto py-2 my-4 rounded">
              <span className="text-sm font-['Nunito'] font-bold  text-main">
                Xem thêm
              </span>
            </div> */}
          </div>
        </div>
        <div className="h-14" />
      </div>
      <div className="absolute bottom-0 flex items-center w-full border-t border-t-[#dbbdb] z-50 bg-white">
        {/* home  */}
        <div
          onClick={() => navigate(path.home)}
          className="flex-1 max-h-12 flex items-center justify-center"
        >
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
            <mask
              id="mask0_795_2280"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="25"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0H23.663V25H0V0Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_795_2280)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.525 16.6134C14.9147 16.6134 16.046 17.7445 16.046 19.1349V22.7108C16.046 23.0095 16.2838 23.249 16.5885 23.256H18.7886C20.5224 23.256 21.9318 21.854 21.9318 20.1311V9.98932C21.9237 9.39643 21.6432 8.83842 21.1618 8.46758L13.5515 2.35505C12.53 1.54012 11.1009 1.54012 10.0759 2.35737L2.51752 8.46525C2.01771 8.84772 1.73721 9.40573 1.73144 10.0091V20.1311C1.73144 21.854 3.14085 23.256 4.87461 23.256H7.09549C7.40831 23.256 7.66225 23.0061 7.66225 22.6992C7.66225 22.6317 7.67033 22.5643 7.68419 22.5004V19.1349C7.68419 17.7526 8.80848 16.6227 10.1879 16.6134H13.525ZM18.7886 25.0003H16.5677C15.2957 24.9701 14.3145 23.9645 14.3145 22.7113V19.1354C14.3145 18.7064 13.9602 18.3577 13.525 18.3577H10.1937C9.76772 18.36 9.41566 18.7099 9.41566 19.1354V22.6997C9.41566 22.7869 9.40411 22.8706 9.37987 22.9496C9.25521 24.1005 8.27867 25.0003 7.09551 25.0003H4.87463C2.18625 25.0003 0 22.8159 0 20.1317V10.0015C0.011543 8.84591 0.540214 7.78801 1.45327 7.09167L8.99664 0.994246C10.6577 -0.331027 12.9721 -0.331028 14.6296 0.991921L22.2273 7.09515C23.1196 7.77988 23.6482 8.83545 23.6632 9.97704V20.1317C23.6632 22.8159 21.477 25.0003 18.7886 25.0003Z"
                fill="#e9636e"
              />
            </g>
          </svg>
        </div>
        {/* chat  */}
        <div
          onClick={() => openChatScreen()}
          className="flex-1 flex h-12 items-center justify-center border-l border-r border-l-[#DBDBDB] border-r-[#DBDBDB]"
        >
          <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
            <path
              d="M16.8889 11H16.8767M12 11H11.9878M7.11111 11H7.09889M1 11C1 16.5224 5.92556 20.9999 12 20.9999C13.7983 21.0062 15.5753 20.6009 17.2006 19.8137L23 20.9999L21.295 16.3499C22.3742 14.8025 23 12.9675 23 11C23 5.47748 18.0744 1 12 1C5.92556 1 1 5.47748 1 11Z"
              stroke="#e9636e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* cart  */}
        <div
          onClick={() => navigate(path.cart)}
          className="flex-1 flex h-12 items-center justify-center"
        >
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
            <path
              d="M24.6096 0H23.4375V0.373333C21.8058 0.738333 21.5712 2.25292 21.4791 2.83167C21.4354 3.10542 21.3466 3.64083 21.2366 4.29667H0.828182C0.0206766 4.29667 -0.0697406 5.05125 0.0356768 5.46875L2.42986 16.0383C2.53486 16.4558 2.97695 16.7967 3.41028 16.7967H21.3037C21.7346 16.7967 22.0858 17.1471 22.0858 17.5779C22.0858 18.0087 21.7346 18.3592 21.3037 18.3592H1.77277C1.56557 18.3592 1.36685 18.4415 1.22034 18.588C1.07383 18.7345 0.991516 18.9332 0.991516 19.1404C0.991516 19.3476 1.07383 19.5463 1.22034 19.6928C1.36685 19.8394 1.56557 19.9217 1.77277 19.9217H2.78528C2.2964 20.1916 1.88885 20.5876 1.60509 21.0686C1.32133 21.5496 1.17175 22.0978 1.17193 22.6562H1.95319C1.95319 23.95 3.0032 25 4.29695 25C5.59071 25 6.64072 23.95 6.64072 22.6562H7.42197C7.42207 22.0978 7.27241 21.5495 6.98858 21.0686C6.70475 20.5876 6.29714 20.1915 5.80821 19.9217H16.8474C16.3585 20.1915 15.9509 20.5876 15.6671 21.0686C15.3833 21.5495 15.2336 22.0978 15.2337 22.6562H16.0149C16.0265 23.2703 16.2786 23.8553 16.7169 24.2855C17.1553 24.7156 17.745 24.9566 18.3591 24.9566C18.9733 24.9566 19.5629 24.7156 20.0013 24.2855C20.4397 23.8553 20.6917 23.2703 20.7033 22.6562H21.4846C21.4846 22.0978 21.335 21.5496 21.0512 21.0687C20.7675 20.5878 20.36 20.1917 19.8712 19.9217H21.3046C21.9261 19.9213 22.522 19.6743 22.9615 19.2348C23.401 18.7954 23.648 18.1994 23.6483 17.5779C23.6483 17.2701 23.5876 16.9653 23.4697 16.6809C23.3519 16.3965 23.1792 16.1381 22.9614 15.9205C22.7437 15.7028 22.4853 15.5302 22.2008 15.4124C21.9164 15.2947 21.6116 15.2341 21.3037 15.2342H21.0133L22.0125 9.02167C22.2908 7.38083 22.8908 3.83625 23.0317 2.95458C23.1025 2.50917 23.1712 2.19625 23.4375 2.02083V2.34333H24.6096C24.713 2.343 24.812 2.30182 24.8851 2.22877C24.9583 2.15571 24.9996 2.0567 25 1.95333V0.390833C24.9998 0.287318 24.9586 0.188098 24.8854 0.114862C24.8123 0.0416263 24.7131 0.000330137 24.6096 0ZM4.29695 23.8283C3.9862 23.828 3.68826 23.7044 3.46853 23.4847C3.24879 23.2649 3.12519 22.967 3.12486 22.6562H5.46863C5.4683 22.9669 5.34476 23.2648 5.12511 23.4845C4.90546 23.7043 4.60764 23.8279 4.29695 23.8283ZM18.3595 23.8283C18.0487 23.8281 17.7507 23.7046 17.5308 23.4848C17.311 23.2651 17.1874 22.9671 17.187 22.6562H19.5316C19.5311 22.9669 19.4074 23.2647 19.1877 23.4844C18.968 23.7041 18.6702 23.8278 18.3595 23.8283ZM17.3983 6.2475C17.412 6.1416 17.4633 6.04416 17.5429 5.97289C17.6224 5.90163 17.7249 5.86127 17.8316 5.85917H20.3054C20.5204 5.85917 20.67 6.0325 20.6362 6.24542L20.3912 7.81667C20.3587 8.02917 20.155 8.20292 19.9396 8.20292H17.58C17.5303 8.20423 17.4809 8.19477 17.4352 8.17518C17.3895 8.15559 17.3486 8.12634 17.3153 8.08944C17.282 8.05254 17.2571 8.00886 17.2423 7.96141C17.2275 7.91397 17.2231 7.86387 17.2295 7.81458L17.3983 6.2475ZM16.9779 10.1537C16.9919 10.048 17.0432 9.95066 17.1227 9.87944C17.2022 9.80822 17.3045 9.76778 17.4112 9.76542H19.6958C19.9112 9.76542 20.0604 9.93875 20.0279 10.1517L19.8433 11.3325C19.8104 11.545 19.607 11.7188 19.3916 11.7188H17.2012C17.1516 11.7199 17.1022 11.7104 17.0566 11.6907C17.011 11.6711 16.9702 11.6418 16.9369 11.605C16.9036 11.5681 16.8787 11.5245 16.8639 11.4771C16.849 11.4297 16.8445 11.3797 16.8508 11.3304L16.9779 10.1537ZM2.02736 7.82375L1.63152 6.23833C1.57985 6.02917 1.71402 5.85917 1.92944 5.85917H4.87071C5.08654 5.85917 5.28113 6.03375 5.30404 6.2475L5.47238 7.815C5.47862 7.86423 5.47417 7.91423 5.45934 7.96158C5.4445 8.00894 5.41962 8.05253 5.38639 8.0894C5.35317 8.12626 5.31238 8.15552 5.26682 8.17518C5.22126 8.19484 5.17199 8.20445 5.12238 8.20333H2.51361C2.29861 8.20333 2.07944 8.03208 2.02736 7.82375ZM3.39028 11.7188C3.17528 11.7188 2.95611 11.5479 2.90444 11.3396L2.60611 10.145C2.55403 9.93583 2.68736 9.76583 2.90278 9.76583H5.28988C5.50529 9.76583 5.7003 9.94042 5.72321 10.1542L5.84988 11.3308C5.8562 11.3801 5.8518 11.4301 5.83699 11.4775C5.82218 11.5249 5.7973 11.5685 5.76406 11.6054C5.73082 11.6423 5.69001 11.6715 5.64441 11.6912C5.59881 11.7108 5.54951 11.7204 5.49988 11.7192L3.39028 11.7188ZM5.87738 15.2346H4.26695C4.0507 15.2346 3.83278 15.0637 3.7807 14.8554L3.48237 13.6608C3.4307 13.4517 3.56403 13.2817 3.77987 13.2817H5.66738C5.8828 13.2817 6.0778 13.4563 6.10155 13.67L6.22738 14.8467C6.23371 14.8959 6.22931 14.9459 6.2145 14.9933C6.19968 15.0406 6.1748 15.0842 6.14155 15.1211C6.10831 15.1579 6.06748 15.1871 6.02189 15.2067C5.97629 15.2263 5.92699 15.2358 5.87738 15.2346ZM10.6657 14.8438C10.6653 14.9474 10.6239 15.0467 10.5505 15.1199C10.4771 15.1931 10.3777 15.2344 10.2741 15.2346H8.23615C8.12945 15.2324 8.02709 15.192 7.94765 15.1207C7.86821 15.0495 7.81697 14.9521 7.80323 14.8463L7.67656 13.6696C7.6701 13.6204 7.67439 13.5703 7.68912 13.5229C7.70386 13.4755 7.72869 13.4318 7.76191 13.3949C7.79513 13.358 7.83595 13.3287 7.88157 13.3091C7.92718 13.2895 7.97651 13.28 8.02614 13.2812H10.2741C10.3778 13.2812 10.4773 13.3224 10.5507 13.3957C10.6242 13.4689 10.6655 13.5684 10.6657 13.6721V14.8438ZM10.6657 11.3283C10.6653 11.432 10.6239 11.5313 10.5505 11.6045C10.4771 11.6777 10.3777 11.7189 10.2741 11.7192H7.85823C7.64323 11.7192 7.44906 11.5446 7.42489 11.3308L7.29906 10.1542C7.29267 10.1049 7.29701 10.0549 7.31177 10.0075C7.32653 9.96016 7.35137 9.91652 7.38457 9.87963C7.41778 9.84275 7.45857 9.81348 7.50415 9.79384C7.54973 9.77419 7.59902 9.76464 7.64864 9.76583H10.2741C10.3778 9.76583 10.4773 9.80698 10.5507 9.88026C10.6242 9.95353 10.6655 10.0529 10.6657 10.1567V11.3283ZM10.6657 7.8125C10.6653 7.91616 10.6239 8.01544 10.5505 8.08867C10.4771 8.16189 10.3777 8.20311 10.2741 8.20333H7.48156C7.37479 8.20123 7.27233 8.16087 7.1928 8.08961C7.11328 8.01834 7.06197 7.9209 7.04822 7.815L6.87989 6.2475C6.87357 6.19826 6.87797 6.14823 6.89278 6.10084C6.90759 6.05346 6.93247 6.00983 6.96571 5.97296C6.99894 5.93608 7.03976 5.90682 7.08536 5.88718C7.13095 5.86754 7.18026 5.85798 7.22989 5.85917H10.2745C10.3782 5.85917 10.4777 5.90032 10.5511 5.97359C10.6246 6.04686 10.6659 6.14627 10.6662 6.25L10.6657 7.8125ZM14.8987 14.8463C14.8849 14.9521 14.8335 15.0495 14.754 15.1208C14.6745 15.192 14.5721 15.2324 14.4653 15.2346H12.6237C12.52 15.2344 12.4207 15.1931 12.3474 15.1199C12.2741 15.0467 12.2328 14.9474 12.2324 14.8438V13.6717C12.2326 13.568 12.2739 13.4687 12.3473 13.3954C12.4206 13.3221 12.52 13.2809 12.6237 13.2808H14.6754C14.8904 13.2808 15.0487 13.4554 15.0254 13.6692L14.8987 14.8463ZM15.2762 11.3304C15.2624 11.4363 15.211 11.5337 15.1315 11.6049C15.052 11.6762 14.9496 11.7166 14.8429 11.7188H12.6237C12.52 11.7185 12.4207 11.6773 12.3474 11.6041C12.2741 11.5308 12.2328 11.4315 12.2324 11.3279V10.1558C12.2326 10.0522 12.2739 9.95283 12.3473 9.87957C12.4206 9.80631 12.52 9.76511 12.6237 9.765H15.0529C15.2683 9.765 15.4262 9.93958 15.4024 10.1533L15.2762 11.3304ZM15.6537 7.815C15.6399 7.92086 15.5885 8.01826 15.509 8.08951C15.4295 8.16076 15.3271 8.20114 15.2204 8.20333H12.6237C12.52 8.20311 12.4207 8.16188 12.3474 8.08864C12.2741 8.01541 12.2328 7.91613 12.2324 7.8125V6.25C12.2326 6.14634 12.2739 6.047 12.3473 5.97374C12.4206 5.90048 12.52 5.85928 12.6237 5.85917H15.4724C15.6879 5.85917 15.8458 6.03375 15.8229 6.2475L15.6537 7.815ZM18.667 15.2346V15.2317L18.6637 15.2346H16.8237C16.8116 15.2346 16.8012 15.2287 16.7891 15.2271C16.787 15.2129 16.787 15.1988 16.7845 15.1838L16.7662 15.2221C16.7713 15.2234 16.7764 15.2245 16.7816 15.2254C16.5895 15.2033 16.452 15.0446 16.4741 14.8463L16.5999 13.6696C16.6139 13.5638 16.6653 13.4665 16.7448 13.3953C16.8243 13.3241 16.9266 13.2836 17.0333 13.2812H19.1483C19.3637 13.2812 19.512 13.4546 19.4795 13.6675L19.295 14.8483C19.2629 15.0608 19.0595 15.2346 18.8441 15.2346H18.667Z"
              fill="#e9636e"
            />
          </svg>
        </div>
        {/* mua ngay  */}
        <div
          onClick={() => buyNow.mutate()}
          className="border-solid h-12 px-2 flex-3 border-main bg-main border-t border-t-[#dbdbdb] flex justify-center items-center border rounded"
        >
          <svg width="26" height="10" viewBox="0 0 26 10" fill="none">
            <path
              d="M2 2C5.0963 6.52774 15 13 24 2"
              stroke="white"
              strokeWidth="2"
            />
            <circle cx="2" cy="2" r="2" fill="white" />
            <circle cx="24" cy="2" r="2" fill="white" />
          </svg>
          <p className="font-['Nunito'] font-bold ml-2 text-white">Mua ngay</p>
        </div>
      </div>
      <ModalAddProduct ref={refModalAddProduct} item={itemProductChoose} />
      {showAlert === true ? (
        <ModaNotify
          description={description}
          setPopupVisible={setShowAlert}
          popupVisible={showAlert}
        />
      ) : null}
      {isLoading && <LoadingPage />}
    </div>
  );
}
