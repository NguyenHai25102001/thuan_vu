import React from "react";
import { Text } from "zmp-ui";
import Images from "../../../static";

interface IProps {
  title: string;
  onClick: () => void;
}
const HeaderMB = ({ title, onClick }: IProps) => {
  return (
    <div className="flex items-center justify-between pt-14 px-[12px] pb-4 bg-main">
      <div className="p-1" onClick={onClick}>
        <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
          <img src={Images.iconBack} className="object-cover w-5 h-4" />
        </div>
      </div>
      <Text className="flex-1 text-white text-center pr-2 font-bold uppercase text-xl">
        {title}
      </Text>
    </div>
  );
};

export default HeaderMB;
