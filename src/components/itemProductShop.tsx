import React from "react";
import { IItemProductHome } from "../types/home.type";
import Images from "../static";
import { API_URL_IMAGE } from "../constants/utils";
import { formatDecimalNumber } from "../utils/Utilities";
import { IProductShop } from "../types/shop.types";
import { useNavigate } from "react-router-dom";
import path from "../constants/path";
interface IProps {
  item: IProductShop;
  onClickPlus: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
export default function ItemProductShop(props: IProps) {
  const { item } = props;
  const navigate = useNavigate();

  return (
    <div
      className="py-4 flex flex-col items-center justify-center"
      onClick={() => {
        navigate(`${path.home}${item.id}`);
      }}
    >
      <img
        src={
          item.image ? `${API_URL_IMAGE}${item.image}` : Images.bannerDrinkHome
        }
        className="w-[90%] h-28 object-cover rounded-[10px]"
      />
      <div className=" w-full flex flex-1 flex-col justify-between px-2 line-clamp-2 min-h-[104px]">
        <p className="text-xs font-['Nunito'] font-bold w-full line-clamp-1 my-1">
          {item?.name}
        </p>
        <p className="text-xs font-['Nunito'] font-bold  text-[#828282] w-full">
          |{item?.name_group_goods}
        </p>
        <p className="text-xs font-['Nunito'] font-bold w-full my-1">
          {formatDecimalNumber(item.money)}đ/{item?.unit}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-xs font-['Nunito'] font-bold text-[#828282] w-full">
            Đã bán {formatDecimalNumber(item?.quantity_sold)}
          </p>
          <div
            className="flex flex-col justify-end "
            onClick={props.onClickPlus}
          >
            <img
              src={Images.iconPlus}
              className="w-5 h-5 object-contain   bg-main rounded-[100%] p-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
