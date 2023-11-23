import React from "react";
import { useLocation } from "react-router-dom";
import { Page, useNavigate } from "zmp-ui";
import HeaderMB from "../header";
import Images from "../../../static";
import ItemAsk from "../itemAsk";
import axios from "axios";
import Header from "../../../components/header";

const InfoDoctor = ({ type, name, majors }) => {
  return (
    <div className="flex justify-normal">
      <img
        src={Images.avatarDoctor}
        className="w-[35px] h-[35px] object-cover"
      />
      <div className="ml-1">
        <span className="flex text-xs text-[#817068]">{type}</span>
        <span className="flex uppercase text-xs text-[#3D4A50] font-semibold">
          {name}
        </span>
        <span className="flex italic text-xs text-[#055E8F]">{majors}</span>
      </div>
    </div>
  );
};

const DetailAskSub = () => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMDMuMjI2LjI0OS4zMDo4MDAxXC9hcGlcL2xvZ2luLXphbG8tbWluaWFwcCIsImlhdCI6MTY4OTEzODA1OSwiZXhwIjoxNjkwNDM0MDU5LCJuYmYiOjE2ODkxMzgwNTksImp0aSI6IkU5NVp2dHdIUEZhR2dXemwiLCJzdWIiOjMxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.aK8m2wXwkF7UZVj3UPucJX2FdOkFdub4C7fSFwuUz-k";

  const navigate = useNavigate();
  const location = useLocation();

  const getDataSimilar = async () => {
    const res = await axios({
      method: "get",
      url: `http://103.226.249.30:8001/api/question/list-question-relate/${data?.data}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status) {
      setDataSimilar(res.data.data);
    }
  };
  React.useEffect(() => {
    getDataSimilar();
  }, []);
  return (
    <Page className="h-screen p-0 m-0" hideScrollbar>
      <div className="overflow-y-hidden sticky top-0">
        <Header title={data?.item?.info_category?.content} />
      </div>
      <Page hideScrollbar className="w-ful h-full px-2 pt-2 bg-[#E9F6FF]">
        <div className="flex">
          <img
            src={data?.item?.info_user?.image}
            className="w-[30px] h-[30px] object-cover"
          />
          <div className="ml-2">
            <span className="flex font-normal text-[10px] text-[#828282]">
              {data?.item?.info_user?.name}
            </span>
            <span className="flex font-normal text-[10px] text-[#828282]">
              {showTimeAgo(data?.item?.created_at)}
            </span>
          </div>
        </div>
        <div className="pt-3">
          <img
            src={`${baseUrl}${data?.item?.image}`}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
        <div className="grid pt-3">
          <span className=" text-[#3D4A50] text-sm font-semibold">
            Câu hỏi:
          </span>
          <span className="text-[13px] font-medium text-[#483235] pt-2 pb-1">
            {data?.item?.content_question}
          </span>
          <div className="w-full h-[1px] bg-[#D9D9D9]"></div>
        </div>
        <div className="grid pt-3">
          <span className=" text-[#3D4A50] text-sm font-semibold pb-2">
            Trả lời:
          </span>
          {data?.item?.type_result === 1 && (
            <>
              <InfoDoctor
                type="Đã trả lời"
                name="BS.HOÀng quốc tưởng"
                majors="Chuyên khoa nhi"
              />
              <span className="text-[13px] font-medium text-[#483235] pt-2 pb-1">
                {data?.item?.content_answer}
              </span>
            </>
          )}
          {data?.item?.type_result === 0 && (
            <p className="text-red-600 text-base font-semibold pb-3">
              Câu hỏi chưa được trả lời
            </p>
          )}
        </div>
        <div className="rounded-2xl flex items-center justify-center bg-white w-auto max-w-max h-6 border border-[#A2B9C0]">
          <div className="px-2 flex items-center">
            <span className="flex-grow w-[100%] text-xs text-[#1a1817] font-normal">
              {data?.item?.info_category?.content}
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
      </Page>
    </Page>
  );
};

export default DetailAskSub;
