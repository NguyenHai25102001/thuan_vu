import React, { useEffect } from "react";
import Header from "../../components/header";
import Images from "../../static";
import { Page } from "zmp-ui";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../../api";
import path from "../../constants/path";
import ModaNotify from "../../components/modaNotify";

const ListPresent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [showAlert, setShowAlert] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const getData = async () => {
    let dataPost = {
      UnitCode: "1044",
      s: location?.state?.productCode,
      p: 1,
      pz: 25,
    };
    const tokenRevo =
      "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6InJldm8iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoicmV2byIsIkZ1bGxuYW1lIjoiUXXDvSBraMOhY2giLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjczNyIsIkN1c3RvbWVySWQiOiIyNjciLCJleHAiOjE3MDk0NTQ1MTQsImlzcyI6InRlbWNob25nZ2lhLmNvbS52biIsImF1ZCI6IkRhYzgwOTkifQ.h0lhCoE6Y4RW8ZH7Dqgj6xEfibc_3hNdz2mqRwrmaA0";
    try {
      const res = await axios({
        url: API.getListGift(),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenRevo}`,
        },
        data: dataPost,
      });
      if (res.status === 200) {
        let newData = res.data.data.map((item, index) => {
          return {
            ...item,
            checked: false,
            idChoose: index++,
          };
        });
        setData(newData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      // setRefresh(false);
    }
  };
  const onClickItem = (item) => {
    const a = [...data];

    a.map((element) => {
      if (element.idChoose === item.idChoose) {
        element.checked = true;
      } else {
        element.checked = false;
      }
    });
    setData(a);
  };
  const onClickConfirmButton = () => {
    let dataChoose = data.filter((e) => e.checked);

    if (!!dataChoose && dataChoose.length > 0) {
      if (dataChoose[0].Point > location?.state?.totalpoint) {
        setDescription("Bạn không đủ điểm để đổi quà tặng này");
        setShowAlert(true);
      } else {
        navigate(path.receiveGiftInformationScreen, {
          state: {
            item: dataChoose[0],
            totalPoint: location?.state?.totalpoint,
          },
        });
      }
    } else {
      setDescription("Vui lòng chọn quà tặng");
      setShowAlert(true);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const Item = ({ e }) => {
    return (
      <div
        className="w-full flex justify-between items-center my-3"
        onClick={() => onClickItem(e)}
      >
        <img
          src={
            e.GiftImage
              ? `https://quantri.lineabon.com.vn/${e.GiftImage}`
              : Images.bifidoImage
          }
          alt=""
          className="w-[80px] h-[87px] object-cover "
        />
        <div className="flex flex-1 ml-3 items-center justify-between">
          <span className="text-sm line-clamp-2 text-[#4277d8] w-[75%]">
            {e.Remark}
          </span>
          <span className="text-xl font-bold text-[#4277d8] ">{e.Point} đ</span>
          {e.checked ? (
            <div className="bg-[#d9d9d9] flex flex-col w-3 h-3 items-center  rounded-lg justify-center ">
              <div className="bg-[#4277d8] w-1 h-1 shrink-0 rounded-lg" />
            </div>
          ) : (
            <div className="bg-[#fff] flex flex-col w-3 h-3 items-center  rounded-lg border-[#d9d9d9] border-[2px]  " />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-screen h-screen bg-white relative">
      <Header title="Danh sách quà tặng" />
      <div className="w-full h-full">
        <p className="text-lg  font-bold  text-[#4277d8] m-2">
          Số điểm còn lại : {location?.state?.totalpoint}
        </p>
        <div className="bg-[#d9d9d9] w-full h-1" />
        <Page className="px-2 pb-[250px]  " hideScrollbar>
          {data.map((e, i) => {
            return <Item key={i} e={e} />;
          })}
        </Page>
      </div>
      <div className="bg-white w-full py-3 absolute bottom-0 left-1/2 -translate-x-1/2">
        <div
          className=" bg-main flex flex-col mx-auto  justify-center items-center  w-[70%] py-2 rounded-3xl"
          onClick={() => onClickConfirmButton()}
        >
          <p className=" text-white text-center"> Tích điểm</p>
        </div>
      </div>
      {showAlert === true ? (
        <ModaNotify
          description={description}
          setPopupVisible={setShowAlert}
          popupVisible={showAlert}
        />
      ) : null}
    </div>
  );
};

export default ListPresent;
