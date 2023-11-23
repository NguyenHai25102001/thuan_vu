import React from "react";
import { Box, Page, useNavigate, useSnackbar } from "zmp-ui";
import Images from "../../../static";
import Header from "../../../components/header";
import askDoctorApi from "../../../apis/askDoctor.apis";
import SpinLoad from "../../../components/spinLoad";
import { ItemQuestion } from "../../../types/askDoctor.type";

const InfoDoctor = ({ type, name, majors }) => {
  return (
    <div className="flex items-center justify-normal">
      <img src={Images.avatarDoctor} className="w-9 h-9 object-contain" />
      <div className="ml-1">
        <span className="flex text-xs text-[#817068]">{type}</span>
        <span className="flex text-xs text-[#3D4A50] font-['Noto_Serif_Tamil'] font-semibold">
          {name}
        </span>
        <span className="flex italic text-xs text-[#055E8F]">{majors}</span>
      </div>
    </div>
  );
};

const HistoryAsk = () => {
  const [data, setData] = React.useState<ItemQuestion[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const { openSnackbar } = useSnackbar();

  const formatDate = (dateString) => {
    const date = dateString.slice(0, 10);
    const [year, month, day] = date.split("-");
    return `${day}-${month}-${year}`;
  };
  const getData = async () => {
    setIsLoading(true);
    const res = await askDoctorApi.getAllMyQues();
    if (res.status) {
      setData(res.data.data);
      setIsLoading(false);
    } else {
      openSnackbar({
        position: "top",

        position: "top",
        text: "Có lỗi xảy ra",
        verticalAction: true,
        type: "default",
        icon: true,
        duration: 1500,
      });
    }
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <Box className="h-screen p-0 m-0">
      <Header title="Lịch sử đặt câu hỏi" />
      <Page
        hideScrollbar
        // ref={listInnerRef}
        // onScroll={onScroll}
        className="w-full h-full pb-40 bg-[#E9F6FF]"
      >
        {isLoading && <SpinLoad />}
        {!!data &&
          !!data.length &&
          data.map((item, index) => {
            return (
              <div className="bg-white mx-2 mt-3 mb-2" key={index}>
                <div
                  className="flex justify-between items-center px-3 py-2"
                  onClick={() => {
                    navigate(`/detailQuestion/${item.id}`, {
                      state: { item },
                    });
                  }}
                >
                  {item.type_result === 0 && (
                    <div className="bg-[#57B3FF] rounded-xl flex justify-center items-center">
                      <span className="px-2 py-2 text-white text-xs">
                        Chờ xác nhận câu hỏi
                      </span>
                    </div>
                  )}
                  {item.type_result === 1 && (
                    <div className="">
                      <span className="text-[#0152FF] text-[xs] font-semibold underline">
                        Câu hỏi đã được giải đáp
                      </span>
                    </div>
                  )}
                  <div>
                    <span className="text-[#827C7C] text-xs font-normal">
                      {formatDate(item?.created_at)}
                    </span>
                  </div>
                </div>
                <div
                  className="px-3 pb-2 w-full"
                  onClick={() => {
                    navigate(`/detailQuestion/${item.id}`, {
                      state: { item },
                    });
                  }}
                >
                  <span className="text-[#483235] text-[13px] font-medium">
                    {item?.content_question}
                  </span>
                </div>
                <div className="flex justify-between items-center px-3 pb-2">
                  {item.type_result === 0 && <div></div>}
                  {item.type_result === 1 && (
                    <div className="">
                      <InfoDoctor
                        type="Đã trả lời"
                        name="BS.Hoàng Quốc Tưởng"
                        majors="Chuyên khoa nhi"
                      />
                    </div>
                  )}
                  <div
                    className="self-end"
                    onClick={() =>
                      navigate(`/searchAsk`, { state: item?.info_category })
                    }
                  >
                    <span className="text-[#d92eff] text-[11px] font-semibold underline">
                      Xem đáp án câu hỏi tương tự
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </Page>
    </Box>
  );
};

export default HistoryAsk;
