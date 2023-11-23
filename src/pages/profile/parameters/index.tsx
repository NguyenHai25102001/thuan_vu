import React, { useContext, useEffect, useRef } from "react";
import { Box, Page, Spinner, useNavigate } from "zmp-ui";
import axios from "axios";
import { AppContext } from "../../../contexts/app.context";
import API from "../../../api";
import Images from "../../../static";
import ShowListBaby from "../../../components/showListBaby";
import { getAccessTokenFromLS } from "../../../utils/auth";
import { showAgeByMonth } from "../../../module";
import DetailParameters from "./detailParameters";
import { useLocation } from "react-router-dom";
import ModaNotify from "../../../components/modaNotify";
import Header from "../../../components/header";
const Parameters = () => {
  const { selectedBaby } = useContext(AppContext);
  const [idChoose] = React.useState<any>(selectedBaby?.realAge);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const location = useLocation();
  const state = location.state;
  const [showAlert, setShowAlert] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const idCategory = location.state.id_category;
  const refListBaby = React.useRef(null);
  const accessToken = getAccessTokenFromLS();
  const [dataDetailParameters, setDataDetailParameters] = React.useState();
  const [dataMilestMonth, setDataMilestMonth] = React.useState([]);
  const [isOpenListVideo, setIsOpenListVideo] = React.useState("0");
  const handleSetIdListVideo = (id, idMileston) => {
    setIsOpenListVideo(`${id}` + `${idMileston}`);
  };
  const check = () => {
    let title = "";
    if (idCategory === 111111) {
      title = "Vận động thô";
    } else if (idCategory === 222222) {
      title = "Vận động tinh";
    } else if (idCategory === 333333) {
      title = "Ngôn ngữ";
    } else if (idCategory === 444444) {
      title = "Nhận thức";
    } else if (idCategory === 555555) {
      title = "Tự lập";
    } else if (idCategory === 666666) {
      title = "Cảm xúc xã hội";
    } else if (idCategory === 777777) {
      title = "Giác quan";
    }
    return title;
  };
  const getDataParameters = async () => {
    setIsLoading(true);
    if (!!idChoose && !!selectedBaby?.id && !!idCategory) {
      try {
        let formData = new FormData();
        formData.append("id_month", idChoose);
        formData.append("id_user_profiles", selectedBaby?.id);
        formData.append("id_category", idCategory);

        const res = await axios({
          url: API.getDataParameters(),
          method: "POST",
          data: formData,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (res.data?.status) {
          setDataDetailParameters(res?.data?.data?.result);
        }
      } catch (error) {
        console.log("Lỗi nhận voucher milestones theo tháng! ");
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      console.log("Lỗi dữ liệu");
    }
  };
  const getMilestonesInMonth = async (id_month, id_user_profiles) => {
    setIsLoading(true);
    try {
      let formData = new FormData();
      formData.append("id_month", id_month);
      formData.append("id_user_profiles", id_user_profiles);
      const res = await axios({
        url: API.getMilestonesInMonth(),
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.data?.status) {
        setDataMilestMonth(res?.data?.data);
      }
    } catch (error) {
      console.log("Lỗi nhận voucher milestones theo tháng! ");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateMileston = async (id_activity_milestones, status) => {
    try {
      let formData = new FormData();
      formData.append("status", status);
      formData.append("id_activity_milestones", id_activity_milestones);
      formData.append("id_user_profiles", selectedBaby?.id);
      const res = await axios({
        url: API.updateMilestones(),
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.data.status) {
        // checkIsDoneMilestoneMonth(idChoose, selectedBaby?.id);
        getMilestonesInMonth(idChoose, selectedBaby?.id);
        if (status == 1) {
          setDescription("Thành công!\nChúc mừng bé đã hoàn thành cột mốc");
          setShowAlert(true);
        }
      }
    } catch (error) {
      console.log("Lỗi cập nhật status milestones theo id ! ");
      console.log(error);
    }
  };
  const checkMilesIsDone = (id_milestones) => {
    if (!!dataMilestMonth && dataMilestMonth.length > 0) {
      const obj = dataMilestMonth.find(
        (data) => data.id_activity_milestones === id_milestones
      );
      if (obj) {
        let checkResult = obj.status == 1 ? true : false;
        if (!checkResult) {
          return false;
        }

        return checkResult;
      }
    } else {
      return false;
    }
  };
  React.useEffect(() => {
    // checkIsDoneMilestoneMonth(idChoose, selectedBaby?.id);
    getMilestonesInMonth(idChoose, selectedBaby?.id);
  }, [idChoose, selectedBaby?.id]);
  React.useEffect(() => {
    getDataParameters();
  }, [idChoose, selectedBaby?.id, idCategory]);

  return (
    <div className="w-screen h-screen bg-white">
      <Header title={check()} />
      {/* Hiển thị chi tiết của tháng */}
      <Page className="pb-[80px] " hideScrollbar>
        {idChoose !== null && selectedBaby !== undefined ? (
          isLoading === true ? (
            <div className="flex items-center justify-center w-full">
              <Spinner visible />
            </div>
          ) : (
            <DetailParameters
              data={dataDetailParameters}
              handleSetIdListVideo={handleSetIdListVideo}
              isOpenVd={isOpenListVideo}
              updateMileston={updateMileston}
              checkMilesIsDone={checkMilesIsDone}
              selectedBaby={selectedBaby}
              accessToken={accessToken}
              idCategory={idCategory}
              state={state}
            />
          )
        ) : (
          <div className="flex flex-col flex-1 justify-center items-center">
            <p className="w-[80%] text-center text-base font-bold text-main">
              AI đang tính toán cột mốc cho bé hiện tại! Vui lòng đợi!
            </p>
          </div>
        )}
      </Page>
      {showAlert === true ? (
        <ModaNotify
          description={description}
          setPopupVisible={setShowAlert}
          popupVisible={showAlert}
        />
      ) : null}
      <ShowListBaby ref={refListBaby} />
    </div>
  );
};

export default Parameters;
