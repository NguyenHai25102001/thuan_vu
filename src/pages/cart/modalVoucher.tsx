import React from "react";
import { Page, useSnackbar } from "zmp-ui";
import { boxIcon, checkBoxIcon, closebtnIcon } from "../../utils/iconSvgNew";
import voucherApi from "../../apis/voucher.apis";
import { Voucher } from "../../types/voucher.type";
import { API_URL_IMAGE } from "../../constants/utils";
import ModaNotify from "../../components/modaNotify";

interface IProps {
  setVoucherFreeShip: (value: Voucher | undefined) => void;
  setVoucherDiscount: (value: Voucher | undefined) => void;
}

const ModalVoucher = React.forwardRef((props: IProps, ref) => {
  const [showModalVoucher, setShowModalVoucher] = React.useState(false);
  const [dataVoucher, setDataVoucher] = React.useState<Voucher[]>([]);
  const [showAlert, setShowAlert] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [lastPage, setLastpage] = React.useState(1);
  const getData = async () => {
    try {
      const currentPage = 1;
      setPage(currentPage);
      const res = await voucherApi.getMyVoucher(currentPage);
      if (res.data.status) {
        const newData = res.data.data.data.map((item) => {
          return {
            ...item,
            choose: false,
          };
        });
        setDataVoucher(newData);
        setLastpage(res.data.data.last_page);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useImperativeHandle(ref, () => {
    return {
      setShowModalVoucher,
    };
  });
  React.useEffect(() => {
    getData();
  }, []);

  const onPressItem = (item, index) => {
    let copied = [...dataVoucher];
    let currentItem = copied.filter((e) => e.choose === true)[0];
    copied[index].choose = !copied[index].choose;
    let dataFill = copied.filter((e) => e.choose === true);
    if (dataFill.length > 2) {
      copied[index].choose = false;
      setDescription("Chỉ được chọn tối đa 2 voucher");
      setShowAlert(true);
      return;
    } else if (dataFill.length === 2) {
      if (
        (currentItem?.status === 1 && item.status === 2) ||
        (currentItem?.status === 1 && item.status === 3) ||
        (currentItem?.status === 2 && item.status === 1) ||
        (currentItem?.status === 3 && item.status === 1)
      ) {
        setDataVoucher(copied);
      } else {
        copied[index].choose = false;
        setDescription(
          "Chỉ được chọn 1 voucher Free Ship và 1 voucher giảm giá"
        );
        setShowAlert(true);
        return;
      }
    } else {
      setDataVoucher(copied);
    }
  };

  const onSubmit = async () => {
    let copied = [...dataVoucher];
    const dataChoose = copied.filter((x) => x.choose);
    const voucherDiscount = dataChoose.find((x) => x.status !== 1);
    const voucherFreeship = dataChoose.find((x) => x.status === 1);
    if (!!voucherDiscount) {
      try {
        const res = await voucherApi.checkVoucher(voucherDiscount.id);
        if (!res.data.status) {
          setDescription(res.data.msg);
          setShowAlert(true);
        } else {
          props.setVoucherFreeShip(voucherFreeship);
          props.setVoucherDiscount(voucherDiscount);
          setShowModalVoucher(false);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      props.setVoucherFreeShip(voucherFreeship);
      props.setVoucherDiscount(voucherDiscount);
      setShowModalVoucher(false);
    }
  };

  if (!showModalVoucher) return <></>;
  return (
    <div className="absolute w-full h-full top-0 bg-[#000000] bg-opacity-80 z-50">
      <div className="h-full w-full relative bg-white mt-24 rounded-t-2xl">
        <div className="flex pl-4 border-b border-b-[#626262]">
          <div className="flex items-center flex-1">
            <p className="text-black text-base text-center flex-1 ml-12 mt-1">
              VOUCHER
            </p>
          </div>
          <div className="pr-4 pl-4" onClick={() => setShowModalVoucher(false)}>
            {closebtnIcon}
          </div>
        </div>
        <Page className="w-full h-full pb-40 no-scrollbar" hideScrollbar>
          <div className="px-2 py-4 pb-10">
            {!!dataVoucher &&
              !!dataVoucher.length &&
              dataVoucher.map((item, index) => {
                if (item.type !== 1) return;
                return (
                  <div
                    onClick={() => onPressItem(item, index)}
                    key={item.id}
                    className="frameVoucher w-full h-[117px] mb-3 border-l border-r rounded-lg flex items-center"
                  >
                    <div className="w-[30%] h-full flex items-center justify-center">
                      <img
                        src={`${API_URL_IMAGE}${item.image}`}
                        className="w-[90px] h-[90px] object-contain rounded-lg"
                      />
                    </div>
                    <div className="ml-4 mr-2 w-[70%] h-full flex flex-col justify-between py-2">
                      <div className="flex justify-between items-center pt-2">
                        <span className="font-['Montserrat'] font-semibold text-[#28293d] w-[50%] line-clamp-1">
                          {item?.title}
                        </span>
                        <svg
                          className=""
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M9.00033 17.3333C4.39783 17.3333 0.666992 13.6025 0.666992 9C0.666992 4.3975 4.39783 0.666668 9.00033 0.666668C13.6028 0.666668 17.3337 4.3975 17.3337 9C17.3337 13.6025 13.6028 17.3333 9.00033 17.3333ZM9.00033 15.6667C10.7684 15.6667 12.4641 14.9643 13.7144 13.714C14.9646 12.4638 15.667 10.7681 15.667 9C15.667 7.23189 14.9646 5.5362 13.7144 4.28596C12.4641 3.03571 10.7684 2.33333 9.00033 2.33333C7.23222 2.33333 5.53652 3.03571 4.28628 4.28596C3.03604 5.5362 2.33366 7.23189 2.33366 9C2.33366 10.7681 3.03604 12.4638 4.28628 13.714C5.53652 14.9643 7.23222 15.6667 9.00033 15.6667ZM8.16699 4.83333H9.83366V6.5H8.16699V4.83333ZM8.16699 8.16667H9.83366V13.1667H8.16699V8.16667Z"
                            fill="#8F90A6"
                          />
                        </svg>
                      </div>
                      <div className="flex justify-between items-center pr-3">
                        <span className="text-sm font-['Montserrat'] text-[#8f90a6] line-clamp-2">
                          {item.describe}
                        </span>
                        {/* <div className="w-14"></div> */}
                      </div>
                      <div className="flex justify-between items-center pr-[6px]">
                        <span className="text-xs font-['Montserrat'] text-[#8f90a6]">
                          Date : {item?.time_end}
                        </span>
                        <div onClick={() => {}}>
                          {!item.choose ? boxIcon : checkBoxIcon}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </Page>
        <div
          style={{ bottom: "11%" }}
          className="absolute w-full pb-4 bg-white"
        >
          <div
            onClick={onSubmit}
            className="w-[96%] mx-auto py-3 flex items-center justify-center bg-blue rounded-lg"
          >
            <p className="font-bold  text-white text-base">Đồng ý</p>
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
    </div>
  );
});
export default ModalVoucher;
