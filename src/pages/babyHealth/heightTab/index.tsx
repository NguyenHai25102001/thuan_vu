import React, { useEffect, useRef, useState } from "react";
import { Modal, Page } from "zmp-ui";
import ChartJS from "../../../components/chart";
import { getAccessTokenFromLS } from "../../../utils/auth";
import API from "../../../api";
import axios from "axios";
import { BabyHealthIndex } from "../../../types/baby.type";
import AlertCus from "../../../components/alertCus";
const Description = ({ label, img, unit, color, onChange, value }) => {
  return (
    <div className={`w-full border-b-2 border-b-[${color}] mb-3`}>
      <label className={`text-[15px] text-[${color}] font-normal`}>
        {label}
      </label>
      <div className="flex mt-2 items-end">
        {img}
        <input
          value={value || ""}
          onChange={onChange}
          type="number"
          className="w-full h-[30px] ml-3  font-normal text-base text-[#000000] mb-0 outline-none"
        />
        <span className={`text-[15px] text-[${color}] font-normal`}>
          {unit}
        </span>
      </div>
    </div>
  );
};
const HeightTab = ({ selectedBaby, showModalHeight, setDataParams }) => {
  const accessToken = getAccessTokenFromLS();
  const [age, setAge] = React.useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const [dialogVisible, setDialogVisible] = React.useState(false);
  const [dialogVisible2, setDialogVisible2] = React.useState(false);
  const [description, setDescription] = React.useState<string>("");
  const [heightUpdate, setHeightUpdate] = React.useState<Number>();
  const [monthUpdate, setMonthUpdate] = React.useState<Number>(
    selectedBaby?.realAge
  );
  const [dataChartForAge, setDataChartForAge] =
    React.useState<BabyHealthIndex[]>();
  const [color, setColor] = React.useState([
    {
      color: "bg-[#4E0B21]",
      title: "chiều cao thấp mức 1 (-1sd -> -2sd)",
    },
    {
      color: "bg-[#BD1B51]",
      title: "chiều cao thấp mức 2 (-2sd -> -3sd)",
    },
    {
      color: "bg-[#FF8EB4]",
      title: "chiều cao thấp mức 3 (-3sd -> )",
    },
    {
      color: "bg-[#AE6300]",
      title: "Chiều cao hơn mức 1 (1sd -> 2sd)",
    },
    {
      color: "bg-[#F99F29]",
      title: "Chiều cao hơn mức 2 (2sd -> 3sd)",
    },
    {
      color: "bg-[#FFCA85]",
      title: "Chiều cao hơn mức 3 (3sd -> )",
    },
    {
      color: "bg-[#0158FF]",
      title: "Chiều cao đạt chuẩn ( -1sd -> 1sd)",
    },
  ]);
  useEffect(() => {
    showModalHeight === true ? setDialogVisible(true) : setDialogVisible(false);
  }, []);

  useEffect(() => {
    setMonthUpdate(selectedBaby?.realAge);
  }, [selectedBaby]);
  const handleAgeChange = (event: any) => {
    const selectedAge = parseInt(event?.target?.value, 10);
    setAge(selectedAge);
  };
  const handleCheckAge = (e) => {
    const value = e.target.value;
    if (value === "0" || value === Number.isNaN(value) || value === "") {
      setMonthUpdate(0);
    } else {
      const intValue = parseInt(value, 10);
      if (!isNaN(intValue) || !value.includes("0")) {
        if (e.target.value <= selectedBaby?.realAge) {
          setMonthUpdate(intValue.toString());
        } else {
          setDescription(
            "Chỉ được nhập tháng tuổi nhỏ hơn tháng tuổi hiện tại"
          );
          setDialogVisible2(true);
          setShowAlert(true);
        }
      } else {
        if (e.target.value < selectedBaby?.realAge) {
          setMonthUpdate(value);
        } else {
          setDescription(
            "Chỉ được nhập tháng tuổi nhỏ hơn tháng tuổi hiện tại"
          );
          setDialogVisible2(true);
          setShowAlert(true);
        }
      }
    }
  };
  const getDataHealthyIndex = async () => {
    console.log("age", age);
    if (!!accessToken) {
      try {
        let formData = new FormData();
        formData.append("age", age.toString());
        formData.append("user_profiles_id", selectedBaby?.id);
        const res = await axios({
          url: API.getHealthIndex(),
          method: "POST",
          data: formData,
          headers: {
            Authorization: "Bearer" + accessToken,
          },
        });
        if (res.status) {
          console.log(res.data);
          setDataChartForAge(res?.data?.data_health);
          setDataParams(res?.data?.data_health);
        } else {
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Bạn cần đăng nhập lại");
    }
  };

  const updateHeight = async () => {
    if (
      !!accessToken &&
      !!selectedBaby?.id &&
      !!monthUpdate &&
      !!heightUpdate
    ) {
      try {
        let formData = new FormData();
        formData.append("month", monthUpdate.toString());
        formData.append("height", heightUpdate.toString());
        formData.append("user_profiles_id", selectedBaby?.id);
        const res = await axios({
          url: API.updateHeight(),
          method: "POST",
          data: formData,
          headers: {
            Authorization: "Bearer" + accessToken,
          },
        });
        if (res.status) {
          getDataHealthyIndex();
        } else {
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Bạn cần đăng nhập lại");
    }
  };
  function generateDataByType(type, dataChartForAge) {
    let startMonth = 0;
    let endMonth = 12;

    if (type === 2) {
      startMonth = 13;
      endMonth = 24;
    }
    if (type === 3) {
      startMonth = 25;
      endMonth = 36;
    }

    const newData = Array.from(
      { length: endMonth - startMonth + 1 },
      (_, monthIndex) => {
        const month = monthIndex + startMonth;
        const matchedData = dataChartForAge?.find(
          (item) => item.month === month
        );
        return {
          month: month,
          height: matchedData ? matchedData.height : 0,
          typeHeight: matchedData ? matchedData.type_sd_height : 0,
        };
      }
    );
    return newData;
  }
  const type = generateDataByType(age, dataChartForAge);

  const labelsDataChart = type.map((item) => item.month);
  const dataChart = type.map((item) => item.height);
  const typeDataHeight = type.map((item) => item.typeHeight);
  const chartRef = useRef(null);
  const _chartJs = React.useMemo(
    () => (
      <ChartJS
        chartRef={chartRef}
        data={dataChart}
        labelsData={labelsDataChart}
        type={typeDataHeight}
      />
    ),
    [labelsDataChart, dataChart]
  );
  useEffect(() => {
    getDataHealthyIndex();
  }, [age, selectedBaby?.id]);
  return (
    <Page
      className="w-full h-full px-2 bg-white pt-[9px] pb-[300px] "
      hideScrollbar
    >
      <p className="text-main text-lg font-bold my-2 ">
        Biểu đồ chiều cao theo tuổi cho{" "}
        {selectedBaby?.gender === "male" ? "bé trai" : "bé gái"}
      </p>
      <div className="bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  px-2 rounded-2xl pt-3">
        <div className="flex mb-3 justify-between items-center">
          <div className="flex">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M14.8828 0H5.11719C4.6857 0 4.33594 0.349766 4.33594 0.78125C4.33594 1.21273 4.6857 1.5625 5.11719 1.5625H14.8828C15.3143 1.5625 15.6641 1.21273 15.6641 0.78125C15.6641 0.349766 15.3143 0 14.8828 0Z"
                fill="#F26091"
              />
              <path
                d="M14.8828 18.4375H5.11719C4.6857 18.4375 4.33594 18.7873 4.33594 19.2188C4.33594 19.6502 4.6857 20 5.11719 20H14.8828C15.3143 20 15.6641 19.6502 15.6641 19.2188C15.6641 18.7873 15.3143 18.4375 14.8828 18.4375Z"
                fill="#F26091"
              />
              <path
                d="M14.1094 4.68422L11.701 2.25602C11.2575 1.80879 10.6672 1.5625 10.0391 1.5625C9.41089 1.5625 8.82066 1.80879 8.37707 2.25602L5.96875 4.68422C5.66492 4.99055 5.66692 5.48523 5.97328 5.78906C6.27969 6.09293 6.7743 6.09086 7.07812 5.78453L9.21875 3.62629V13.7891C9.21875 14.2205 9.56851 14.5703 9.99999 14.5703C10.4315 14.5703 10.7812 14.2205 10.7812 13.7891V3.5475L13 5.78453C13.1528 5.93855 13.3537 6.01566 13.5547 6.01562C13.7535 6.01562 13.9525 5.94016 14.1048 5.78906C14.4112 5.48523 14.4132 4.99055 14.1094 4.68422Z"
                fill="#F26091"
              />
              <path
                d="M14.1048 14.2109C13.7984 13.9071 13.3038 13.9091 13 14.2155L10.5917 16.6437C10.4437 16.7928 10.2475 16.875 10.0391 16.875C9.83067 16.875 9.63446 16.7928 9.48649 16.6437L7.07814 14.2155C6.77431 13.9092 6.2797 13.9071 5.9733 14.2109C5.66693 14.5148 5.6649 15.0094 5.96877 15.3158L8.37708 17.744C8.82068 18.1912 9.41091 18.4375 10.0391 18.4375C10.6672 18.4375 11.2575 18.1912 11.7011 17.744L14.1094 15.3158C14.4132 15.0094 14.4112 14.5148 14.1048 14.2109Z"
                fill="#F26091"
              />
            </svg>
            <p>Chỉ số chiều cao</p>
          </div>
          <select
            value={age}
            onChange={handleAgeChange}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-main text-sm rounded-lgblock w-[90px]  "
          >
            <option value={1} className=" text-xs text-main font-bold ">
              1 tuổi
            </option>
            <option value={2} className="text-xs text-main font-bold ">
              2 tuổi
            </option>
            <option value={3} className="text-xs text-main font-bold ">
              3 tuổi
            </option>
          </select>
        </div>
        {_chartJs}
      </div>
      <div className="grid  gap-4 grid-cols-2 mt-4">
        {color.map((item, index) => {
          return (
            <div className="flex " key={index}>
              <div className={`${item.color} w-10 h-3 rounded-lg mt-[3%]`} />
              <p className="ml-1 text-[#b3b3b3] text-[13px]">{item.title}</p>
            </div>
          );
        })}
      </div>
      <div
        className="w-[65%] rounded-3xl bg-[#F26091] mx-auto flex justify-center items-center my-2"
        onClick={() => {
          setDialogVisible(true);
        }}
      >
        <span className="text-base font-bold text-white py-2 mr-2 ">
          Cập nhật chiều cao
        </span>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
          <path
            d="M10.6569 8.78433L13.2401 6.24933C13.7159 5.78241 13.9756 5.1635 13.9714 4.5066C13.9673 3.84971 13.6997 3.23415 13.218 2.77331L10.6028 0.271347C10.2729 -0.0442946 9.74335 -0.0388462 9.42015 0.283601C9.09692 0.60609 9.10242 1.12331 9.43235 1.43895L11.7568 3.66281L0.878256 3.73194C0.416381 3.73488 0.0443049 4.10302 0.0471724 4.55424C0.05004 5.00546 0.426765 5.36885 0.88864 5.36591L11.8515 5.29624L9.4717 7.6317C9.30785 7.79251 9.22664 8.00312 9.22802 8.21337C9.22934 8.42129 9.31145 8.62887 9.47419 8.78711C9.80146 9.10542 10.331 9.10418 10.6569 8.78433Z"
            fill="white"
          />
        </svg>
      </div>
      <p className="text-main text-lg font-bold mt-[9px]">Lịch sử đo</p>
      <div className="mb-16">
        {dataChartForAge?.map((item, index) => {
          if (item?.height) {
            return (
              <div
                className="flex justify-between bg-[#F5F7F7] p-2  my-2 "
                key={index}
              >
                <div
                  style={{
                    backgroundColor:
                      item.type_sd_height === 1
                        ? "#0158FF"
                        : item.type_sd_height === 2
                        ? "#AE6300"
                        : item.type_sd_height === 3
                        ? "#F99F29"
                        : item.type_sd_height === 4
                        ? "#FFCA85"
                        : item.type_sd_height === 5
                        ? "#4E0B21"
                        : item.type_sd_height === 6
                        ? "#BD1B51"
                        : item.type_sd_height === 7
                        ? "#BD1B51"
                        : "",
                  }}
                  className={`flex flex-col w-[70px] h-[70px] items-center justify-center rounded-2xl`}
                >
                  <div className="text-3xl font-bold text-[#f5f7f7]  text-center">
                    {item.month}
                  </div>
                  <div className="text-base font-normal  text-[#f5f7f7] ">
                    {" "}
                    tháng
                  </div>
                </div>
                <div className=" flex flex-col flex-1 items-center justify-between px-[20px] relative  py-2">
                  <div>
                    <span
                      className="text-[30px] font-bold "
                      style={{
                        color:
                          item.type_sd_height === 1
                            ? "#0158FF"
                            : item.type_sd_height === 2
                            ? "#AE6300"
                            : item.type_sd_height === 3
                            ? "#F99F29"
                            : item.type_sd_height === 4
                            ? "#FFCA85"
                            : item.type_sd_height === 5
                            ? "#4E0B21"
                            : item.type_sd_height === 6
                            ? "#BD1B51"
                            : item.type_sd_height === 7
                            ? "#BD1B51"
                            : "",
                      }}
                    >
                      {item.height}
                    </span>
                    <span
                      className="text-[15px] font-normal "
                      style={{
                        color:
                          item.type_sd_height === 1
                            ? "#0158FF"
                            : item.type_sd_height === 2
                            ? "#AE6300"
                            : item.type_sd_height === 3
                            ? "#F99F29"
                            : item.type_sd_height === 4
                            ? "#FFCA85"
                            : item.type_sd_height === 5
                            ? "#4E0B21"
                            : item.type_sd_height === 6
                            ? "#BD1B51"
                            : item.type_sd_height === 7
                            ? "#BD1B51"
                            : "",
                      }}
                    >
                      {" "}
                      cm
                    </span>
                  </div>
                  <div className=" ">
                    <p className="text-xs font-normal leading-[16px] text-[#c2c1c1]">
                      {/* {item.title} */}
                      {item.type_sd_height === 1
                        ? `Chiều cao đạt chuẩn ${"\n"}(-1sd -> 1sd)`
                        : item.type_sd_height === 2
                        ? "Chiều cao hơn mức 1 (1sd -> 2sd)"
                        : item.type_sd_height === 3
                        ? "Chiều cao hơn mức 2 (2sd -> 3sd)"
                        : item.type_sd_height === 4
                        ? "Chiều cao hơn mức 3 (3sd -> )"
                        : item.type_sd_height === 5
                        ? "chiều cao thấp mức 1 (-1sd -> -2sd)"
                        : item.type_sd_height === 6
                        ? "chiều cao thấp mức 2 (-2sd -> -3sd)"
                        : item.type_sd_height === 7
                        ? "chiều cao thấp mức 3 (-3sd -> )"
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
            );
          } else {
            return <div key={index}></div>;
          }
        })}
      </div>
      <Modal
        modalStyle={{
          color: "#4E78DB",
        }}
        modalClassName="modal-parameters"
        visible={dialogVisible}
        title="Cập nhật chỉ số chiều cao của bé"
        onClose={() => {
          setDialogVisible(false);
        }}
      >
        <Description
          // disabled={false}
          value={heightUpdate}
          onChange={(e) => setHeightUpdate(e.target.value)}
          label={"Chiều cao"}
          color={"#FFB199"}
          unit={"cm"}
          img={
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <g opacity="0.64">
                <path
                  d="M14.8828 0H5.11719C4.6857 0 4.33594 0.349766 4.33594 0.78125C4.33594 1.21273 4.6857 1.5625 5.11719 1.5625H14.8828C15.3143 1.5625 15.6641 1.21273 15.6641 0.78125C15.6641 0.349766 15.3143 0 14.8828 0Z"
                  fill="url(#paint0_linear_2015_2036)"
                />
                <path
                  d="M14.8828 18.4375H5.11719C4.6857 18.4375 4.33594 18.7873 4.33594 19.2188C4.33594 19.6502 4.6857 20 5.11719 20H14.8828C15.3143 20 15.6641 19.6502 15.6641 19.2188C15.6641 18.7873 15.3143 18.4375 14.8828 18.4375Z"
                  fill="url(#paint1_linear_2015_2036)"
                />
                <path
                  d="M14.1094 4.68422L11.701 2.25602C11.2575 1.80879 10.6672 1.5625 10.0391 1.5625C9.41089 1.5625 8.82066 1.80879 8.37707 2.25602L5.96875 4.68422C5.66492 4.99055 5.66692 5.48523 5.97328 5.78906C6.27969 6.09293 6.7743 6.09086 7.07812 5.78453L9.21875 3.62629V13.7891C9.21875 14.2205 9.56851 14.5703 9.99999 14.5703C10.4315 14.5703 10.7812 14.2205 10.7812 13.7891V3.5475L13 5.78453C13.1528 5.93855 13.3537 6.01566 13.5547 6.01562C13.7535 6.01562 13.9525 5.94016 14.1048 5.78906C14.4112 5.48523 14.4132 4.99055 14.1094 4.68422Z"
                  fill="url(#paint2_linear_2015_2036)"
                />
                <path
                  d="M14.1048 14.2109C13.7984 13.9071 13.3038 13.9091 13 14.2155L10.5917 16.6437C10.4437 16.7928 10.2475 16.875 10.0391 16.875C9.83067 16.875 9.63446 16.7928 9.48649 16.6437L7.07814 14.2155C6.77431 13.9092 6.2797 13.9071 5.9733 14.2109C5.66693 14.5148 5.6649 15.0094 5.96877 15.3158L8.37708 17.744C8.82068 18.1912 9.41091 18.4375 10.0391 18.4375C10.6672 18.4375 11.2575 18.1912 11.7011 17.744L14.1094 15.3158C14.4132 15.0094 14.4112 14.5148 14.1048 14.2109Z"
                  fill="url(#paint3_linear_2015_2036)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_2015_2036"
                  x1="15.6641"
                  y1="1.5625"
                  x2="15.3628"
                  y2="-1.20174"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF6188" />
                  <stop offset="1" stopColor="#FFB199" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2015_2036"
                  x1="15.6641"
                  y1="20"
                  x2="15.3628"
                  y2="17.2358"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF6188" />
                  <stop offset="1" stopColor="#FFB199" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_2015_2036"
                  x1="14.3359"
                  y1="14.5703"
                  x2="2.87711"
                  y2="4.98902"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF6188" />
                  <stop offset="1" stopColor="#FFB199" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_2015_2036"
                  x1="14.3359"
                  y1="18.4375"
                  x2="11.5407"
                  y2="11.6103"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF6188" />
                  <stop offset="1" stopColor="#FFB199" />
                </linearGradient>
              </defs>
            </svg>
          }
        />
        <Description
          // disabled={true}
          value={monthUpdate === 0 ? "0" : monthUpdate}
          label={"Tháng tuổi"}
          color={"#4E78DB"}
          onChange={(e) => handleCheckAge(e)}
          unit={"tháng"}
        />
        <div
          className="w-[85%] rounded-3xl bg-main mx-auto flex justify-center items-center my-8"
          onClick={() => {
            updateHeight();
            setDialogVisible(false);
          }}
        >
          <span className="text-base font-bold text-white py-2 mr-2 ">
            Hoàn tất cập nhật
          </span>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path
              d="M10.6569 8.78433L13.2401 6.24933C13.7159 5.78241 13.9756 5.1635 13.9714 4.5066C13.9673 3.84971 13.6997 3.23415 13.218 2.77331L10.6028 0.271347C10.2729 -0.0442946 9.74335 -0.0388462 9.42015 0.283601C9.09692 0.60609 9.10242 1.12331 9.43235 1.43895L11.7568 3.66281L0.878256 3.73194C0.416381 3.73488 0.0443049 4.10302 0.0471724 4.55424C0.05004 5.00546 0.426765 5.36885 0.88864 5.36591L11.8515 5.29624L9.4717 7.6317C9.30785 7.79251 9.22664 8.00312 9.22802 8.21337C9.22934 8.42129 9.31145 8.62887 9.47419 8.78711C9.80146 9.10542 10.331 9.10418 10.6569 8.78433Z"
              fill="white"
            />
          </svg>
        </div>
      </Modal>
      {showAlert ? (
        <AlertCus
          description={description}
          dialogVisible={dialogVisible2}
          setDialogVisible={setDialogVisible2}
        />
      ) : null}
    </Page>
  );
};

export default HeightTab;
