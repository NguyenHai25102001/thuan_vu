import React, { useContext, useEffect, useRef } from "react";
import { Box, Page, Spinner, useNavigate } from "zmp-ui";
import DetailMilestones from "./detailMilestone";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import Images from "../../static";
import API from "../../api";
import axios from "axios";
import { AppContext } from "../../contexts/app.context";
import ShowListBaby from "../../components/showListBaby";
import { showAgeByMonth } from "../../module";
import { getAccessTokenFromLS } from "../../utils/auth";
import ModaNotify from "../../components/modaNotify";
import profileApi from "../../apis/profile.apis";
import path from "../../constants/path";
const Milestones = () => {
  const navigate = useNavigate();
  const [idChoose, setIdChoose] = React.useState<any>(null);
  const [dataMonth, setDataMonth] = React.useState([]);
  const [dataDetail, setDataDetail] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  // const [isCheckSetup, setIsCheckSetup] = React.useState(null);
  const refListBaby = React.useRef(null);
  const accessToken = getAccessTokenFromLS();
  const [dataCheckVoucher, setDataCheckVoucher] = React.useState(null);
  const [dataMilestMonth, setDataMilestMonth] = React.useState([]);
  const [showAlert, setShowAlert] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const ref = useRef();
  const handleChooseMonth = (item, index) => {
    setIdChoose(index);
  };
  const [isOpenListVideo, setIsOpenListVideo] = React.useState("0");
  const handleSetIdListVideo = (id, idMileston) => {
    setIsOpenListVideo(`${id}` + `${idMileston}`);
  };
  const { selectedBaby } = useContext(AppContext);
  const getDetailDataMonth = async () => {
    checkIsDoneMilestoneMonth(idChoose, selectedBaby?.id);
    setIsLoading(true);
    try {
      const res = await axios({
        url: API.listMilestone(idChoose),
        method: "get",
        headers: {
          Authorization: "Bearer" + accessToken,
        },
      });

      if (res.data.code === 200) {
        setDataDetail(res?.data?.data?.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  // const checkSetup = async (id_user_profiles) => {
  //   setIsLoading(true);
  //   try {
  //     let formData = new FormData();
  //     formData.append("id_user_profiles", id_user_profiles);
  //     const res = await axios({
  //       url: API.checkSetupMilestones(),
  //       timeout: 30000,
  //       method: "POST",
  //       data: formData,
  //       headers: {
  //         Authorization: "Bearer" + accessToken,
  //       },
  //     });
  //     if (res.data.status) {
  //       setIsCheckSetup(res.data.status);
  //       if (res.data.data == 1) {
  //         setDescription(
  //           "Thành công!, \nCột mốc đã được AI tính toán xong! Vui lòng kéo đến tháng tuổi đã chỉ định."
  //         );
  //         setShowAlert(true);
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  //Lấy danh sách tháng trong csdl
  const getDataMonthChoose = async () => {
    try {
      var month = selectedBaby;
      if (month) {
        if (month.realAge < 25) {
          setIdChoose(month.realAge);
          checkIsDoneMilestoneMonth(month.realAge, month.id);
          getMilestonesInMonth(month.realAge, month.id);
        } else if (month.realAge >= 25 && month.realAge < 28) {
          setIdChoose(25);
          checkIsDoneMilestoneMonth(25, month.id);
          getMilestonesInMonth(25, month.id);
        } else if (month.realAge >= 28 && month.realAge < 31) {
          setIdChoose(26);
          checkIsDoneMilestoneMonth(26, month.id);
          getMilestonesInMonth(26, month.id);
        } else if (month.realAge >= 31 && month.realAge < 34) {
          setIdChoose(27);
          checkIsDoneMilestoneMonth(27, month.id);
          getMilestonesInMonth(27, month.id);
        } else {
          setIdChoose(28);
          checkIsDoneMilestoneMonth(28, month.id);
          getMilestonesInMonth(28, month.id);
        }
      }
      const res = await axios({
        url: API.milestones(),
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (res.data.status) {
        setDataMonth(res?.data?.data);
      }
    } catch (error) {
      console.log(error);
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
        checkIsDoneMilestoneMonth(idChoose, selectedBaby?.id);
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
  // Lấy thông tin hoàn thành cột mộc theo tháng được chọn
  const checkIsDoneMilestoneMonth = async (id_month, id_user_profiles) => {
    setIsLoading(true);
    try {
      let formData = new FormData();
      formData.append("id_month", id_month);
      formData.append("id_user_profiles", id_user_profiles);
      const res = await axios({
        url: API.checkIsDoneMilestoneMonth(),
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer` + accessToken,
        },
      });
      if (res.data.status) {
        setDataCheckVoucher(res.data.data);
      }
    } catch (error) {
      console.log("Lỗi nhận voucher milestones theo tháng! ");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const addMilestonWithMonthBaby = async () => {
    try {
      let formData = new FormData();
      formData.append("id_user_profiles", String(selectedBaby?.id));
      formData.append("id_month", idChoose);
      const res = await profileApi.addMilestonWithMonthBaby(formData);
      if (res.status) {
        checkIsDoneMilestoneMonth(idChoose, selectedBaby?.id);
      } else {
        alert("có lỗi xảy ra");
      }
    } catch (error) {
      console.error(error);
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
  // React.useEffect(() => {
  //   checkSetup(selectedBaby?.id);
  // }, [isCheckSetup, idChoose, selectedBaby]);
  React.useEffect(() => {
    if (idChoose) {
      checkIsDoneMilestoneMonth(idChoose, selectedBaby?.id);
      getMilestonesInMonth(idChoose, selectedBaby?.id);
      getDetailDataMonth();
    }
  }, [idChoose]);
  React.useEffect(() => {
    getDataMonthChoose();
  }, [selectedBaby]);
  React.useEffect(() => {
    addMilestonWithMonthBaby();
  }, [selectedBaby, idChoose]);
  return (
    <div className="w-screen h-screen bg-white">
      <div
        className="bg-main pt-14 pb-4"
        style={{
          backgroundImage: `url(${Images.bgHeader})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        {/* header  */}
        <div className="flex items-center px-4">
          <div
            className="px-2 py-2 flex items-center justify-center bg-white rounded-[100%] "
            onClick={() => navigate(path.home)}
          >
            <svg width={20} height={22} viewBox="0 0 20 22" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.7674 13.2909C11.8738 13.2909 12.7744 14.1958 12.7744 15.3081V18.1688C12.7744 18.4078 12.9637 18.5994 13.2063 18.605H14.9579C16.3381 18.605 17.4602 17.4834 17.4602 16.1051V7.99165C17.4538 7.51734 17.2304 7.07093 16.8472 6.77426L10.7885 1.88423C9.97525 1.23229 8.83758 1.23229 8.02154 1.88609L2.00419 6.7724C1.60628 7.07837 1.38297 7.52478 1.37838 8.00746V16.1051C1.37838 17.4834 2.50043 18.605 3.88071 18.605H5.64879C5.89783 18.605 6.1 18.405 6.1 18.1595C6.1 18.1056 6.10643 18.0516 6.11746 18.0005V15.3081C6.11746 14.2023 7.01253 13.2983 8.11068 13.2909H10.7674ZM14.9579 20.0002H13.1898C12.1771 19.9761 11.396 19.1716 11.396 18.169V15.3083C11.396 14.9651 11.1139 14.6861 10.7675 14.6861H8.11534C7.77624 14.688 7.49596 14.9679 7.49596 15.3083V18.1597C7.49596 18.2295 7.48677 18.2964 7.46747 18.3597C7.36822 19.2804 6.59078 20.0002 5.64885 20.0002H3.88077C1.74051 20.0002 0 18.2527 0 16.1053V8.00116C0.0091896 7.07673 0.430073 6.23041 1.15697 5.67333L7.16238 0.795397C8.48476 -0.264822 10.3273 -0.264822 11.6469 0.793537L17.6955 5.67612C18.4059 6.2239 18.8267 7.06836 18.8387 7.98163V16.1053C18.8387 18.2527 17.0982 20.0002 14.9579 20.0002Z"
                fill="#e9636e"
              />
            </svg>
          </div>
          <div
            className="w-full flex flex-col items-center justify-center mr-10"
            onClick={() => refListBaby.current?.setShow(true)}
          >
            <div className="flex items-center">
              <p className="text-center ptext-base  font-bold text-white ">
                {selectedBaby?.name}
              </p>
              <img
                src={Images.iconArrowDownWhite}
                className="w-3 h-4 object-contain ml-2"
              />
            </div>
            <p className="text-center text-xs  text-white">
              {showAgeByMonth(selectedBaby?.realAge) || "0 tuổi"}
            </p>
          </div>
        </div>
      </div>
      {/* danh sách các tháng */}
      {selectedBaby?.realAge === 0 ? (
        <p className="text-base font-medium  text-main text-center mt-2 mx-2">
          Tính năng 'Cột Mốc' sẽ sẵn sàng khi bé của bạn đạt đến 1 tháng tuổi.
          Hãy tận hưởng những khoảnh khắc đáng yêu cùng bé nhé!
        </p>
      ) : (
        <>
          {" "}
          <div className="header-tab-milestones flex">
            <div
              className="flex flex-col  bg-opacity-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white z-40 justify-center items-center px-2  "
              style={{ height: 60 }}
              onClick={() => {
                ref.current?.slidePrev();
              }}
            >
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
                <path
                  d="M7.49807 1.47177L2.87991 6.02338L7.42144 10.6515L5.99972 12.0496L0.0500116 5.99976L6.09989 0.0500498L7.49807 1.47177Z"
                  fill="#F26091"
                />
                <path
                  d="M7.49807 1.47177L2.87991 6.02338L7.42144 10.6515L5.99972 12.0496L0.0500116 5.99976L6.09989 0.0500498L7.49807 1.47177Z"
                  fill="#e9636e"
                />
              </svg>
            </div>
            <Swiper
              onSwiper={(swiper) => {
                ref.current = swiper;
              }}
              slidesPerView={3}
              spaceBetween={2}
              style={{
                width: "100%",
                height: 60,
                backgroundColor: "#FFF",
              }}
            >
              {!!dataMonth &&
                dataMonth.map((item, index) => {
                  return (
                    <SwiperSlide
                      onClick={() => {
                        [
                          handleChooseMonth(item, index),
                          setIdChoose(item.id),
                          checkIsDoneMilestoneMonth(item?.id, selectedBaby?.id),
                        ];
                      }}
                      style={
                        index + 1 === idChoose
                          ? {
                              backgroundColor: "#e9636e",
                            }
                          : {
                              backgroundColor: "#fff",
                            }
                      }
                      key={item.id}
                      className="flex flex-col justify-center items-center"
                    >
                      <div
                        className="  flex flex-col  justify-center items-center h-full"
                        style={
                          {
                            // borderWidth: index === indexSize ? 1 : 0,
                          }
                        }
                        onClick={() => {
                          // setIndexSize(index);
                          // setSize(item.id);
                        }}
                      >
                        <div className="flex flex-col justify-center items-center">
                          <p
                            className="text-[10px] font-normal"
                            style={
                              index + 1 === idChoose
                                ? {
                                    color: "#fff",
                                  }
                                : {
                                    color: "#4F4F4F",
                                  }
                            }
                          >
                            {item?.name}
                          </p>
                          <p
                            className="text-[10px] font-normal"
                            style={
                              index + 1 === idChoose
                                ? {
                                    color: "#fff",
                                  }
                                : {
                                    color: "#4F4F4F",
                                  }
                            }
                          >
                            tháng tuổi
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
            <div
              className="flex flex-col  bg-opacity-10  justify-center items-center px-2  shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white z-40"
              style={{ height: 60 }}
              onClick={() => {
                ref.current?.slideNext();
              }}
            >
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path
                  d="M0 10.5705L4.61319 5.98897L0 1.40741L1.42022 0L7.4637 5.98897L1.42022 11.9779L0 10.5705Z"
                  fill="#F26091"
                />
                <path
                  d="M0 10.5705L4.61319 5.98897L0 1.40741L1.42022 0L7.4637 5.98897L1.42022 11.9779L0 10.5705Z"
                  fill="#e9636e"
                />
              </svg>
            </div>
          </div>
          <Page className="pb-[80px] " hideScrollbar>
            {idChoose !== null &&
            // isCheckSetup !== null &&
            selectedBaby !== undefined &&
            dataDetail !== undefined ? (
              isLoading === true ? (
                <div className="flex items-center justify-center w-full">
                  <Spinner visible />
                </div>
              ) : (
                <DetailMilestones
                  data={dataDetail}
                  dataCheckVoucher={dataCheckVoucher}
                  handleSetIdListVideo={handleSetIdListVideo}
                  isOpenVd={isOpenListVideo}
                  updateMileston={updateMileston}
                  checkMilesIsDone={checkMilesIsDone}
                  selectedBaby={selectedBaby}
                  accessToken={accessToken}
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
        </>
      )}
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

export default Milestones;
