import React from "react";
import { Box, Page, Text, useNavigate, useSnackbar } from "zmp-ui";
import Images from "../../../static";
import Header from "../../../components/header";
import ItemProgramVoucher from "../itemProgramVoucher";
import { ProgramVocher } from "../../../types/voucher.type";
import voucherApi from "../../../apis/voucher.apis";
import SpinLoad from "../../../components/spinLoad";

const ProgramVoucher = () => {
  const navigate = useNavigate();
  const { openSnackbar } = useSnackbar();

  const [programVoucher, setProgramVoucher] = React.useState<ProgramVocher[]>(
    []
  );
  const [isLoading, setIsLoading] = React.useState(false);
  const listInnerRef = React.useRef(null);
  const [page, setPage] = React.useState(1);
  const [lastPage, setLastpage] = React.useState(1);
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (Math.ceil(scrollTop) + clientHeight >= scrollHeight) {
        loadmore();
      }
    }
  };
  const getProgarmVoucher = async () => {
    try {
      setIsLoading(true);
      const res = await voucherApi.getProgramVocher(page);
      if (res.status) {
        const newData = res.data.data.data.map((item) => {
          return {
            ...item,
            active: false,
          };
        });
        setIsLoading(false);
        setProgramVoucher(newData);
        setLastpage(res.data.data.last_page);
      } else {
        setIsLoading(true);
        alert("Có lỗi xảy ra");
      }
    } catch (e) {
      console.error(e);
      setIsLoading(true);
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
        const res = await voucherApi.getProgramVocher(currentPage);
        if (res.status) {
          const newData = res.data.data.data.map((item) => {
            return {
              ...item,
              active: false,
            };
          });
          setIsLoading(false);
          setProgramVoucher([...programVoucher, ...newData]);
          setLastpage(res.data.data.last_page);
        } else {
          setIsLoading(true);
          alert("Có lỗi xảy ra");
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
    getProgarmVoucher();
  }, []);
  return (
    <Box className="h-screen p-0 m-0">
      {/* <Header title="Chương trình Voucher" /> */}
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
      <div className="absolute top-16 right-[22%] m-auto">
        <Text className="flex-1 text-white text-center pr-2 font-semibold uppercase text-xl">
          Chương trình Voucher
        </Text>
      </div>
      <Page
        ref={listInnerRef}
        onScroll={onScroll}
        className="w-full h-full pt-3 pb-40 bg-white"
        hideScrollbar
      >
        <div className="">
          {!!programVoucher &&
            programVoucher.length &&
            programVoucher.map((item, i) => {
              return (
                <ItemProgramVoucher
                  key={i}
                  name={item.title}
                  status={item.status}
                  describe={item.describe}
                />
              );
            })}
        </div>
        {isLoading && <SpinLoad />}
      </Page>
    </Box>
  );
};

export default ProgramVoucher;
