import React from "react";
import { Sheet, useSnackbar } from "zmp-ui";
import Images from "../../static";
import { IProductShop } from "../../types/shop.types";
import { API_URL_IMAGE } from "../../constants/utils";
import { closebtnIcon } from "../../utils/iconSvgNew";
import { formatDecimalNumber } from "../../utils/Utilities";
import { useMutation } from "@tanstack/react-query";
import cartApi from "../../apis/cart.apis";
import { useNavigate } from "react-router-dom";
import path from "../../constants/path";
import ModaNotify from "../../components/modaNotify";

export interface IProps {
  item: IProductShop;
}

const ModalAddProduct = React.forwardRef((props: IProps, ref) => {
  const [showModalAddProduct, setShowModalAddProduct] = React.useState(false);
  const navigate = useNavigate();
  const { openSnackbar } = useSnackbar();
  const [showAlert, setShowAlert] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const { item } = props;
  const [quantity, setQuantity] = React.useState(1);
  const [idVariant, setIdVariant] = React.useState(-1);
  const [money, setMoney] = React.useState(item?.money);
  const [moneyBase, setMoneyBase] = React.useState(item?.money_base);
  const handleVariant = () => {
    if (!!item && !!item.product_variant && !!item.product_variant.length) {
      setIdVariant(item.product_variant[0].id);
      setMoney(item.product_variant[0].money);
      setMoneyBase(item.product_variant[0].money_base);
    } else {
      setIdVariant(-1);
      setMoney(item?.money);
      setMoneyBase(item?.money_base);
    }
  };
  const cacuMoney = () => {
    let moneyN = Number(money);
    let quantityN = Number(quantity);
    return moneyN * quantityN;
  };

  const handleQuantity = (type) => {
    if (type === 0) {
      if (quantity === 1) return;
      setQuantity((prev) => prev - 1);
    } else {
      setQuantity((prev) => prev + 1);
    }
  };

  const clickItemVariant = (item) => {
    setIdVariant(item.id);
    setMoney(item.money);
    setMoneyBase(item.money_base);
  };
  React.useImperativeHandle(ref, () => {
    return {
      setShowModalAddProduct,
    };
  });
  const addCart = useMutation({
    mutationFn: () =>
      cartApi.addToCart({
        product_id: item.id,
        quantity: 1,
        product_variant_id: idVariant === -1 ? "" : idVariant,
        type: 1,
      }),
    onSuccess: () => {
      setShowModalAddProduct(false);
      {
        openSnackbar({
          position: "top",
          text: "Thêm sản phẩm vào giỏ hàng thành công",
          verticalAction: true,
          type: "success",
          icon: true,
          duration: 1500,
        });
        return false;
      }
    },
    onError: (e) => {
      setDescription("Thử lại sau");
      setShowAlert(true);
      setShowModalAddProduct(false);
    },
  });
  const buyNow = useMutation({
    mutationFn: () =>
      cartApi.addToCart({
        product_id: item.id,
        quantity: 1,
        product_variant_id: idVariant === -1 ? "" : idVariant,
        type: 1,
      }),
    onSuccess: () => {
      setShowModalAddProduct(false);
      navigate(path.cart);
    },
    onError: (e) => {
      setDescription("Thử lại sau");
      setShowAlert(true);
      setShowModalAddProduct(false);
    },
  });

  React.useEffect(() => {
    handleVariant();
  }, [item]);

  return (
    <Sheet
      visible={showModalAddProduct}
      onClose={() => {
        setQuantity(1);
        setShowModalAddProduct(false);
      }}
      autoHeight
      mask
      handler
      swipeToClose
    >
      <div className="pb-4">
        <div className="flex px-3">
          <div className="mt-4">
            <img
              src={
                item?.image
                  ? `${API_URL_IMAGE}${item.image}`
                  : Images.bannerDrinkHome
              }
              className="w-24 h-20 object-cover rounded-lg mr-3"
            />
          </div>
          <div className="flex flex-col justify-between px-2 w-full mt-4">
            <p className="text-[15px] font-['Nunito'] font-normal line-clamp-2 text-[#333]leading-5">
              {item?.name}
            </p>
            <div className="w-full flex flex-col items-end">
              {moneyBase && (
                <p className="text-xs line-through text-end text-[#828282]">
                  {formatDecimalNumber(moneyBase)} đ
                </p>
              )}
              {money && (
                <p className="text-base text-end font-bold text-main">
                  {formatDecimalNumber(money)} đ
                </p>
              )}
            </div>
          </div>
          <div
            className="pt-2"
            onClick={() => {
              setQuantity(1);
              setShowModalAddProduct(false);
            }}
          >
            {closebtnIcon}
          </div>
        </div>
        <div className="bg-[#e0e0e0] w-[94%] mx-auto h-[1px] mt-4 mb-1" />
        {!!item && !!item.product_variant && !!item.product_variant.length && (
          <div className="px-2">
            <p className="text-base font-bold text-[#828282] mb-2">
              Phân loại:
            </p>
            <div className="flex flex-wrap w-full ">
              {item.product_variant.map((item) => {
                return (
                  <div
                    key={item.id}
                    onClick={() => clickItemVariant(item)}
                    className="mr-4 mb-2 px-7 py-[5px] border-solid flex items-center justify-center border-[#cfcfcf] border rounded"
                    style={{
                      borderColor: item.id === idVariant ? "red" : "#cfcfcf",
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
          </div>
        )}
        <div className="flex items-center justify-between px-3 py-2">
          <div className="">
            <p className="text-base font-bold text-[#828282] ">Số lượng</p>
          </div>
          <div className="flex items-center">
            <div className="px-2" onClick={() => handleQuantity(0)}>
              <img
                src={Images.iconSubtraction}
                className="w-6 h-6 object-contain"
              />
            </div>
            <div className="bg-white border rounded border-[#828282] flex items-center justify-center py-1 px-6 mx-2">
              <p className="text-[#333333] text-center text-sm">{quantity}</p>
            </div>
            <div className="px-2" onClick={() => handleQuantity(1)}>
              <img src={Images.iconPlus} className="w-6 h-6 object-contain" />
            </div>
          </div>
        </div>
        <div className="h-9"></div>
        <div className="bg-[#e0e0e0] w-full h-[1px] mt-2" />
        <div className="flex items-center justify-between px-3 py-2">
          <p className="text-xl font-['Nunito']  text-[#263238]">Tạm tính</p>
          <p className=" text-xl font-['Nunito'] font-bold  text-[#d60013]">
            {formatDecimalNumber(cacuMoney())} đ
          </p>
        </div>
        <div className="flex items-center justify-center px-3 gap-3">
          <div
            onClick={() => addCart.mutate()}
            className="border-solid border-main bg-[#ddf5ff] flex flex-col justify-center py-3 items-center flex-1 border rounded"
          >
            <p className="text-center font-['Nunito']  text-[#263238]">
              Thêm vào giỏ
            </p>
          </div>
          <div
            onClick={() => buyNow.mutate()}
            className="border-solid border-main bg-main flex flex-1 justify-center items-center py-3 border rounded"
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
            <p className="font-['Nunito'] font-bold ml-2 text-white">
              Mua ngay
            </p>
          </div>
        </div>
      </div>
      {showAlert === true ? (
        <ModaNotify
          description={description}
          setPopupVisible={setShowAlert}
          popupVisible={showAlert}
        />
      ) : null}
    </Sheet>
  );
});
export default ModalAddProduct;
