import React, { useContext, lazy, Suspense } from "react";
import Images from "../../static";
import { AppContext } from "../../contexts/app.context";
import authApi from "../../apis/auth.apis";
import { useMutation } from "@tanstack/react-query";
import { closeApp, getAccessToken, getPhoneNumber } from "zmp-sdk/apis";
import { saveListBabyToLS } from "../../utils/auth";
import profileApi from "../../apis/profileC.apis";
import axios from "axios";
import LoadingPage from "../loadingScreen";
const AddBaby = lazy(() => import("../addBaby"));
const ModalRequestPhone = () => {
  const {
    isAuthenticated,
    setIsAuthenticated,
    setProfile,
    listBaby,
    setListBaby,
    setSelectedBaby,
    phoneUser,
    setPhoneUser,
  } = useContext(AppContext);
  //
  const [loading, setLoading] = React.useState(false);
  const [phoneTemp, setPhoneTemp] = React.useState("");

  const getProfile = async () => {
    try {
      const res = await profileApi.getUserProfile();
      setProfile(res.data.data.user);
      setListBaby(res.data.data.baby);
      saveListBabyToLS(res.data.data.baby);
      setSelectedBaby(res.data.data.baby[0]);
    } catch (error) {
      console.log(error);
    }
  };

  //
  const closeMiniApp = async () => {
    try {
      setProfile(null);
      setIsAuthenticated(false);
      await closeApp({});
    } catch (error) {
      console.log(error);
    }
  };
  const logintMutation = useMutation({
    mutationFn: (body: { phone: string }) => authApi.login(body),
  });
  const loginHandle = async (phone: string) => {
    try {
      const body = { phone: phone };
      const res = await authApi.login(body);
      if (res.data.code === 200) {
        getProfile();
        setIsAuthenticated(true);
      } else {
        alert("Thử lại sau");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = async () => {
    try {
      setLoading(true);
      const accessToken = await getAccessToken({});
      if (accessToken?.code === -1401) {
        closeMiniApp();
      } else {
        console.log("accessToken", accessToken);
        const resToken = await getPhoneNumber();

        const response = await axios({
          url: "https://graph.zalo.me/v2.0/me/info",
          headers: {
            access_token: accessToken,
            code: resToken.token,
            secret_key: "E59b4czjTnbUN49vG48c",
          },
        });
        const numberReturn = response.data?.data?.number;
        const phoneNumber = String(numberReturn);
        const phone = phoneNumber.replace("84", "0");
        const body = { phone: phone };
        const res = await authApi.login(body);
        if (res.data.code === 200) {
          getProfile();
          setPhoneTemp(phone);
          setPhoneUser(phone);
          setIsAuthenticated(true);
        } else {
          alert("Thử lại sau");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (isAuthenticated && !!phoneTemp && !!listBaby && !!listBaby.length) {
    return <></>;
  }

  if (isAuthenticated && !!phoneTemp && listBaby && listBaby.length === 0) {
    return (
      <Suspense>
        <AddBaby />
      </Suspense>
    );
  }

  return (
    <div className="absolute z-[9999] p-0 m-0 w-full h-full flex flex-cols items-center justify-center bg-[#222222]">
      <div className="w-[90%] rounded-xl bg-white px-4">
        <img
          src={Images.babey}
          className=" w-32 h-32 object-contain mx-auto mt-3"
        />
        <p className=" font-bold uppercase text-center text-lg leading-6 my-2">
          CHÀO MỪNG ĐẾN VỚI <br />
          SHOP THUẬN VŨ
        </p>
        <p className=" font-semibold text-base leading-6 mt-2">
          Chúng tôi cần số điện thoại của bạn để:
        </p>
        <div className="flex items-center mt-1">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path
              d="M7.01855 4L13.0186 10L7.01855 16"
              stroke="#e9636e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className=" font-medium text-base leading-6 ">
            Định danh tài khoản
          </p>
        </div>
        <div className="flex items-center mt-1">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path
              d="M7.01855 4L13.0186 10L7.01855 16"
              stroke="#e9636e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className=" font-medium text-base leading-6 ">Mua bán sản phẩm</p>
        </div>
        <div className="flex items-center mt-1">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path
              d="M7.01855 4L13.0186 10L7.01855 16"
              stroke="#e9636e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className=" font-medium text-base leading-6 ">Tra cứu đơn hàng</p>
        </div>

        <p className=" font-medium text-base  leading-6 mt-2">
          Vui lòng đồng ý chia sẻ số điện thoại với Shop Thuận Vũ để liên kết
          tài khoản.
        </p>
        <p className="font-medium text-base text-center leading-6 mt-2"></p>
        <div
          className="w-[100%] py-2 flex items-center justify-center border-2 bg-main bg-blue mt-4 mb-3 rounded-md"
          onClick={handleLogin}
        >
          <p className="text-base text-[#fff] font-light">
            Liên kết số điện thoại
          </p>
        </div>
        <div
          className="w-full box-content py-2 flex items-center justify-center border-2 border-main mb-6 rounded-md"
          onClick={closeMiniApp}
        >
          <p className="text-base text-black font-light">Từ chối và thoát</p>
        </div>
      </div>
      {(loading || logintMutation.isLoading) && <LoadingPage />}
    </div>
  );
};
export default ModalRequestPhone;
