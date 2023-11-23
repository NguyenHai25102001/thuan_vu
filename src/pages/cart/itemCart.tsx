import React, { useState } from "react";
import { debounce, formatDecimalNumber } from "../../utils/Utilities";
import { API_URL_IMAGE } from "../../constants/utils";
import { ICart } from "../../types/cart.types";
import Images from "../../static";
import cartApi from "../../apis/cart.apis";
import { useMutation } from "@tanstack/react-query";
import SpinLoad from "../../components/spinLoad";
import { useSnackbar } from "zmp-ui";

export default function ItemCart({
  item,
  getDataCartAgain,
}: {
  item: ICart;
  getDataCartAgain: () => void;
}) {
  const { openSnackbar } = useSnackbar();

  const [quantity, setQuantity] = useState(item.quantity);
  const moneyBase = item.data_product_variant?.money_base
    ? item.data_product_variant?.money_base
    : item.data_product?.money_base;
  const money = item.data_product_variant?.money
    ? item.data_product_variant?.money
    : item.data_product?.money;

  const handleDeleteCart = useMutation({
    mutationFn: () => cartApi.deleteItemCart(item.id),
    onSuccess: (data) => {
      getDataCartAgain();
    },
    onError: (e) => {
      openSnackbar({
        position: "top",

        position: "top",
        text: "Có lỗi xảy ra",
        verticalAction: true,
        type: "default",
        icon: true,
        duration: 1500,
      });
    },
  });
  const pressConfirm = (type: number) => {
    if (type === 0) {
      setQuantity((prev) => prev - 1);
    } else {
      setQuantity((prev) => prev + 1);
    }
    handleConfirm.mutate(type);
  };
  const handleConfirm = useMutation({
    mutationFn: (typePost: number) =>
      cartApi.addToCart({
        product_id: item.product_id,
        quantity: 1,
        product_variant_id: item.product_variant_id || "",
        type: typePost,
      }),
    onSuccess: (data) => {
      getDataCartAgain();
    },
    onError: (e) => {
      openSnackbar({
        position: "top",

        position: "top",
        text: "Có lỗi xảy ra",
        verticalAction: true,
        type: "default",
        icon: true,
        duration: 1500,
      });
      console.log("error comment", e);
    },
  });

  React.useEffect(() => {
    setQuantity(item.quantity);
  }, [item]);

  return (
    <div className="border-b-8 border-b-[#EBEBEB]" key={item.id}>
      <div
        className="flex border-b-2 py-2 border-b-[##EBEBEB] pl-2"
        style={{
          backgroundColor:
            !!item && !!item.product_combo && !!item.product_combo.length
              ? "#f5f5f5"
              : "#FFFFFF",
        }}
      >
        <div className="bg-[#f8f8fb] flex flex-col justify-center h-[117px] w-[117px] items-center rounded-lg">
          <img
            src={
              item.data_product.image
                ? `${API_URL_IMAGE}${item.data_product.image}`
                : Images.bannerDrinkHome
            }
            className="h-20 w-20 object-cover rounded"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between pl-3">
          <p className=" text-sm font-['Nunito'] text-[#333333] line-clamp-2 pr-3">
            {item?.data_product?.name}
          </p>
          <p className=" text-xs font-['Nunito'] font-bold my-1 text-[#d60013]">
            {formatDecimalNumber(money)} đ
          </p>
          <p className=" text-xs font-['Nunito'] text-[#828282] line-through">
            {formatDecimalNumber(moneyBase)} đ
          </p>
          {item?.data_product_variant && (
            <div className="flex">
              <span className=" text-xs font-['Nunito'] text-[#333333]">
                Phân loại:
              </span>
              <span className="text-xs font-['Nunito'] text-[#333333] ml-2">
                {item?.data_product_variant?.name}
              </span>
            </div>
          )}

          {!!item && !!item.product_combo && !!item.product_combo.length ? (
            <div className="flex items-center justify-between">
              <p className=" text-xs font-['Nunito'] text-[#333333]">
                Số lượng: 1
              </p>
              <div
                className="px-3 py-2"
                onClick={() => handleDeleteCart.mutate()}
              >
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none">
                  <path
                    d="M4.0918 15C4.0918 15.3978 4.24983 15.7794 4.53114 16.0607C4.81244 16.342 5.19397 16.5 5.5918 16.5H13.0918C13.4896 16.5 13.8712 16.342 14.1525 16.0607C14.4338 15.7794 14.5918 15.3978 14.5918 15V6H16.0918V4.5H13.0918V3C13.0918 2.60218 12.9338 2.22064 12.6525 1.93934C12.3712 1.65804 11.9896 1.5 11.5918 1.5H7.0918C6.69397 1.5 6.31244 1.65804 6.03114 1.93934C5.74983 2.22064 5.5918 2.60218 5.5918 3V4.5H2.5918V6H4.0918V15ZM7.0918 3H11.5918V4.5H7.0918V3ZM6.3418 6H13.0918V15H5.5918V6H6.3418Z"
                    fill="#828282"
                  />
                  <path
                    d="M7.0918 7.5H8.5918V13.5H7.0918V7.5ZM10.0918 7.5H11.5918V13.5H10.0918V7.5Z"
                    fill="#828282"
                  />
                </svg>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex">
                <div
                  onClick={() => pressConfirm(0)}
                  className="border-solid border-[#ebebeb] bg-white flex justify-center w-7 h-7 rounded-full items-center border"
                >
                  <p className=" text-sm font-['Nunito'] text-[#333333]">-</p>
                </div>
                <div className="border-solid border-[#ebebeb] bg-white flex flex-col mx-2 h-7 items-center justify-center px-3 border rounded">
                  <p className=" text-sm font-['Nunito']  text-[#333333]">
                    {quantity}
                  </p>
                </div>
                <div
                  onClick={() => pressConfirm(1)}
                  className="border-solid border-main bg-white flex justify-center w-7 h-7 rounded-full items-center border"
                >
                  <p className=" text-sm font-['Nunito'] text-[#333333]">+</p>
                </div>
              </div>
              <div
                className="px-3 py-2"
                onClick={() => handleDeleteCart.mutate()}
              >
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none">
                  <path
                    d="M4.0918 15C4.0918 15.3978 4.24983 15.7794 4.53114 16.0607C4.81244 16.342 5.19397 16.5 5.5918 16.5H13.0918C13.4896 16.5 13.8712 16.342 14.1525 16.0607C14.4338 15.7794 14.5918 15.3978 14.5918 15V6H16.0918V4.5H13.0918V3C13.0918 2.60218 12.9338 2.22064 12.6525 1.93934C12.3712 1.65804 11.9896 1.5 11.5918 1.5H7.0918C6.69397 1.5 6.31244 1.65804 6.03114 1.93934C5.74983 2.22064 5.5918 2.60218 5.5918 3V4.5H2.5918V6H4.0918V15ZM7.0918 3H11.5918V4.5H7.0918V3ZM6.3418 6H13.0918V15H5.5918V6H6.3418Z"
                    fill="#828282"
                  />
                  <path
                    d="M7.0918 7.5H8.5918V13.5H7.0918V7.5ZM10.0918 7.5H11.5918V13.5H10.0918V7.5Z"
                    fill="#828282"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* combo  */}
      {!!item && !!item.product_combo && !!item.product_combo.length && (
        <div>
          {item.product_combo.map((item) => {
            return (
              <div
                className="flex border-b-2 py-2 border-b-[##EBEBEB] pl-2"
                key={item.id}
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <div className="flex flex-col justify-center h-[117px] w-[117px] items-center rounded-lg">
                  <img
                    src={
                      item?.image
                        ? `${API_URL_IMAGE}${item.image}`
                        : Images.bannerDrinkHome
                    }
                    className="h-20 w-20 object-cover rounded"
                  />
                </div>
                <div className="flex-1 pl-3">
                  <p className=" text-sm font-['Nunito'] text-[#333333] line-clamp-2 pr-3">
                    {item?.name}
                  </p>
                  <p className=" text-xs font-['Nunito'] font-bold my-1 text-[#d60013]">
                    {formatDecimalNumber(item?.money)} đ
                  </p>
                  <p className=" text-xs font-['Nunito'] text-[#828282] line-through">
                    {formatDecimalNumber(item?.money_base)} đ
                  </p>
                  <p className="text-xs font-['Nunito'] text-[#333333]">
                    Số lượng: 1
                  </p>
                </div>
              </div>
            );
          })}
          <div className="flex items-center justify-between px-4 py-2">
            <p className="text-base font-['Nunito'] font-semibold text-red-600">
              Giá combo
            </p>
            <p className="text-base font-['Nunito'] font-semibold text-red-600">
              {formatDecimalNumber(item?.total_money)}
            </p>
          </div>
        </div>
      )}
      {(handleDeleteCart?.isLoading || handleConfirm?.isLoading) && (
        <SpinLoad />
      )}
    </div>
  );
}
