import React from "react";
import { useNavigate } from "react-router-dom";
const Header = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center pt-14 pb-4 bg-main">
      <div
        className="w-9 h-9 bg-white ml-3 rounded-full flex items-center justify-center"
        onClick={() => navigate(-1)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M20.9999 11H6.41394L11.7069 5.70703L10.2929 4.29303L2.58594 12L10.2929 19.707L11.7069 18.293L6.41394 13H20.9999V11Z"
            fill="#333333"
          />
        </svg>
      </div>
      <p className="text-xl  font-bold text-center text-white flex-1 mr-12 line-clamp-2">
        {title}
      </p>
    </div>
  );
};
export default Header;
