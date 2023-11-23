import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import InputLabel from "../../components/inputLabel";
import Header from "../../components/header";
import Images from "../../static";
import axios from "axios";
import API from "../../api";
import { AppContext } from "../../contexts/app.context";
import { Modal, Spinner } from "zmp-ui";
import path from "../../constants/path";
const BrandPoin = () => {
  const navigate = useNavigate();
  const [code, setCode] = React.useState<string>("");
  const [arrPointBrand, setArrPointBrand] = React.useState([]);
  const [content, setContent] = React.useState<string>("");
  const [isShowModal, setIsShowModal] = React.useState(false);
  const [loadButton, setLoadButton] = React.useState<boolean>(false);
  const [loadButtonModal, setLoadButtonModal] = React.useState<boolean>(false);
  const { profile } = useContext(AppContext);
  const phoneUser = profile?.userName;
  const getPointBrandHome = async (phoneUser) => {
    try {
      let phoneConvert = "84" + phoneUser.substring(1);
      let dataPost = {
        Mobile: phoneConvert,
        CustomerId: "267",
      };
      const tokenRevo =
        "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6InJldm8iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoicmV2byIsIkZ1bGxuYW1lIjoiUXXDvSBraMOhY2giLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjczNyIsIkN1c3RvbWVySWQiOiIyNjciLCJleHAiOjE3MDk0NDA4ODksImlzcyI6InRlbWNob25nZ2lhLmNvbS52biIsImF1ZCI6IkRhYzgwOTkifQ.shPC_m0wc1g6Y-Zgsm3JwA31ochQPknsVl94A553_4E";
      const response = axios({
        url: API.checkPoint(),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenRevo}`,
        },
        data: dataPost,
      });
      if (response.status && response.status === 200) {
        setArrPointBrand(
          response.data.customerListPointModels[0]?.CustomerListPoints
        );
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  const confirm = async () => {
    let phoneConvert = "84" + phoneUser?.substring(1);
    let ms = `DAC ${code.trim()}`;
    let dataPost = {
      User_ID: phoneConvert,
      Service_ID: "REVM",
      Command_Code: "DAC",
      Message: ms,
      Request_ID: "",
      AnswerTypeCode: "MOB",
    };
    const tokenRevo =
      "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6InJldm8iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoicmV2byIsIkZ1bGxuYW1lIjoiUXXDvSBraMOhY2giLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjczNyIsIkN1c3RvbWVySWQiOiIyNjciLCJleHAiOjE3MDk0NDA4ODksImlzcyI6InRlbWNob25nZ2lhLmNvbS52biIsImF1ZCI6IkRhYzgwOTkifQ.shPC_m0wc1g6Y-Zgsm3JwA31ochQPknsVl94A553_4E";
    try {
      const res = await axios({
        url: API.lookupRevo(),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenRevo}`,
        },
        data: dataPost,
      });
      if (res.status === 200) {
        setLoadButton(false);
        getPointBrandHome(phoneUser);
        if (res.data.DacProductSmsMT.QueryStatus == 1) {
          setContent(
            "Bạn đã tích điểm thành công! Hãy tích thêm điểm để đổi các phần quà hệ thống!"
          );
          setLoadButtonModal(false);
        } else {
          setContent(res.data.DacProductSmsMT.Message);
          setLoadButtonModal(true);
        }

        setIsShowModal(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-screen h-screen bg-white">
      {loadButton === true ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 10000,
            width: "100%",
            height: "100%",
            backgroundColor: "#00000080",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner visible />
        </div>
      ) : (
        <div>
          <Header title={"Tích điểm thương hiệu"} />
          <div className="w-full h-full px-6">
            <p className="font-semibold text-base text-black my-2">
              {" "}
              HÃY NHẬP MÃ CÀO
            </p>
            <InputLabel
              type={"tel"}
              label={"Số điện thoại"}
              placeholder={"Số điện thoại"}
              noEdit
              value={phoneUser || ""}
              img={
                <svg width="20" height="20" viewBox="0 0 22 24" fill="none">
                  <path
                    d="M5.73684 1L1 3.29167V3.75V4.20833L1.52632 6.5L2.05263 8.33333L2.57895 10.1667L4.15789 12.9167L6.26316 15.6667L8.89474 18.4167L14.6842 22.5417L16.7895 23L18.3684 22.5417L19.9474 21.625C20.2982 20.7083 21 19.0583 21 19.7917V18.875L17.8421 16.125L16.2632 15.2083H15.2105H13.6316H12.5789L7.84211 8.79167L9.42105 6.95833V6.04167L6.78947 1H5.73684Z"
                    stroke="#e9636e"
                  />
                </svg>
              }
            />
            <InputLabel
              type={"text"}
              label={"Mã cào trên tem"}
              placeholder={"Mã cào"}
              img={
                <img
                  src={Images.iconQrcode}
                  className="w-[30px] h-[30px] object-contain "
                />
              }
              value={code}
              onChange={(text: string) => setCode(text?.target.value)}
            />
            <button
              className=" bg-main flex flex-col  justify-center items-center  absolute bottom-10 left-1/2 -translate-x-1/2 w-[70%] py-2 rounded-3xl"
              onClick={() => {
                confirm();
                setLoadButton(true);
              }}
            >
              <p className=" text-white text-center"> Tích điểm</p>
            </button>
          </div>
          <Modal
            visible={isShowModal}
            title="THÔNG BÁO"
            description={content}
            onClose={() => {
              setIsShowModal(false);
            }}
          >
            {loadButtonModal === false ? (
              <div className="w-full h-full flex justify-center ">
                <button
                  className="bg-main px-3 py-1 mt-2 rounded text-white font-medium"
                  onClick={() => {
                    navigate(path.brandGift);
                  }}
                >
                  Đổi quà ngay
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </Modal>
        </div>
      )}
    </div>
  );
};

export default BrandPoin;
