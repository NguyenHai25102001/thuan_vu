import React from "react";
import { useNavigate } from "react-router-dom";
import Images from "../static";

const HeaderNotBack = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center pt-14 pb-4 bg-main">
      <p className="text-xl font-bold text-center text-white flex-1 ">
        {title}
      </p>
    </div>
  );
};
export default HeaderNotBack;
