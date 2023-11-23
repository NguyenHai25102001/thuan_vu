import { useQuery } from "@tanstack/react-query";
import React from "react";
import homeApi from "../../apis/home.apis";
import { bluebabyface, editIcon, gameIcon } from "../../utils/iconSvgNew";
import { LessonModel } from "../../types/home.type";
import { checkBgIconObject } from "../../utils/checkBgIcon";
import { dataStatic } from "../../constants/data";
import { convertTimeByFormat } from "../../module";
import path from "../../constants/path";
import { useNavigate } from "react-router-dom";
interface IProps {
  info: LessonModel;
  showModal: () => void;
}
export default function LessonDetailInfo(props: IProps) {
  const navigate = useNavigate();
  const { data: arrBlog } = useQuery({
    queryKey: ["arrBlogLessonDetailInfo", props.info],
    queryFn: () => {
      return homeApi.getBlogs({ category: props.info.category_id });
    },
    enabled: Boolean(props.info.category_id),
  });
  return (
    <div className="bg-white rounded-t-2xl shadow-sm w-full">
      <div className="px-2 py-4">
        <div className="flex items-center my-2">
          {editIcon}
          <p className="text-black mx-3 font-semibold text-base">
            Mục tiêu bài tập
          </p>
        </div>
        {props.info.target ? (
          <div
            className="text-sm text-black text-justify font-normal"
            dangerouslySetInnerHTML={{ __html: props.info.target }}
          ></div>
        ) : props.info.name ? (
          <div className="flex items-center my-2">
            {bluebabyface}
            <p className="text-[#828282] mx-3 text-sm">{props.info.name}</p>
          </div>
        ) : null}

        <div className="flex items-center mt-4 mb-2">
          {editIcon}
          <p className="text-black mx-3 font-semibold text-base">
            Mô tả chi tiết
          </p>
        </div>
        {props.info.content ? (
          <div
            className="text-sm text-black text-justify font-normal"
            dangerouslySetInnerHTML={{ __html: props.info.content }}
          ></div>
        ) : null}

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
        <div className="flex items-center my-4">
          {editIcon}
          <p className="text-black mx-3 font-semibold text-base">
            Bài viết liên quan
          </p>
        </div>
        <div className="flex items-center w-full pb-2 overflow-x-scroll no-scrollbar">
          {!!arrBlog &&
            !!arrBlog.data &&
            !!arrBlog.data.data &&
            !!arrBlog.data.data.blogs &&
            !!arrBlog.data.data.blogs.length &&
            arrBlog.data.data.blogs.map((item, index) => {
              if (index > 4) return;
              return (
                <div
                  key={index}
                  className="shadow-sm w-[64%] rounded-2xl pb-4 shrink-0 mr-2"
                  onClick={() =>
                    navigate(`${path.detailBlog}`, { state: item.id })
                  }
                >
                  <img
                    src={`${item.image}`}
                    className="w-full h-28 rounded-2xl"
                  />
                  <div className="flex items-center my-2 px-2">
                    {checkBgIconObject(item.category_id).smallIcon}
                    <span className="text-xs text-[#333333] font-normal ml-2">
                      {item.category_id
                        ? dataStatic.listLesson.findIndex(
                            (x) => x.id === item.category_id
                          ) > -1
                          ? dataStatic.listLesson[
                              dataStatic.listLesson.findIndex(
                                (x) => x.id === item.category_id
                              )
                            ].name
                          : "Danh mục"
                        : "Danh mục"}
                    </span>
                  </div>
                  <span className="text-xs text-[#333333] line-clamp-1 font-normal mx-2">
                    {item.title ? item.title : "Nội dung"}
                  </span>
                  <p className="text-xs text-[#626262] line-clamp-1 font-normal mx-2 mt-1">
                    {convertTimeByFormat(item.publish, "HH:mm DD/MM/YYYY")}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
