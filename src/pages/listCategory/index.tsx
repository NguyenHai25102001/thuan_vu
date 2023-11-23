import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import shopApi from "../../apis/shop.apis";
import { Page } from "zmp-ui";
import path from "../../constants/path";
import { API_URL_IMAGE } from "../../constants/utils";
import Images from "../../static";

export default function ListCategory() {
  const navigate = useNavigate();
  const { data: dataCategory, isLoading } = useQuery({
    queryKey: ["dataCategory"],
    queryFn: () => {
      return shopApi.getCategoryShop();
    },
    staleTime: 1 * 60 * 1000,
  });

  return (
    <div className="w-full h-full bg-white relative">
      {isLoading && (
        <div className="fixed w-full h-full bg-black bg-opacity-80 z-9999 flex items-center justify-center">
          <div className="spin-loading"></div>
        </div>
      )}
      <div className="pt-14 pb-4 bg-main">
        <div className="flex items-center ">
          <div
            className="w-9 h-9 bg-white ml-2 rounded-full flex items-center justify-center"
            onClick={() => navigate(-1)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.9999 11H6.41394L11.7069 5.70703L10.2929 4.29303L2.58594 12L10.2929 19.707L11.7069 18.293L6.41394 13H20.9999V11Z"
                fill="#333333"
              />
            </svg>
          </div>
          <p className="text-base font-['Nunito'] font-bold text-center text-white uppercase flex-1 mr-9">
            Danh mục sản phẩm
          </p>
        </div>
      </div>
      <Page className="w-full h-full no-scrollbar" hideScrollbar>
        <div className="grid grid-cols-3 px-2 gap-x-3 gap-y-2 pt-5">
          {!!dataCategory &&
            !!dataCategory.data &&
            !!dataCategory.data.data &&
            !!dataCategory.data.data.length &&
            dataCategory.data.data.map((item, index) => {
              return (
                <div
                  className="flex flex-col items-center justify-center mb-1"
                  key={item.id}
                  onClick={() => navigate(path.category, { state: item.id })}
                >
                  <img
                    src={
                      item.image
                        ? `${API_URL_IMAGE}${item.image}`
                        : Images.iconPresent
                    }
                    className="w-[100%] min-h-16 object-cover rounded-md"
                  />
                  <p className="text-center text-xs font-['Nunito'] font-semibold text-[#828282] mt-2 mx-1 line-clamp-2">
                    {item.name}
                  </p>
                </div>
              );
            })}
        </div>
        <div className="h-40" />
      </Page>
    </div>
  );
}
