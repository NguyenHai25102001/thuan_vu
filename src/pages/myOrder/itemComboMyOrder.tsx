import React from "react";
import { API_URL_IMAGE } from "../../constants/utils";
import Images from "../../static";
import { formatDecimalNumber } from "../../utils/Utilities";
import { IOrderItem } from "../../types/myOder.types";

export default function ItemComboMyOder({ item }) {
  return (
    <div
      className="flex border-b-2 py-2 border-b-[##EBEBEB] pl-2"
      style={{
        backgroundColor: "#f5f5f5",
      }}
    >
      <div className="bg-[#f8f8fb] flex flex-col justify-center h-[117px] w-[117px] items-center rounded-lg">
        <img
          src={
            item.infor_product?.image
              ? `${API_URL_IMAGE}${item.infor_product?.image}`
              : Images.bannerDrinkHome
          }
          className="h-20 w-20 object-cover rounded"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between pl-3">
        <p className=" text-sm font-['Nunito'] text-[#333333] line-clamp-2 pr-3">
          {item?.infor_product?.name}
        </p>
        {item.infor_product?.money && (
          <p className=" text-xs font-['Nunito'] font-bold my-1 text-[#d60013]">
            {formatDecimalNumber(item.infor_product?.money)} đ
          </p>
        )}
        {item.infor_product?.money_base && (
          <p className=" text-xs font-['Nunito'] text-[#828282] line-through">
            {formatDecimalNumber(item.infor_product?.money_base)} đ
          </p>
        )}
        <div className="flex">
          <span className=" text-xs font-['Nunito'] text-[#333333]">
            Số lượng
          </span>
          <span className="text-xs font-['Nunito'] text-[#333333] ml-2">1</span>
        </div>
      </div>
    </div>
  );
}
