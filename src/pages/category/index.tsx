import React, { useEffect } from "react";
import Header from "../../components/header";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import shopApi from "../../apis/shop.apis";
import { IProductShop } from "../../types/shop.types";
import ModalAddProduct from "../shop/modalAddProduct";
import ItemProductHome from "../../components/itemProductHome";
import path from "../../constants/path";
import SpinLoad from "../../components/spinLoad";

export default function Category() {
  const location = useLocation();
  const idParams = location.state;
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [idChoose, setIdChoose] = React.useState(null);
  const [dataProduct, setDataProduct] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [lastPage, setLastPage] = React.useState(1);
  const navigate = useNavigate();
  const [itemProductChoose, setItemProductChoose] =
    React.useState<IProductShop>();
  const refModalAddProduct = React.useRef(null);
  const { data: dataCategory } = useQuery({
    queryKey: ["dataCategoryTwo", idParams],
    queryFn: () => {
      return shopApi.getCategoryShopTwo(idParams);
    },
    enabled: Boolean(idParams),
  });

  const listInnerRef = React.useRef(null);
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;

      if (Math.round(scrollTop + clientHeight) === scrollHeight) {
        loadmore();
      }
    }
  };
  const getDataAll = async () => {
    try {
      setIsLoading(true);
      const res = await shopApi.getDataAll(idParams, page);
      if (res.status) {
        setDataProduct(res?.data?.product?.data);
        setIndex(res?.data?.index);
        setLastPage(res?.data?.product.last_page);
      } else {
        alert("có lỗi xảy ra");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const loadmore = async () => {
    if (page >= lastPage) {
      return;
    } else {
      try {
        let currentPage = page + 1;
        setPage(currentPage);
        const res = await shopApi.getDataAll(idParams, currentPage);
        if (res.data.status) {
          setDataProduct([...dataProduct, ...res?.data?.product?.data]);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getDataProduct = async () => {
    try {
      setIsLoading(true);
      const res = await shopApi.getProductByCategory(Number(idChoose));
      if (res.status) {
        setDataProduct(res?.data?.data);
      } else {
        alert("có lỗi xảy ra");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    setPage(1);
    setLastPage(1);
    if (currentIndex === 0 || idChoose == null) {
      getDataAll();
    } else {
      getDataProduct();
    }
  }, [currentIndex, idChoose]);
  return (
    <div className="w-full h-full bg-white">
      <Header title="Danh mục sản phẩm" />
      <div
        onClick={() => navigate(path.searchProduct)}
        className=" mx-2 my-4 border-solid border-[#c3dbe5] overflow-hidden bg-white flex justify-center gap-2 h-10 items-center px-4 border rounded"
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
        <div className="text-sm font-['Nunito'] w-full text-[#8e90a5]">
          Nhập tên sản phầm cần tìm
        </div>
      </div>
      <div className="flex flex-1 w-full h-full">
        <div className="w-[30%] pb-48 bg-white h-full overflow-y-scroll no-scrollbar">
          <div
            onClick={() => {
              setCurrentIndex(index);
              // handleAll();
              setIdChoose(null);
            }}
            className="h-16 bg-pink-400 flex px-2 flex-col items-center justify-center"
            style={{
              backgroundColor: 0 === currentIndex ? "#ffffff" : "#f0f0f0",
              borderTopRightRadius: index === currentIndex + 1 ? 24 : 0,
              borderBottomRightRadius: index === currentIndex - 1 ? 24 : 0,
              borderTopLeftRadius: index === 0 ? 24 : 0,
            }}
          >
            <p className="text-center text-sm font-['Nunito'] font-semibold line-clamp-3">
              Tất cả
            </p>
          </div>
          {!!dataCategory &&
            !!dataCategory.data &&
            !!dataCategory.data.data &&
            !!dataCategory.data.data.length &&
            dataCategory.data.data.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index + 1);

                    setIdChoose(item?.id);
                  }}
                  className="h-16 bg-pink-400 flex px-2 flex-col items-center justify-center"
                  style={{
                    backgroundColor:
                      index + 1 === currentIndex ? "#ffffff" : "#f0f0f0",
                    borderTopRightRadius:
                      index + 1 === currentIndex + 1 ? 24 : 0,
                    borderBottomRightRadius:
                      index + 1 === currentIndex - 1 ? 24 : 0,
                  }}
                >
                  <p className="text-center text-sm font-['Nunito'] font-semibold line-clamp-3">
                    {item.name}
                  </p>
                </div>
              );
            })}
        </div>
        <div className="w-[70%] h-full">
          <div className=" h-16 flex items-center justify-between">
            <p className="text-sm font-['Nunito'] w-full text-center text-black">
              Danh sách sản phẩm
            </p>
          </div>
          <div
            className="flex-1 h-full px-2 pb-64 overflow-y-scroll no-scrollbar"
            ref={listInnerRef}
            onScroll={onScroll}
          >
            {!!dataProduct &&
              !!dataProduct.length &&
              dataProduct.map((item, i) => {
                return (
                  <ItemProductHome
                    item={item}
                    key={i}
                    i={i}
                    onClickPlus={(event) => {
                      event.stopPropagation();
                      setItemProductChoose(item);
                      refModalAddProduct.current?.setShowModalAddProduct(true);
                    }}
                  />
                );
              })}
            {isLoading && <SpinLoad />}
            {!isLoading &&
              !!dataProduct &&
              !!dataProduct.data &&
              !!dataProduct.data.data &&
              dataProduct.data.data.length === 0 && (
                <p className="font-normal text-black text-center">
                  Không có sản phẩm
                </p>
              )}
          </div>
        </div>
      </div>
      <ModalAddProduct ref={refModalAddProduct} item={itemProductChoose} />
    </div>
  );
}
