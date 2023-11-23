import React from "react";
import Header from "../../components/header";
import { Page } from "zmp-ui";
import { useNavigate } from "react-router-dom";
import path from "../../constants/path";
import { useMutation, useQuery } from "@tanstack/react-query";
import addressApi from "../../apis/address.apis";
import { IItemAddress } from "../../types/address.types";
import cartApi from "../../apis/cart.apis";
import { formatDecimalNumber } from "../../utils/Utilities";
import ModalVoucher from "./modalVoucher";
import { Voucher } from "../../types/voucher.type";
import ItemCart from "./itemCart";
import _ from "lodash";
import { IPramsBuyCart } from "../../types/cart.types";
import LoadingPage from "../loadingScreen";
import ModaNotify from "../../components/modaNotify";

const Cart = () => {
  const navigate = useNavigate();
  const [defaultAddress, setDefaultAddress] = React.useState<IItemAddress>({});
  console.log("defaultAddress", defaultAddress);
  const [feeShip, setFeeShip] = React.useState(0);
  const [feeShipOriginal, setFeeShipOriginal] = React.useState(0);
  const [codeUnit, setCodeUnit] = React.useState("");
  const [voucherFreeship, setVoucherFreeShip] = React.useState<Voucher>();
  const [voucherDiscount, setVoucherDiscount] = React.useState<Voucher>();
  const [moneyPay, setMoneyPay] = React.useState(0);
  const [moneyPayOriginal, setMoneyPayOriginal] = React.useState(0);
  const [moneyDisCountBill, setMoneyDiscountBill] = React.useState(0);
  const [showAlert, setShowAlert] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const refVoucher = React.useRef();

  const { data: dataAddressDefault, isLoading } = useQuery({
    queryKey: ["dataMyAddressCart"],
    queryFn: () => {
      return addressApi.defaultAddressAndFeeShip();
    },
    onSuccess: (data) => {
      if (
        !!data &&
        !!data.data &&
        !!data.data.data &&
        !!data.data.data.address
      ) {
        setDefaultAddress(data.data?.data?.address);
        setFeeShip(data.data?.data?.fee_ship);
        setFeeShipOriginal(data.data?.data?.fee_ship);
        setCodeUnit(data.data?.data?.code_unit);
      }
    },
    onError: () => {},
  });

  const {
    data: dataCart,
    isLoading: loadingCart,
    refetch,
  } = useQuery({
    queryKey: ["getDataCartUser"],
    queryFn: () => {
      return cartApi.getCart();
    },
  });

  const handleCacuFeeShip = () => {
    if (
      !!voucherFreeship &&
      !!dataAddressDefault &&
      !!dataAddressDefault.data &&
      !!dataAddressDefault.data.data &&
      !!dataAddressDefault.data.data.fee_ship
    ) {
      setFeeShip(0);
    } else if (
      !voucherFreeship &&
      !!dataAddressDefault &&
      !!dataAddressDefault.data &&
      !!dataAddressDefault.data.data &&
      !!dataAddressDefault.data.data.fee_ship
    ) {
      setFeeShip(dataAddressDefault.data.data.fee_ship);
    } else {
      setFeeShip(0);
    }
  };
  const handleSumMoney = () => {
    if (
      !!dataCart &&
      !!dataCart.data &&
      dataCart?.data?.total_money_agency &&
      !!voucherDiscount
    ) {
      if (!!voucherDiscount && voucherDiscount.status === 2) {
        let newMoney = Number(voucherDiscount.reduced_price); //số tiền giảm
        let moneyOrigin = Number(moneyPay);
        if (newMoney >= moneyOrigin) {
          setMoneyDiscountBill(moneyOrigin);
          setMoneyPay(0);
        } else {
          let moneyFinal = moneyOrigin - newMoney;
          setMoneyDiscountBill(newMoney);
          setMoneyPay(moneyFinal);
        }
      } else if (!!voucherDiscount && voucherDiscount.status === 3) {
        let moneyOrigin = Number(dataCart?.data?.total_money_agency); //số tiền ban đầu
        let maxPrice = Number(voucherDiscount.maximum_price); //số tiềng giảm tối đa
        let percentDiscount = Number(voucherDiscount.percent_discount); //% giảm giá
        let moneyDiscount = (moneyOrigin * percentDiscount) / 100; //số tiền được giảm
        if (moneyDiscount >= maxPrice) {
          let newMoney = moneyOrigin - maxPrice;
          setMoneyPay(newMoney);
          setMoneyDiscountBill(maxPrice);
        } else {
          let newMoney = moneyOrigin - moneyDiscount;
          setMoneyPay(newMoney);
          setMoneyDiscountBill(moneyDiscount);
        }
      }
    } else {
      if (!!voucherFreeship) {
        setMoneyPay(moneyPayOriginal - feeShipOriginal);
      } else {
        setMoneyPay(moneyPayOriginal);
      }
      setMoneyDiscountBill(0);
    }
  };

  const setMoneyInit = () => {
    if (
      !!dataAddressDefault &&
      !!dataAddressDefault.data &&
      !!dataAddressDefault.data.data &&
      !!dataAddressDefault.data.data.fee_ship &&
      !!dataCart &&
      !!dataCart.data &&
      !!dataCart.data.total_money_agency
    ) {
      let feeshipN = dataAddressDefault.data.data.fee_ship;
      let moneypayN = dataCart.data.total_money_agency;
      let sum = Number(feeshipN) + Number(moneypayN);
      setMoneyPayOriginal(sum);
      setMoneyPay(sum);
    }
  };

  const cacuMoneyBuy = () => {
    let money = 0;
    if (!!voucherFreeship) {
      money = moneyPayOriginal - feeShipOriginal - moneyDisCountBill;
    } else {
      money = moneyPayOriginal - moneyDisCountBill;
    }
    return money;
  };
  const buyMutation = useMutation({
    mutationFn: (params: IPramsBuyCart) => cartApi.buy(params),
    onSuccess: (res) => {
      if (res.data.code === 200) {
        setDescription("Tạo đơn hàng thành công");
        setShowAlert(true);
        refetch();
      } else {
        setDescription("Tạo đơn hàng thất bại.Thử lại sau");
        setShowAlert(true);
      }
    },
    onError: (e) => {
      console.log("error tao don", e);
    },
  });
  const onSubmitBuy = () => {
    if (!dataAddressDefault?.data?.data) {
      setDescription("Hãy chọn địa chỉ giao hàng");
      setShowAlert(true);
      return;
    } else {
      const params: IPramsBuyCart = {
        address_id: dataAddressDefault?.data.data.address.id,
        transport_name: codeUnit,
        fee_shipping: feeShip,
        money_use_voucher: moneyDisCountBill,
        voucher_id_one: !_.isEmpty(voucherDiscount) ? voucherDiscount?.id : "",
        voucher_id_two: !_.isEmpty(voucherFreeship) ? voucherFreeship?.id : "",
      };
      buyMutation.mutate(params);
    }
  };
  React.useEffect(() => {
    handleCacuFeeShip();
  }, [voucherFreeship]);

  React.useEffect(() => {
    handleSumMoney();
  }, [voucherDiscount]);
  React.useEffect(() => {
    setMoneyInit();
  }, [dataAddressDefault, dataCart]);
  return (
    <div className="flex flex-col w-full h-full bg-white relative">
      <Header title="Giỏ hàng" />
      <Page className="pb-80 flex-1 no-scrollbar" hideScrollbar>
        {/* địa chỉ */}
        <div className="px-2 py-4">
          <div className="shadow-[0px_0px_10px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col gap-2 w-full  items-start py-3 rounded-lg">
            <p className=" text-sm font-['Nunito'] font-bold text-main ml-3">
              Giao hàng tận nơi
            </p>
            <div className="h-[1px] bg-main w-full" />
            <div className="flex justify-between items-center w-full pl-3">
              <p className="text-sm font-['Nunito'] font-medium text-[#263238] ">
                Giao tới
              </p>
              <div
                className="px-3 py-1"
                onClick={() => navigate(path.listAddress)}
              >
                <p className="text-sm font-['Nunito'] font-bold text-main">
                  Chọn địa chỉ
                </p>
              </div>
            </div>
            {_.isEmpty(defaultAddress) && (
              <div className="pl-2 text-black text-sm font-medium">
                Hãy chọn địa chỉ giao hàng mặc định.
              </div>
            )}
            {!!defaultAddress && !!defaultAddress.name && (
              <div className="flex flex-row gap-2  px-3">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <g clipPath="url(#clip0_795_4118)">
                    <path
                      d="M7.5 6C8.775 6 9.795 4.9875 9.795 3.75C9.795 2.5125 8.775 1.5 7.5 1.5C6.225 1.5 5.205 2.5125 5.205 3.75C5.205 4.9875 6.225 6 7.5 6ZM7.5 7.5C5.4 7.5 3.705 5.82 3.705 3.75C3.705 1.68 5.4 0 7.5 0C9.6 0 11.295 1.68 11.295 3.75C11.295 5.82 9.6 7.5 7.5 7.5ZM2.25 13.5H12.75V12.5025C12.75 11.19 11.0175 9.8325 7.5 9.8325C3.9825 9.8325 2.25 11.19 2.25 12.5025V13.5ZM7.5 8.3325C12.495 8.3325 14.25 10.83 14.25 12.5025V15H0.75V12.5025C0.75 10.83 2.505 8.3325 7.5 8.3325Z"
                      fill="#828282"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_795_4118">
                      <rect width="15" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="text-sm font-['Nunito']   text-[#828282] mt-px ">
                  {defaultAddress?.name}
                </div>
              </div>
            )}
            {!!defaultAddress && !!defaultAddress.full_address && (
              <div className="flex gap-2  px-3">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <path
                    d="M8.49984 9.91667C10.0624 9.91667 11.3332 8.64592 11.3332 7.08333C11.3332 5.52075 10.0624 4.25 8.49984 4.25C6.93725 4.25 5.6665 5.52075 5.6665 7.08333C5.6665 8.64592 6.93725 9.91667 8.49984 9.91667ZM8.49984 5.66667C9.28113 5.66667 9.9165 6.30204 9.9165 7.08333C9.9165 7.86462 9.28113 8.5 8.49984 8.5C7.71855 8.5 7.08317 7.86462 7.08317 7.08333C7.08317 6.30204 7.71855 5.66667 8.49984 5.66667Z"
                    fill="#828282"
                  />
                  <path
                    d="M8.08939 15.4516C8.20928 15.5372 8.35291 15.5832 8.50023 15.5832C8.64754 15.5832 8.79118 15.5372 8.91106 15.4516C9.12639 15.2993 14.1874 11.645 14.1669 7.08335C14.1669 3.9589 11.6247 1.41669 8.50023 1.41669C5.37577 1.41669 2.83356 3.9589 2.83356 7.07981C2.81302 11.645 7.87406 15.2993 8.08939 15.4516ZM8.50023 2.83335C10.8441 2.83335 12.7502 4.73948 12.7502 7.0869C12.7651 10.2305 9.64206 13.0532 8.50023 13.979C7.3591 13.0525 4.23535 10.2291 4.25023 7.08335C4.25023 4.73948 6.15635 2.83335 8.50023 2.83335Z"
                    fill="#828282"
                  />
                </svg>
                <div className="text-sm font-['Nunito'] text-[#828282] ">
                  {defaultAddress?.full_address}
                </div>
              </div>
            )}
            {!!defaultAddress && !!defaultAddress.phone && (
              <div className="flex flex-row gap-2  px-3">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path
                    d="M12.1876 13.5938H12.1079C2.89695 13.0641 1.58913 5.29219 1.40632 2.92031C1.39159 2.7359 1.41339 2.55039 1.47048 2.37441C1.52757 2.19844 1.61882 2.03545 1.739 1.89481C1.85918 1.75416 2.00594 1.6386 2.17086 1.55477C2.33577 1.47093 2.51561 1.42046 2.70007 1.40625H5.28288C5.47064 1.40607 5.65413 1.46227 5.80959 1.56758C5.96504 1.67288 6.08529 1.82244 6.15476 1.99688L6.86726 3.75C6.93586 3.92041 6.95288 4.10722 6.91622 4.28723C6.87955 4.46724 6.7908 4.6325 6.66101 4.7625L5.66257 5.77031C5.81853 6.6566 6.24297 7.47359 6.87846 8.11076C7.51395 8.74793 8.32982 9.17452 9.2157 9.33281L10.2329 8.325C10.3648 8.19664 10.5317 8.10996 10.7125 8.07578C10.8934 8.04161 11.0804 8.06144 11.2501 8.13281L13.0173 8.84063C13.1891 8.91229 13.3356 9.03348 13.4383 9.18875C13.541 9.34403 13.5951 9.52635 13.5938 9.7125V12.1875C13.5938 12.5605 13.4457 12.9181 13.1819 13.1819C12.9182 13.4456 12.5605 13.5938 12.1876 13.5938ZM2.81257 2.34375C2.68825 2.34375 2.56902 2.39314 2.48111 2.48104C2.39321 2.56895 2.34382 2.68818 2.34382 2.8125V2.85C2.55945 5.625 3.94226 12.1875 12.1594 12.6562C12.221 12.6601 12.2828 12.6517 12.3411 12.6316C12.3994 12.6115 12.4532 12.58 12.4994 12.5391C12.5455 12.4982 12.5832 12.4485 12.6101 12.393C12.637 12.3375 12.6527 12.2772 12.6563 12.2156V9.7125L10.8891 9.00469L9.54382 10.3406L9.31882 10.3125C5.2407 9.80156 4.68757 5.72344 4.68757 5.68125L4.65945 5.45625L5.9907 4.11094L5.28757 2.34375H2.81257Z"
                    fill="#828282"
                  />
                </svg>
                <p className="text-sm font-['Nunito'] text-[#828282]">
                  {defaultAddress?.phone}
                </p>
              </div>
            )}
          </div>
        </div>
        {/* danh sach hàng  */}
        {!!dataCart &&
        !!dataCart.data &&
        !!dataCart.data.data &&
        !!dataCart.data.data.length ? (
          <div>
            {dataCart.data.data.map((item, index) => {
              return (
                <ItemCart
                  key={item.id}
                  item={item}
                  getDataCartAgain={refetch}
                />
              );
            })}
          </div>
        ) : (
          <div
            className="flex flex-col items-center justify-center"
            style={{
              paddingTop: 80,
            }}
          >
            <p
              className="text-base text-black font-semibold"
              style={{
                marginBottom: 20,
              }}
            >
              Bạn chưa có sản phẩm nào
            </p>
            <div
              onClick={() => navigate(path.shop)}
              className="bg-blue rounded-full w-[60%] mx-auto py-2 my-3 flex items-center justify-center"
            >
              <p className="text-base text-white font-bold">Tiếp tục mua sắm</p>
            </div>
          </div>
        )}
        <div className="h-2"></div>
      </Page>
      {/* box thanh toán  */}
      {!!dataCart &&
        !!dataCart.data &&
        !!dataCart.data.data &&
        !!dataCart.data.data.length && (
          <div className="px-2 absolute bottom-0 bg-white z-40 w-full">
            <div className="flex items-center justify-between pt-2">
              <p className="text-sm font-['Nunito']  text-[#333333] ">
                Tổng tiền hàng
              </p>
              {!!dataCart &&
                !!dataCart.data &&
                dataCart?.data?.total_money_agency && (
                  <div className="text-xs font-['Nunito'] font-bold  text-[#d60013] ">
                    {formatDecimalNumber(dataCart?.data?.total_money_agency)}
                  </div>
                )}
            </div>
            <div className="bg-[#ebebeb] w-full h-[1px] my-2" />
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path
                    d="M12.0488 2.293C11.9561 2.2 11.8459 2.12624 11.7245 2.07596C11.6032 2.02568 11.4731 1.99986 11.3418 2H6.3418C6.21046 1.99986 6.08039 2.02568 5.95906 2.07596C5.83774 2.12624 5.72754 2.2 5.6348 2.293L2.6348 5.293C2.54176 5.38571 2.46797 5.4959 2.41768 5.61724C2.3674 5.73857 2.34161 5.86866 2.3418 6V11C2.3418 11.266 2.4468 11.52 2.6348 11.707L12.6348 21.707C12.7275 21.8002 12.8376 21.8741 12.9589 21.9246C13.0803 21.9751 13.2104 22.001 13.3418 22.001C13.4732 22.001 13.6033 21.9751 13.7247 21.9246C13.846 21.8741 13.9561 21.8002 14.0488 21.707L22.0488 13.707C22.1417 13.6142 22.2155 13.504 22.2658 13.3827C22.3161 13.2614 22.342 13.1313 22.342 13C22.342 12.8687 22.3161 12.7386 22.2658 12.6173C22.2155 12.496 22.1417 12.3858 22.0488 12.293L12.0488 2.293ZM13.3418 19.586L4.3418 10.586V6.414L6.7558 4H10.9278L19.9278 13L13.3418 19.586Z"
                    fill="#F26091"
                  />
                  <path
                    d="M8.69485 10C9.60446 10 10.3419 9.26261 10.3419 8.353C10.3419 7.44339 9.60446 6.706 8.69485 6.706C7.78524 6.706 7.04785 7.44339 7.04785 8.353C7.04785 9.26261 7.78524 10 8.69485 10Z"
                    fill="#F26091"
                  />
                </svg>
                <p className="text-sm font-['Nunito'] ml-1 text-[#333333]">
                  Mã giảm giá
                </p>
              </div>
              <div
                className="flex items-center"
                onClick={() => refVoucher.current?.setShowModalVoucher(true)}
              >
                {!!voucherDiscount && (
                  <div className="border border-[#ebebeb] px-2 mr-2 flex-1">
                    <p className="text-xs text-center text-[#ebebeb] line-clamp-1">
                      {voucherDiscount?.title}
                    </p>
                  </div>
                )}
                {!!voucherFreeship && (
                  <div className="border border-[#ebebeb] px-2 flex-3">
                    <p className="text-xs text-center text-[#ebebeb] line-clamp-1">
                      Miễn phí vận chuyển
                    </p>
                  </div>
                )}
                {!voucherFreeship && !voucherDiscount && (
                  <div className=" text-xs font-['Nunito'] text-[#828282]">
                    Chọn mã giảm giá
                  </div>
                )}
                <div className=" text-xs font-['Nunito'] ml-1 text-[#828282]">
                  &#62;
                </div>
              </div>
            </div>
            {/* ship  */}
            <div className="bg-[#ebebeb] w-full h-[1px] my-2" />
            <div className="flex items-center justify-between">
              <p className="text-sm font-['Nunito'] text-[#333333]">
                Phí vận chuyển:
              </p>
              <div className="flex items-center">
                {!!voucherFreeship && (
                  <p className="text-xs font-['Nunito'] font-bold text-[#828282] line-through mr-2">
                    {formatDecimalNumber(feeShipOriginal)} đ
                  </p>
                )}
                <p className="text-xs font-['Nunito'] font-bold text-[#d60013]">
                  {formatDecimalNumber(feeShip)} đ
                </p>
              </div>
            </div>
            {/* so tien giam  */}
            <div className="bg-[#ebebeb] w-full h-[1px] my-2" />
            <div className="flex items-center justify-between">
              <p className="text-sm font-['Nunito'] text-[#333333]">
                Số tiền giảm trừ từ voucher:
              </p>
              <p className="text-xs font-['Nunito'] font-bold text-[#d60013]">
                {formatDecimalNumber(moneyDisCountBill)} đ
              </p>
            </div>

            <div className="bg-[#ebebeb] w-full h-[1px] my-2" />
            <div className="flex items-center justify-between">
              <div className="">
                <p className=" whitespace-nowrap text-sm font-['Nunito']  text-[#333333] ">
                  Tổng thanh toán
                </p>
                {(!!voucherDiscount || !!voucherFreeship) && (
                  <p className=" text-xs font-['Nunito'] text-[#828282] line-through ">
                    {formatDecimalNumber(moneyPayOriginal)} đ
                  </p>
                )}
                <p className=" text-xs font-['Nunito'] font-bold  text-[#d60013] ">
                  {formatDecimalNumber(cacuMoneyBuy())} đ
                </p>
              </div>
              <button
                disabled={buyMutation.isLoading}
                onClick={() => onSubmitBuy()}
                className="bg-[#f26091] flex flex-col justify-center py-3 w-[50%] items-center rounded-lg"
              >
                <p className="text-center text-sm font-['Nunito'] font-semibold  text-white ">
                  Mua hàng
                </p>
              </button>
            </div>
          </div>
        )}
      <ModalVoucher
        ref={refVoucher}
        setVoucherFreeShip={(value) => setVoucherFreeShip(value)}
        setVoucherDiscount={(value) => setVoucherDiscount(value)}
      />
      {showAlert === true ? (
        <ModaNotify
          description={description}
          setPopupVisible={setShowAlert}
          popupVisible={showAlert}
        />
      ) : null}
      {(loadingCart || buyMutation.isLoading) && <LoadingPage />}
    </div>
  );
};
export default Cart;
