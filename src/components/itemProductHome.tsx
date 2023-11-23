import React from "react";
import Images from "../static";
import { IItemProductHome } from "../types/home.type";
import { formatDecimalNumber } from "../utils/Utilities";
import { API_URL_IMAGE } from "../constants/utils";
import ModalAddProduct from "../pages/shop/modalAddProduct";
import { IProductShop } from "../types/shop.types";
import { useNavigate } from "react-router-dom";
import path from "../constants/path";
interface IProps {
  i: number;
  item: IProductShop;
  onClickPlus: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default function ItemProductHome(props: IProps) {
  const navigate = useNavigate();
  const { i, item } = props;

  return (
    <div
      onClick={() => {
        navigate(`${path.home}${item.id}`);
      }}
      className="flex py-4"
      style={{
        borderTopWidth: i === 0 ? 0 : 2,
        borderTopColor: "#dbdbdb",
      }}
    >
      <img
        src={
          item.image ? `${API_URL_IMAGE}${item.image}` : Images.bannerDrinkHome
        }
        className="h-20 w-20 object-cover rounded-[10px]"
      />
      <div className="flex flex-1 pl-3 flex-col justify-between px-2 line-clamp-2">
        <p className="text-xs font-['Nunito'] font-bold w-full line-clamp-2">
          {item?.name}
        </p>
        <p className="text-xs font-['Nunito'] font-bold  text-[#828282] w-full">
          |{item?.name_group_goods}
        </p>
        <p className="text-xs font-['Nunito'] font-bold w-full">
          {formatDecimalNumber(item.money)}đ/{item?.unit}
        </p>
        <p className="text-xs font-['Nunito'] font-bold text-[#828282] w-full">
          Đã bán {formatDecimalNumber(item?.quantity_sold)}
        </p>
      </div>
      <div
        className="flex flex-col justify-end px-2"
        onClick={props.onClickPlus}
      >
        <img
          src={Images.iconPlus}
          className="w-5 h-5 object-contain   bg-main rounded-[100%] p-1"
        />
      </div>
    </div>
  );
}
