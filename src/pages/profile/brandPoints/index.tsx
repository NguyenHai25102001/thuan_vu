import React from "react";
import Header from "../../../components/header";
import { useNavigate } from "react-router-dom";
import Input from "./input";
import "../styles.css";
const BrandPoin = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-white">
      <Header title={"Tích điểm thương hiệu"} />
      <div className="w-full h-full px-6">
        <p className="font-semibold text-base text-black"> HÃY NHẬP MÃ CÀO</p>
        <Input
          label={"Số điện thoại"}
          placeholder={"Nhập số điện thoại"}
          img={
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
              <path
                d="M5.73684 1L1 3.29167V3.75V4.20833L1.52632 6.5L2.05263 8.33333L2.57895 10.1667L4.15789 12.9167L6.26316 15.6667L8.89474 18.4167L14.6842 22.5417L16.7895 23L18.3684 22.5417L19.9474 21.625C20.2982 20.7083 21 19.0583 21 19.7917V18.875L17.8421 16.125L16.2632 15.2083H15.2105H13.6316H12.5789L7.84211 8.79167L9.42105 6.95833V6.04167L6.78947 1H5.73684Z"
                stroke="#e9636e"
              />
            </svg>
          }
        />
        <Input
          label={"Mã cào trên tem"}
          placeholder={"Mã cào"}
          img={
            <svg
              width="22"
              height="24"
              fill="currentColor"
              className="bi bi-qr-code my-svg "
              viewBox="0 0 16 16"
            >
              <path d="M2 2h2v2H2V2Z" stroke="#e9636e" />
              <path
                d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z"
                stroke="#e9636e"
              />
              <path
                d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z"
                stroke="#e9636e"
              />
              <path
                d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z"
                stroke="#e9636e"
              />
              <path
                d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z"
                stroke="#e9636e"
              />
            </svg>
          }
        />
        <button className=" bg-main flex flex-col  justify-center items-center  absolute bottom-2 left-1/2 -translate-x-1/2 w-[80%] py-2 rounded-3xl">
          <p className=" text-white text-center"> Tích điểm</p>
        </button>
      </div>
    </div>
  );
};

export default BrandPoin;
