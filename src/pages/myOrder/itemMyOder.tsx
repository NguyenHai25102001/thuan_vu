import React from "react";
import { API_URL_IMAGE } from "../../constants/utils";
import Images from "../../static";
import { formatDecimalNumber } from "../../utils/Utilities";
import { IOrderItem } from "../../types/myOder.types";

export default function ItemMyOder({
  item,
  isCombo,
}: {
  item: IOrderItem;
  isCombo?: boolean;
}) {
  return (
    <div
      className="flex border-b-2 py-2 border-b-[##EBEBEB] pl-2"
      style={{
        backgroundColor: isCombo ? "#f5f5f5" : "#FFFFFF",
      }}
    >
      <div className="bg-[#f8f8fb] flex flex-col justify-center h-[117px] w-[117px] items-center rounded-lg">
        <img
          src={
            item.product?.image
              ? `${API_URL_IMAGE}${item.product?.image}`
              : Images.bannerDrinkHome
          }
          className="h-20 w-20 object-cover rounded"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between pl-3">
        <p className=" text-sm font-['Nunito'] text-[#333333] line-clamp-2 pr-3">
          {item?.product?.name}
        </p>
        {item.money && (
          <p className=" text-xs font-['Nunito'] font-bold my-1 text-[#d60013]">
            {formatDecimalNumber(item.money)} đ
          </p>
        )}
        {item?.money_base && (
          <p className=" text-xs font-['Nunito'] text-[#828282] line-through">
            {formatDecimalNumber(item.money_base)} đ
          </p>
        )}
        <div className="flex">
          <span className=" text-xs font-['Nunito'] text-[#333333]">
            Số lượng
          </span>
          <span className="text-xs font-['Nunito'] text-[#333333] ml-2">
            {item?.quantity}
          </span>
        </div>
        {item?.product_variant && (
          <div className="flex">
            <span className=" text-xs font-['Nunito'] text-[#333333]">
              Phân loại:
            </span>
            <span className="text-xs font-['Nunito'] text-[#333333] ml-2">
              {item?.product_variant?.name}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
