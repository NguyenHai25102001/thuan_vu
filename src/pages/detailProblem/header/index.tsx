import React, { useContext } from "react";
import Images from "../../../static";
const HeaderProblem = ({ onClick, title, image }) => {
  return (
    <div>
      <div className="flex items-center justify-between relative">
        {/* <div className="absolute top-10 right-3" onClick={onClickHome}>
          <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
            <img src={Images.home2} className="object-cover w-5 h-[21px]" />
          </div>
        </div> */}
        <img src={Images.healthRecord} className="w-full h-auto" />
        <div className="absolute top-10 left-3" onClick={onClick}>
          <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
            <img src={Images.iconBack} className="object-cover w-5 h-4" />
          </div>
        </div>
        <div className="absolute w-full h-[40%] top-[60%] bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <div className="absolute top-[60%] left-3 flex justify-normal">
          <img
            src={image}
            className="w-[60px] h-[60px] object-cover rounded-full"
          />
          <div className="ml-2">
            <span className="flex text-white font-bold text-xl ">
              Vấn đề về&nbsp;
              <span className="text-white font-bold text-xl lowercase">
                {title}
              </span>
            </span>
            <div className="rounded-2xl flex items-center justify-center bg-white w-auto max-w-max">
              <div className="px-2 flex items-center">
                <img
                  src={Images.iconCheckMB}
                  className="w-3 h-3 object-contain"
                />
                <span className="flex-grow text-[10px] pl-2 text-main font-bold">
                  Quan trọng
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderProblem;
