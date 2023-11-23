import React, { useContext } from "react";
import Images from "../../../static";
import { useMutation } from "@tanstack/react-query";
import authApi from "../../../apis/auth.apis";
import { AppContext } from "../../../contexts/app.context";
import { useNavigate } from "react-router-dom";
import path from "../../../constants/path";

const HeaderProfile = () => {
  const [data, setData] = React.useState([]);
  const { selectedBaby } = useContext(AppContext);
  const navigate = useNavigate();

  const { setProfile, setListBaby, setIsAuthenticated } =
    useContext(AppContext);
  // logout
  const logoutMutation = useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: (data) => {
      setProfile(null);
      setListBaby([]);
      setIsAuthenticated(false);
    },
    onError: (e) => {
      console.log("lôiut", e);
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };
  return (
    <div className="flex items-center justify-between">
      <img src={Images.healthRecord} className="w-full h-auto relative" />

      <div className="absolute w-full h-[100px] top-[60%] bg-gradient-to-t from-black to-transparent opacity-70"></div>
      <div className="absolute top-[60%] left-3 flex justify-normal">
        <img
          src={selectedBaby?.image}
          className="w-[60px] h-[60px] object-cover rounded-full"
          onClick={handleLogout}
        />
        <div className="ml-2">
          <span className="flex text-white font-bold text-xl">
            Hồ sơ sức khỏe
          </span>
          <div className="rounded-2xl flex items-center justify-center bg-white w-auto max-w-max">
            <div className="px-2 flex items-center">
              <img
                src={Images.iconCheckMB}
                className="w-3 h-3 object-contain"
              />
              <span className="flex-grow text-[10px] pl-2 text-main font-bold line-clamp-1">
                Bé: {selectedBaby?.name}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-9 h-9 absolute top-[25%] left-[4%] z-[999999] bg-white ml-2 rounded-full flex items-center justify-center"
        onClick={() => navigate(-1)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M20.9999 11H6.41394L11.7069 5.70703L10.2929 4.29303L2.58594 12L10.2929 19.707L11.7069 18.293L6.41394 13H20.9999V11Z"
            fill="#333333"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeaderProfile;
