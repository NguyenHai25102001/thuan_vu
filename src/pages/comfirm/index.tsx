import React from "react";
import Images from "../../static";
import { useNavigate } from "react-router-dom";
import path from "../../constants/path";
import { followOA } from "zmp-sdk/apis";
import { saveIsFollowOA } from "../../utils/auth";
const Comfirm = () => {
  const followOAFuc = () => {
    followOA({
      id: "4046097185763129211",
      success: () => {
        saveIsFollowOA();
        navigate(-1);
      },
      fail: (err) => {
        if (err.code === -201) {
        }
      },
    });
  };
  const navigate = useNavigate();
  return (
    <div className="absolute z-[9999] p-0 m-0 w-full h-full flex flex-cols items-center justify-center bg-[#222222]">
      <div className="w-[90%] rounded-xl bg-white px-4">
        <div className=" flex flex-col  w-full h-full items-center  my-10 gap-2">
          <img
            className="w-40 h-30 object-contain "
            src={Images.logoLineabon}
          />
          <p className="font-semibold text-xl mt-5  mb-2    ">
            Quan tâm Shop Thuận Vũ
          </p>
          <span className="text-center">
            Hãy follow Shop Thuận Vũ để sử dụng đầy đủ tính năng của ứng dụng.
          </span>
          <button
            className="bg-main  w-[85%] py-2 text-white  my-2 mt-2 rounded-lg"
            onClick={() => followOAFuc()}
          >
            Tiếp tục
          </button>
          <button
            className="bg-[#0000000d] w-[85%] py-2 text-black  my-2 mt-2 rounded-lg"
            onClick={() => navigate(path.home)}
          >
            Để sau
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comfirm;
