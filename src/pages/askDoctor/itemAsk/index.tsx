import React from "react";
import Images from "../../../static";
import { useNavigate } from "zmp-ui";
import { showTimeAgo } from "../../../module";
import { API_URL_IMAGE } from "../../../constants/utils";

const InfoDoctor = ({ type, name, majors }) => {
  return (
    <div className="flex items-center justify-normal">
      <img src={Images.avatarDoctor} className="w-9 h-9 object-cover" />
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

const ItemAsk = ({ item, infoDoctor, img }) => {
  const navigate = useNavigate();
  const viewDetail = () => {
    navigate(`/detailQuestion/${item.id}`, {
      state: { item },
    });
    // if (location.pathname === "/detailAsk") {
    //   navigate(`/detailAskSub`, { state: { data: item.id, item } });
    // } else {
    //   navigate(`/detailAsk`, { state: { data: item.id, item } });
    // }
  };
  return (
    <div className="py-2 px-2" onClick={() => viewDetail()}>
      <div
        className={
          infoDoctor ? "py-2 px-2 rounded-lg bg-white" : "rounded-lg bg-white"
        }
      >
        {img && (
          <img
            src={`${API_URL_IMAGE}${item?.image}`}
            className={
              infoDoctor
                ? "w-full h-[134px] object-cover rounded-lg"
                : "w-[260px] h-[118px] object-cover rounded-lg"
            }
          />
        )}
        <p className="px-2 text-[13px] text-[#483235] font-semibold line-clamp-2 h-10 pt-1">
          {item?.content_question}
        </p>
        <div className="px-1 flex items-center justify-between">
          <div className="flex items-center pl-1 pb-2">
            <img
              src={`${item?.info_user?.image}`}
              className="w-[30px] h-[30px] object-cover rounded-full"
            />
            <div className="ml-2">
              <span className="flex font-normal text-[10px] text-[#828282]">
                {item?.info_user?.name}
              </span>
              {item?.created_at && (
                <span className="flex font-normal text-[10px] text-[#828282]">
                  {showTimeAgo(item?.created_at)}
                </span>
              )}
            </div>
          </div>
          {infoDoctor && (
            <div className="flex justify-between pl-3">
              <InfoDoctor
                type="Đã trả lời"
                name="BS.Hoàng Quốc Tưởng"
                majors="Chuyên khoa nhi"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemAsk;
