import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import { Page } from "zmp-ui";
import Images from "../../static";
import { useLocation, useNavigate } from "react-router-dom";
import path from "../../constants/path";
import detailProblemApi from "../../apis/detailProblem.apis";
import { API_URL_IMAGE } from "../../constants/utils";

const LisPostWithProblem = () => {
  const [listPost, setListPost] = useState([]);
  const location = useLocation();
  const getDetailProblemList = async () => {
    const res = await detailProblemApi.getDetailProblemListPost(
      location?.state?.id
    );
    if (res?.status) {
      setListPost(res?.data?.data);
    } else {
      alert("Có lỗi xảy ra");
    }
  };
  useEffect(() => {
    getDetailProblemList();
  }, [location]);

  const navigate = useNavigate();
  return (
    <div className="w-full h-full bg-white relative">
      <Header title={location?.state?.name} />
      <Page className="w-full h-full px-4 mt-5 pb-28 " hideScrollbar>
        <div className="grid gap-4 grid-cols-2">
          {!!listPost &&
            !!listPost.length &&
            listPost.map((item, index) => {
              return (
                <div
                  key={index}
                  className="pt-2"
                  onClick={() =>
                    navigate(`${path.categoryHandBook}`, {
                      state: item,
                    })
                  }
                >
                  <div className="mx-auto shadow rounded-lg pb-2 flex flex-col  ">
                    <img
                      src={`${API_URL_IMAGE}${item?.image}`}
                      className="object-cover h-[101px] mb-[5px] w-full rounded-lg"
                    />
                    <p className="text-black mx-1 my-1 text-xs leading-4 font-['Lohit_Sans'] line-clamp-1 self-start">
                      {item.title}
                    </p>
                    <p className="text-[#376464]  text-[10px] leading-[16px] mx-1 line-clamp-1 ]">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center ">
                      <div className="flex items-center ml-2">
                        <img
                          src={Images.iconEyes}
                          className="w-[11px] h-2 object-contain"
                        />
                        <span className="text-black text-[10px]">
                          Lượt xem: {item?.view}
                        </span>
                      </div>
                      <div className="bg-[#3F5F5B] mr-1 h-[10px] w-[10px] rounded-full flex items-center justify-center">
                        <img
                          src={Images.iconArrowRightWhite}
                          className="w-[4px] h-[4px] object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </Page>
    </div>
  );
};

export default LisPostWithProblem;
