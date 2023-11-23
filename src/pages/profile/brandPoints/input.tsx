import React from "react";

const Input = ({ img, label, placeholder }) => {
  return (
    <div className="w-full border-b-2 border-b-main">
      <label className="text-[15px] text-main font-normal">{label}</label>
      <div className="flex ">
        {img}
        <input
          type="tel"
          className="w-full h-full ml-3  font-normal text-base text-[#000000]"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
