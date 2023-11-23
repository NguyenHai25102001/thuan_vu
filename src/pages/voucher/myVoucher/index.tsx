import React from "react";
import { Box, Page, Text, useNavigate } from "zmp-ui";
import Images from "../../../static";
import ItemMyVoucher from "../itemMyVoucher";
import voucherApi from "../../../apis/voucher.apis";
import { Voucher } from "../../../types/voucher.type";
import { API_URL_IMAGE } from "../../../constants/utils";
import SpinLoad from "../../../components/spinLoad";
import ModaNotify from "../../../components/modaNotify";

const MyVoucher = () => {
  const navigate = useNavigate();
  const [dataVoucher, setVoucher] = React.useState<Voucher[]>([]);
  const [voucherId, setVoucherId] = React.useState<number>();
  const [isLoading, setIsLoading] = React.useState(false);
  const listInnerRef = React.useRef(null);
  const [page, setPage] = React.useState(1);
  const [lastPage, setLastpage] = React.useState(1);
  const [showAlert, setShowAlert] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (Math.ceil(scrollTop) + clientHeight >= scrollHeight) {
        loadmore();
      }
    }
  };

  const getVoucher = async () => {
    try {
      setIsLoading(true);
      const res = await voucherApi.getMyVoucher(page);
      if (res.status) {
        const newData = res.data.data.data.map((item) => {
          return {
            ...item,
            active: false,
          };
        });
        setIsLoading(false);
        setVoucher(newData);
        setLastpage(res.data.data.last_page);
      } else {
        setIsLoading(true);
        setDescription("Có lỗi xảy ra");
        setShowAlert(true);
      }
    } catch (error) {
      setIsLoading(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const loadmore = async () => {
    if (page >= lastPage) {
      return;
    } else {
      try {
        setIsLoading(true);
        const currentPage = page + 1;
        setPage(currentPage);
        const res = await voucherApi.getMyVoucher(currentPage);
        if (res.status) {
          const newData = res.data.data.data.map((item) => {
            return {
              ...item,
              active: false,
            };
          });
          setIsLoading(false);
          setVoucher([...dataVoucher, ...newData]);
          setLastpage(res.data.data.last_page);
        } else {
          setIsLoading(true);
          setDescription("Có lỗi xảy ra");
          setShowAlert(true);
        }
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };
  React.useEffect(() => {
    getVoucher();
  }, []);
  const exchangePoints = async () => {
    let formData = new FormData();
    formData.append("voucher_id", `${voucherId}`);
    try {
      const res = await voucherApi.exchangePoints(formData);
      if (res.status) {
        setDescription(res.data.msg);
        setShowAlert(true);
        getVoucher();
      } else {
        setDescription("Có lỗi xảy ra");
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Lỗi khi thực hiện đổi voucher", error);
      setDescription("Không thể đổi voucher, vui lòng thử lại!");
      setShowAlert(true);
    }
  };
  React.useEffect(() => {
    if (voucherId) {
      exchangePoints();
    }
  }, [voucherId]);
  const handleUse = () => {};
  return (
    <Box className="h-screen p-0 m-0">
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
      <div className="absolute top-16 right-[28%] m-auto">
        <Text className="flex-1 text-white text-center pr-2 font-semibold uppercase text-xl">
          Voucher của tôi
        </Text>
      </div>
      <Page
        ref={listInnerRef}
        onScroll={onScroll}
        className="w-full h-full pt-3 px-2 pb-40 bg-white"
        hideScrollbar
      >
        {!!dataVoucher &&
          !!dataVoucher.length &&
          dataVoucher.map((item, i) => {
            // if (item.type !== 1) return;
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
        {showAlert === true ? (
          <ModaNotify
            description={description}
            setPopupVisible={setShowAlert}
            popupVisible={showAlert}
          />
        ) : null}
        {isLoading && <SpinLoad />}
      </Page>
    </Box>
  );
};

export default MyVoucher;
