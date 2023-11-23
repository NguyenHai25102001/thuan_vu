import React from "react";
import Images from "../static";
import { API_URL_IMAGE } from "../constants/utils";
export default function ItemProductSale(props) {
  const { item } = props;

  return (
    <div className="py-4 flex flex-col items-center justify-center">
      <img
        src={
          item.image ? `${API_URL_IMAGE}${item.image}` : Images.bannerDrinkHome
        }
        className="w-[90%] h-28 object-cover rounded-[10px]"
      />
      <div className="flex items-end">
        <div className="flex flex-1 flex-col justify-between px-2 line-clamp-2">
          <p className="text-xs font-['Nunito'] font-bold w-full line-clamp-1 my-1">
            {item?.data?.name}
          </p>
          <p className="text-xs font-['Nunito'] font-bold  text-[#828282] w-full">
            |{item?.data?.name_group_goods}
          </p>
          <p className="text-xs font-['Nunito'] font-bold w-full my-1">
            {/* {formatDecimalNumber(item.money)}đ/{item?.unit} */}
          </p>
          <p className="text-xs font-['Nunito'] font-bold text-[#828282] w-full">
            {/* Đã bán {formatDecimalNumber(item?.quantity_sold)} */}
          </p>
        </div>
        <div className="flex flex-col justify-end px-2">
          <img
            src={Images.iconPlus}
            className="w-5 h-5 object-contain   bg-main rounded-[100%] p-1"
          />
        </div>
      </div>
    </div>
  );
}
