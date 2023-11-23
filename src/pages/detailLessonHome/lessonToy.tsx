import { useQuery } from "@tanstack/react-query";
import React from "react";
import homeApi from "../../apis/home.apis";
import { bluebabyface, editIcon, gameIcon } from "../../utils/iconSvgNew";
import { LessonModel } from "../../types/home.type";
import { checkBgIconObject } from "../../utils/checkBgIcon";
import { dataStatic } from "../../constants/data";
import { convertTimeByFormat } from "../../module";
import { ToyModel } from "../../types/blogs.type";
import Images from "../../static";
interface IProps {
  arrToys: ToyModel[];
  showModal: () => void;
}
export default function LessonToy(props: IProps) {
  return (
    <div className="bg-white rounded-t-2xl shadow-sm w-full">
      <div>
        {!!props.arrToys && props.arrToys.length > 0 ? (
          props.arrToys.map((item, index) => {
            const cateofToy =
              dataStatic.listLesson[
                dataStatic.listLesson.findIndex(
                  (x) => x.id === item.category_id
                )
              ].name;
            return (
              <a
                key={index}
                className="flex rounded-2xl shadow-md my-4 mx-2 bg-white"
                href={`${item.links ? item.links : ""}`}
              >
                <div className="w-[35%] h-24">
                  <img
                    src={item.image ? item.image : Images.toy}
                    className="w-full h-full rounded-2xl"
                  />
                </div>
                <div className="flex-1 px-2 py-1">
                  <div className="flex items-center">
                    {checkBgIconObject(item.category_id).smallIcon}
                    <p className="text-[#DEDEDE] text-sm line-clamp-1 mx-3">
                      {cateofToy || "Đồ chơi"}
                    </p>
                  </div>
                  <p className="text-[#000000] text-sm mt-1 line-clamp-3">
                    {item.name || "Đồ chơi"}
                  </p>
                </div>
              </a>
            );
          })
        ) : (
          <div className="w-full h-40 bg-white flex items-center justify-center">
            <p className="text-black text-base font-normal">
              Bài tập không có đồ chơi đi kèm
            </p>
          </div>
        )}
      </div>
      <div className="px-2 py-4">
        <div className="flex items-center my-2">
          {gameIcon}
          <p className="text-black mx-3 font-semibold text-base">
            Đồ chơi theo tháng
          </p>
        </div>
        <div
          className="rounded-2xl my-3 w-full py-2 flex items-center justify-center bg-blue"
          onClick={() => {
            props.showModal();
          }}
        >
          <p className="text-base text-white">Xem đồ chơi của bé tháng này</p>
        </div>
      </div>
    </div>
  );
}
