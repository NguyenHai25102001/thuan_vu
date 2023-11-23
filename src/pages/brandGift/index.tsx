import React, { useContext, useEffect } from "react";
import Header from "../../components/header";
import Images from "../../static";
import { useNavigate } from "react-router-dom";
import path from "../../constants/path";
import { Page, Spinner } from "zmp-ui";
import API from "../../api";
import axios from "axios";
import Utilities from "../../utils/Utilities";
import { AppContext } from "../../contexts/app.context";

const BrandGift = () => {
  const navigate = useNavigate();
  const [dataPoint, setDataPoint] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const { profile } = useContext(AppContext);
  const getData = async () => {
    setIsLoading(true);
    let phoneConvert = "84" + profile?.userName.substring(1);
    let dataPost = {
      Mobile: phoneConvert,
      CustomerId: "267",
    };
    const tokenRevo =
      "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6InJldm8iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoicmV2byIsIkZ1bGxuYW1lIjoiUXXDvSBraMOhY2giLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjczNyIsIkN1c3RvbWVySWQiOiIyNjciLCJleHAiOjE3MDk0NDA4ODksImlzcyI6InRlbWNob25nZ2lhLmNvbS52biIsImF1ZCI6IkRhYzgwOTkifQ.shPC_m0wc1g6Y-Zgsm3JwA31ochQPknsVl94A553_4E";
    try {
      const res = await axios({
        url: API.checkPoint(),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenRevo}`,
        },
        data: dataPost,
      });
      if (res.status === 200) {
        setDataPoint(res.data.customerListPointModels);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const Item = ({ e, i }: { e: any; i: any }) => {
    if (e.Confirmed === true) {
      return;
    } else {
      return (
        <div
          className="flex justify-between px-4 py-2 border-b border-b-[#f8f8fb]"
          key={i}
          onClick={() =>
            navigate(path.listPresent, {
              state: {
                productCode: e.ProductCode,
                totalpoint: e.PointTotal,
              },
            })
          }
        >
          <p className="text-base font-bold text-[#4277d8]">{e.AwardName}</p>
          <div className="flex">
            <span className="text-base font-bold text-[#4277d8] pr-2 ">
              {Utilities.formatDecimalNumber(e?.PointTotal.toString())}đ
            </span>
            <div className="bg-main rounded-[5px]  px-2 py-1 ">
              <span className="text-white text-sm font-semibold">Đổi quà</span>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="w-full h-full bg-white relative">
      <Header title="Đổi quà thương hiệu" />

      <div
        className="w-full mx-auto items-center h-[163px]"
        style={{
          backgroundImage: `url(${Images.bannerBrandGift})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      {isLoading === true ? (
        <div className="flex items-center justify-center w-full">
          <Spinner visible />
        </div>
      ) : (
        <div>
          <Page className="w-full h-full pb-80" hideScrollbar>
            {!!dataPoint &&
              dataPoint[0]?.CustomerListPoints.map((e, i) => {
                return <Item key={i} e={e} />;
              })}
            <div className="h-3 bg-white"></div>
          </Page>
        </div>
      )}
    </div>
  );
};

export default BrandGift;
