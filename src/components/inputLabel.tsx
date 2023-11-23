import React from "react";

const InputLabel = ({
  img,
  label,
  placeholder,
  type,
  value,
  onChange,
  noEdit,
}) => {
  return (
    <div className="w-full border-b-2 border-b-main mb-3">
      <label className="text-[15px] text-main font-normal ">{label}</label>
      <div className="flex mt-2 items-end">
        {img}
        <input
          type={type}
          className="w-full h-[30px] ml-3  font-normal text-base text-[#000000] mb-0 outline-none"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          readOnly={!!noEdit ? true : false}
        />
      </div>
    </div>
  );
};

export default InputLabel;
