import React from "react";
import { useLocation } from "react-router-dom";
import { Page } from "zmp-ui";
import Images from "../../../static";
import ItemAsk from "../itemAsk";
import Header from "../../../components/header";
import askDoctorApi from "../../../apis/askDoctor.apis";
import { showTimeAgo } from "../../../module";
import { API_URL_IMAGE } from "../../../constants/utils";
import { ItemQuestion } from "../../../types/askDoctor.type";
import SpinLoad from "../../../components/spinLoad";
const InfoDoctor = ({ type, name, majors }) => {
  return (
    <div className="flex justify-normal">
      <img
        src={Images.avatarDoctor}
        className="w-[35px] h-[35px] object-cover"
      />
      <div className="ml-1">
        <span className="flex text-xs text-[#817068]">{type}</span>
        <span className="flex text-xs font-['Noto_Serif_Tamil'] text-[#3D4A50] font-semibold">
          {name}
        </span>
        <span className="flex italic text-xs text-[#055E8F]">{majors}</span>
      </div>
    </div>
  );
};

const DetailAsk = () => {
  const location = useLocation();
  const { item } = location.state;
  const [dataSimilar, setDataSimilar] = React.useState<ItemQuestion[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const increaseView = async () => {
    const res = await askDoctorApi.getIncreaseViewsApi(item?.id);
    if (res.status) {
    } else {
      console.log("Có lỗi xảy ra");
    }
  };
  const getDataSimilar = async () => {
    try {
      setIsLoading(true);
      const res = await askDoctorApi.getQuesSimilar(item?.id_category_question);
      if (res.status) {
        setIsLoading(false);
        setDataSimilar(res.data.data);
      } else {
        setIsLoading(false);
        alert("Có lỗi xảy ra");
      }
    } catch (error) {
      setIsLoading(true);

      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    increaseView();
    getDataSimilar();
  }, []);
  return (
    <Page className="h-screen p-0 m-0" hideScrollbar>
      <div className="overflow-y-hidden sticky top-0">
        <Header title={item?.info_category?.content} />
      </div>
      <Page hideScrollbar className="w-ful h-full px-2 pt-2 bg-[#E9F6FF]">
        <div className="flex items-center">
          <img
            src={item?.info_user?.image}
            className="w-[30px] h-[30px] object-cover rounded-full"
          />
          <div className="ml-2">
            <span className="flex font-normal text-[10px] text-[#828282]">
              {item?.info_user?.name}
            </span>
            <span className="flex font-normal text-[10px] text-[#828282]">
              {showTimeAgo(item?.created_at)}
            </span>
          </div>
        </div>
        <div className="pt-3">
          <img
            src={`${API_URL_IMAGE}${item?.image}`}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
        <div className="grid pt-3">
          <span className=" text-[#3D4A50] text-sm font-semibold">
            Câu hỏi:
          </span>
          <span className="text-[13px] font-medium text-[#483235] pt-2 pb-1">
            {item?.content_question}
          </span>
          <div className="w-full h-[1px] bg-[#D9D9D9]"></div>
        </div>

        <div className="grid pt-3">
          <span className=" text-[#3D4A50] text-sm font-semibold pb-2">
            Trả lời:
          </span>
          {item?.type_result === 1 && (
            <>
              <InfoDoctor
                type="Đã trả lời"
                name="BS.Hoàng Quốc Tưởng"
                majors="Chuyên khoa nhi"
              />
              <span className="text-[13px] font-medium text-[#483235] pt-2 pb-1">
                {item?.content_answer}
              </span>
            </>
          )}
          {item?.type_result === 0 && (
            <p className="text-red-600 text-base font-semibold pb-3">
              Câu hỏi chưa được trả lời
            </p>
          )}
        </div>

        <div className="rounded-2xl flex items-center justify-center bg-white w-auto max-w-max h-6 border border-[#A2B9C0]">
          <div className="px-2 flex items-center">
            <span className="flex-grow w-[100%] text-xs text-[#1a1817] font-normal">
              {item?.info_category?.content}
            </span>
          </div>
        </div>
        <div className="pt-3">
          <span className="text-base text-[#3D4A50] font-semibold">
            Câu hỏi liên quan
          </span>
          <div className="mt-3">
            {!!dataSimilar &&
              !!dataSimilar.length &&
              dataSimilar.map((item, index) => {
                return (
                  <ItemAsk
                    key={index}
                    item={item}
                    infoDoctor={true}
                    img={false}
                  />
                );
              })}
          </div>
        </div>
        {isLoading && <SpinLoad />}
      </Page>
    </Page>
  );
};

export default DetailAsk;
