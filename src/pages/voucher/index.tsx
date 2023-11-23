import React from "react";
import { Box, Page, Text, useNavigate } from "zmp-ui";
import Images from "../../static";
import "./styles.css";
import voucherApi from "../../apis/voucher.apis";
import { Voucher, Point, ProgramVocher } from "../../types/voucher.type";
import ItemProgramVoucher from "./itemProgramVoucher";
import ItemMyVoucher from "./itemMyVoucher";
import path from "../../constants/path";
import { API_URL_IMAGE } from "../../constants/utils";
import SpinLoad from "../../components/spinLoad";
import ModaNotify from "../../components/modaNotify";

const Voucher = () => {
  const navigate = useNavigate();

  const [point, setPoint] = React.useState<Point>();
  const [myVoucher, setMyVoucher] = React.useState<Voucher[]>([]);
  const [programVoucher, setProgramVoucher] = React.useState<ProgramVocher[]>(
    []
  );
  const [showAlert, setShowAlert] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const [voucherId, setVoucherId] = React.useState<number>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const getPoint = async () => {
    const res = await voucherApi.getPoint();
    if (res.status) {
      setPoint(res.data.data.point);
    }
  };
  const getProgramVoucher = async () => {
    const res = await voucherApi.getProgramVocher(page);
    if (res.status) {
      setProgramVoucher(res.data.data.data);
    } else {
      setDescription("Có lỗi xảy ra");
      setShowAlert(true);
    }
  };
  const getMyVoucher = async () => {
    try {
      setIsLoading(true);
      const res = await voucherApi.getMyVoucher(page);
      if (res.status) {
        setIsLoading(false);
        setMyVoucher(res.data.data.data);
      } else {
        setIsLoading(true);
        setDescription("Có lỗi xảy ra");
        setShowAlert(true);
      }
    } catch (e) {
      console.error(e);
      setIsLoading(true);
    } finally {
      setIsLoading(false);
    }
  };
  const exchangePoints = async () => {
    let formData = new FormData();
    formData.append("voucher_id", `${voucherId}`);
    try {
      const res = await voucherApi.exchangePoints(formData);
      if (res.status) {
        setDescription(res.data.msg);
        setShowAlert(true);
        getMyVoucher();
        getPoint();
      } else {
        setDescription("Có lỗi xảy ra");
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Lỗi khi thực hiện đổi voucher", error);
      setDescription("Không thể đổi voucher, vui lòng thử lại!");
      setShowAlert(true);
    } finally {
    }
  };
  React.useEffect(() => {
    getPoint();
    getProgramVoucher();
    getMyVoucher();
  }, []);
  React.useEffect(() => {
    if (voucherId) {
      exchangePoints();
    }
  }, [voucherId]);
  const handleUse = () => {};
  return (
    <div className="h-screen p-0 m-0">
      <div className="bg-main h-[120px] w-full">
        <div className="flex">
          <img
            src={Images.brick}
            className="absolute top-7 right-[15%] opacity-20"
          />
          <img
            src={Images.brick}
            className="absolute top-7 right-[42%] opacity-20"
          />
          <img
            src={Images.brick}
            className="absolute top-7 left-[15%] opacity-20"
          />
        </div>
        <div>
          <img
            src={Images.brick}
            className="absolute top-16 left-8 opacity-20"
          />
          <img
            src={Images.brick}
            className="absolute top-16 right-8 opacity-20"
          />
        </div>
      </div>
      <div
        className="absolute top-[55px] left-[19px]"
        onClick={() => navigate(-1)}
      >
        <div className="relative">
          <div className="absolute top-[20%] left-[27%]">
            <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
              <img src={Images.iconBack} className="object-cover w-5 h-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-16 right-[40%] m-auto">
        <Text className="flex-1 text-white text-center pr-2 font-semibold uppercase text-xl">
          Voucher
        </Text>
      </div>
      <div className="w-full h-full pt-3 pb-40 bg-white no-scrollbar  overflow-y-auto">
        <div className="px-2">
          <div className="rounded-t-lg h-16 w-full border border-[#e4e4eb] flex items-center">
            <span className="text-xl font-['Montserrat'] font-semibold text-[#28293d] pl-6">
              Điểm đã tích của tôi
            </span>
          </div>
          <div className="rounded-b-lg h-32 w-full border border-[#e4e4eb] border-t-0 flex flex-col justify-center items-center">
            <p className="text-4xl font-['Montserrat'] font-semibold text-[#d54f44] bg-gradient-to-r from-pink-600 via-red-600 to-orange-500 text-transparent bg-clip-text">
              {point} Đ
            </p>
            <p className="text-sm font-['Montserrat']text-[#8f90a6] pt-2">
              Tổng điểm đã tích
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between px-2 py-3">
          <span className="text-sm font-['Nunito'] font-bold text-[#333333]">
            Các chương trình, hình thức nhận voucher
          </span>
          <span
            className="text-right text-xs font-['Nunito'] font-bold text-[#626262]"
            onClick={() => navigate(`${path.programVoucher}`)}
          >
            Xem tất cả
            {"  "}
            &#62;
          </span>
        </div>
        {!!programVoucher &&
          !!programVoucher.length &&
          programVoucher.slice(0, 2).map((item, i) => {
            return (
              <ItemProgramVoucher
                key={i}
                name={item.title}
                status={item.status}
                describe={item.describe}
              />
            );
          })}
        <div className="flex items-center justify-between px-2 py-3">
          <span className="text-sm font-['Nunito'] font-bold text-[#333333]">
            Voucher của tôi{" "}
          </span>
          <span
            className="text-right text-xs font-['Nunito'] font-bold text-[#626262]"
            onClick={() => navigate(`${path.myVoucher}`)}
          >
            Xem tất cả
            {"  "}
            &#62;
          </span>
        </div>
        <div className="mx-2 pt-3">
          {!!myVoucher &&
            !!myVoucher.length &&
            myVoucher.map((item, i) => {
              if (i >= 3) return;
              return (
                <ItemMyVoucher
                  key={i}
                  name={item.title}
                  describe={item.describe}
                  image={`${API_URL_IMAGE}${item.image}`}
                  date={item.time_end}
                  point={item.score}
                  type={item.type}
                  onClickChange={() =>
                    setVoucherId(item.id === voucherId ? undefined : item.id)
                  }
                  onClickUse={handleUse}
                />
              );
            })}
        </div>
      </div>
      {showAlert === true ? (
        <ModaNotify
          description={description}
          setPopupVisible={setShowAlert}
          popupVisible={showAlert}
        />
      ) : null}
      {isLoading && <SpinLoad />}
    </div>
  );
};

export default Voucher;
