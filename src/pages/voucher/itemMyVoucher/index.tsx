import React from "react";

const formatDate = (dateString) => {
  const date = dateString.split("-");

  const reversedDate = date.reverse();

  const formattedDate = reversedDate.join("-");

  return formattedDate;
};

const ItemMyVoucher = ({
  image,
  name,
  describe,
  date,
  point,
  type,
  onClickChange,
  onClickUse,
}) => {
  return (
    <div className="frameVoucher w-full h-[117px] mb-3 border-l border-r rounded-lg flex items-center">
      <div className="w-[30%] h-full flex items-center justify-center">
        <img
          src={`${image}`}
          className="w-[90px] h-[90px] object-contain rounded-lg"
        />
      </div>
      <div className="ml-4 mr-2 w-[70%] h-full flex flex-col justify-between py-2">
        <div className="flex justify-between items-center pt-2">
          <span className="font-['Montserrat'] font-semibold text-[#28293d] w-[50%] line-clamp-1">
            {name}
          </span>
          {type === 1 && (
            <svg
              className=""
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M9.00033 17.3333C4.39783 17.3333 0.666992 13.6025 0.666992 9C0.666992 4.3975 4.39783 0.666668 9.00033 0.666668C13.6028 0.666668 17.3337 4.3975 17.3337 9C17.3337 13.6025 13.6028 17.3333 9.00033 17.3333ZM9.00033 15.6667C10.7684 15.6667 12.4641 14.9643 13.7144 13.714C14.9646 12.4638 15.667 10.7681 15.667 9C15.667 7.23189 14.9646 5.5362 13.7144 4.28596C12.4641 3.03571 10.7684 2.33333 9.00033 2.33333C7.23222 2.33333 5.53652 3.03571 4.28628 4.28596C3.03604 5.5362 2.33366 7.23189 2.33366 9C2.33366 10.7681 3.03604 12.4638 4.28628 13.714C5.53652 14.9643 7.23222 15.6667 9.00033 15.6667ZM8.16699 4.83333H9.83366V6.5H8.16699V4.83333ZM8.16699 8.16667H9.83366V13.1667H8.16699V8.16667Z"
                fill="#8F90A6"
              />
            </svg>
          )}
          {type === 0 && (
            <span className="font-['Montserrat'] font-semibold text-[#004fc4] line-clamp-1 w-[60%]">
              Đổi với: {point} điểm
            </span>
          )}
        </div>
        <div className="flex justify-between items-center pr-3">
          <span className="text-sm font-['Montserrat'] text-[#8f90a6] line-clamp-2">
            {describe}
          </span>
          {/* <div className="w-14"></div> */}
        </div>
        <div className="flex justify-between items-center pr-[6px]">
          <span className="text-xs font-['Montserrat'] text-[#8f90a6]">
            Date : {formatDate(date)}
          </span>
          {type === 1 && (
            <div onClick={onClickUse}>
              <p className="text-sm font-['Montserrat'] font-semibold text-[#d54f44] bg-gradient-to-r from-pink-600 via-red-600 to-orange-500 text-transparent bg-clip-text">
                Có thể sử dụng
              </p>
            </div>
          )}
          {type === 0 && (
            <div onClick={onClickChange}>
              <p className="text-sm font-['Montserrat'] font-semibold text-[#d54f44] bg-gradient-to-r from-pink-600 via-red-600 to-orange-500 text-transparent bg-clip-text">
                Đổi
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ItemMyVoucher;
