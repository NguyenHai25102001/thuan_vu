import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/header";
import InputLabel from "../../components/inputLabel";
import { useLocation, useNavigate } from "react-router-dom";
import {
  emailBlueIcon,
  mapPinBlueIcon,
  personBlueIcon,
  phoneBlueIcon,
} from "../../static/SvgIcon";
import { Modal, Page, Picker } from "zmp-ui";
import axios from "axios";
import API from "../../api";
import { AppContext } from "../../contexts/app.context";
import { DataDistrict } from "./DataAdress/District";
import { DataProvince } from "./DataAdress/Province";
import { DataWard } from "./DataAdress/Ward";
import ModaNotify from "../../components/modaNotify";
const ReceiveGiftInformationScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { profile } = useContext(AppContext);
  const [listPrv, setListPrv] = React.useState([]);
  const [listDis, setListDis] = React.useState([]);
  const [listWard, setListWard] = React.useState([]);
  const [nameDistrictChoose, setNameDistrictChoose] = React.useState("");
  const [nameProvinceChoose, setNameProvinceChoose] = React.useState("");
  const [nameWardChoose, setNameWardChoose] = React.useState("");
  const [idDistrict, setIdDistrict] = React.useState<String>("");
  const [idProvince, setIdProvince] = React.useState<String>("");
  const [idWard, setIdWard] = React.useState<String>("");
  const [showAlert, setShowAlert] = React.useState(false);
  const [description, setDescription] = React.useState("");
  //info
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const itemGift = location?.state?.item;
  const totalPoint = location?.state?.totalPoint;
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoadingOuttech, setIsLoadingOuttech] = React.useState(false);
  const [isShowModalComfimGift, setIsShowModalComfimGift] = useState(false);
  const [isShowModal, setIsShowModal] = React.useState(false);
  console.log(
    name,
    email,
    phone,
    address,
    nameWardChoose,
    nameDistrictChoose,
    nameProvinceChoose,
    idProvince,
    idDistrict,
    idWard
  );

  const onShowModal = () => {
    navigate("/");
    setIsShowModal(false);
  };
  const onClickConfirmButton = async () => {
    if (!name) {
      setDescription("Vui lòng nhập Họ và Tên");
      setShowAlert(true);
    } else if (!phone) {
      setDescription("Vui lòng nhập số điện thoại");
      setShowAlert(true);
    } else if (!nameProvinceChoose) {
      setDescription("Vui lòng chọn Tỉnh/TP");
      setShowAlert(true);
    } else if (!nameDistrictChoose) {
      setDescription("Vui lòng chọn Quận/Huyện");
      setShowAlert(true);
    } else if (!address) {
      setDescription("Vui lòng nhập địa chỉ cụ thể");
      setShowAlert(true);
    } else {
      let addressfull = `${address},${
        nameWardChoose ? nameWardChoose : ""
      },${nameDistrictChoose},${nameProvinceChoose}`;
      let phoneConvert = "84" + profile?.userName.substring(1);
      let phoneBrancGift = "84" + phone.substring(1);
      let dataInfo = {
        CustomerId: 267,
        Mobile: phone,
        FirstName: name,
        Username: phoneConvert,
        Email: email,
        Gender: "Mr",
        Tel: phone,
        Fax: "",
        PostalCode: "cus123456@",
        Password: "cus123456@",
        ProvinceCode: idProvince,
        DistrictCode: idDistrict,
        WardCode: idWard,
        AddressShort: address,
        Address: addressfull,
        Remark: "",
        Active: true,
      };
      let dataGift = {
        Phone: phoneConvert,
        ProductCode: itemGift.ProductCode,
        UnitCode: "1044",
        CurrentPoint: totalPoint,
        RemainPoint: totalPoint - itemGift.Point,
        Quantity: 1,
        ChangeGift: {
          ID: itemGift.ID,
          PromotionID: 0,
          ProductCode: itemGift.ProductCode,
          ProductName: itemGift.ProductName,
          Point: itemGift.Point,
          GiftCode: itemGift.GiftCode,
          GiftName: itemGift.GiftName,
          UnitCode: "1044",
          GiftImage: itemGift.GiftImage,
          Remark: itemGift.Remark,
          Active: itemGift.Active,
        },
      };
      const tokenRevo =
        "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6InJldm8iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoicmV2byIsIkZ1bGxuYW1lIjoiUXXDvSBraMOhY2giLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjczNyIsIkN1c3RvbWVySWQiOiIyNjciLCJleHAiOjE3MDk0NDA4ODksImlzcyI6InRlbWNob25nZ2lhLmNvbS52biIsImF1ZCI6IkRhYzgwOTkifQ.shPC_m0wc1g6Y-Zgsm3JwA31ochQPknsVl94A553_4E";
      if (isLoadingOuttech === true) {
        try {
          const res = await axios({
            url: API.addInfoCustomer(),
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokenRevo}`,
            },

            data: dataInfo,
          });
          setIsLoading(true);
          setIsLoadingOuttech(true);
          const response = await axios({
            url: API.confirmGift(),
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokenRevo}`,
            },
            data: dataGift,
          });

          if (response.data) {
            //kiểm tra data đổi quà thành công bên DAC trả về!
            if (response.data.ID) {
              // kiểm tra tính hoàn thành của đổi quà, nếu tồn tại ID đổi!
              try {
                let dataBandGift = {
                  // tạo data lưu trữ thông tin đổi quà thành công về hệ thống serivces
                  confirm_gift_id: response.data.ID,
                  gift_image:
                    "https://quantri.lineabon.com.vn" + itemGift.GiftImage,
                  gift_name: itemGift.GiftName,
                  product_code: itemGift.ProductCode,
                  gift_code: itemGift.GiftCode,
                  receive_phone: phoneBrancGift,
                  phonechange: phoneConvert,
                  name_user: name,
                  address_user: addressfull,
                };
                const resBrandGift = await axios({
                  url: API.saveBrandGift(),
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${profile?.session_id}`,
                  },
                  data: dataBandGift,
                });
                if (resBrandGift.data.status) {
                  // kiểm tra data lưu về services revo đã thành công chưa!
                  setIsLoading(false);
                  setIsLoadingOuttech(false);
                  setIsShowModalComfimGift(false);
                  setIsShowModal(true);
                } else {
                  setIsLoading(false);
                  setIsLoadingOuttech(false);
                  setIsShowModalComfimGift(false);
                  setDescription(
                    "Hệ thống lưu tích điểm đang gặp sự cố. Vui lòng chụp ảnh màn hình thông báo này lại và gửi cho tổng đài CSKH!"
                  );
                  setShowAlert(true);
                }
              } catch (error) {
                console.log(error);
              }
            } else {
              setIsLoading(false);
              setIsLoadingOuttech(false);
              setIsShowModalComfimGift(false);
              setDescription(
                "Đổi thất bại,Không tìm thấy ID quà tặng, Hãy liên hệ đến tổng đài chăm sóc để được hỗ trợ!"
              );
              setShowAlert(true);
            }
          } else {
            setIsLoading(false);
            setIsLoadingOuttech(false);
            setIsShowModalComfimGift(false);
            setDescription(
              "Đổi thất bại, Hãy liên hệ đến tổng đài chăm sóc để được hỗ trợ!"
            );
            setShowAlert(true);
          }
        } catch (error) {
          console.log("lỗi rồi");
          console.log(error);
        }
      }
    }
  };

  // hàm lấy id tỉnh
  const handleProvinceChange = (value) => {
    const selectedProvinceID = value?.option?.code;
    setIdProvince(selectedProvinceID);
  };
  // hàm lấy id huyện
  const handleDistricIDChange = (value) => {
    const selectedDistricID = value?.option?.code;
    setIdDistrict(selectedDistricID);
  };
  const handleWardIDChange = (value) => {
    const selectedWardID = value?.option?.code;
    setIdWard(selectedWardID);
  };
  // Hàm chọn tỉnh
  const onSetNameProvince = (value) => {
    setNameProvinceChoose(value?.option?.displayName);
  };
  // Hàm chọn huyện
  const onSetNameDistrict = (value) => {
    setNameDistrictChoose(value?.option?.displayName);
  };
  // Hàm chọn xã
  const onSetNameWard = (value) => {
    setNameWardChoose(value?.option?.displayName);
  };
  // Lọc danh sách lên picker:
  // +) dữ liệu tỉnh
  const genTestDataPrv = () => {
    const data = [];
    if (DataProvince.length === 0) {
      return;
    } else {
      for (let i = 0; i < DataProvince.length; i++) {
        data.push({
          value: i + 1,
          displayName: `${DataProvince[i].Name}`,
          id: DataProvince[i].ID,
          code: `${DataProvince[i].Code}`,
        });
      }
    }
    setListPrv(data);
  };
  const handleDataDis = (idProvince) => {
    if (DataDistrict.length === 0) {
      return;
    } else {
      const listDisCopy = [...DataDistrict];

      const dataCopied = listDisCopy.filter(
        (item) => item?.ProvinceCode === idProvince
      );
      const newDataDistrict = dataCopied.map((item) => {
        return {
          ...item,
          choose: false,
        };
      });
      const data = [];
      for (let i = 0; i < newDataDistrict.length; i++) {
        data.push({
          value: i + 1,
          displayName: `${newDataDistrict[i].Name}`,
          id: newDataDistrict[i].ID,
          code: `${newDataDistrict[i].Code}`,
        });
      }
      setListDis(data);
    }
  };
  const handleDataWard = (idDistrict) => {
    if (DataWard.length === 0) {
      return;
    } else {
      const dataCopied = DataWard.filter(
        (item) => item?.DistrictCode === idDistrict
      );
      const newDataWard = dataCopied.map((item) => {
        return {
          ...item,
          choose: false,
        };
      });
      const data = [];
      for (let i = 0; i < newDataWard.length; i++) {
        data.push({
          value: i + 1,
          displayName: `${newDataWard[i].Name}`,
          id: newDataWard[i].ID,
          code: `${newDataWard[i].Code}`,
        });
      }
      setListWard(data);
    }
  };
  const onShowModalComfimGift = () => {
    setIsLoadingOuttech(true);
    setIsShowModalComfimGift(true);
  };
  useEffect(() => {
    genTestDataPrv();
  }, []);
  useEffect(() => {
    handleDataDis(idProvince);
  }, [idProvince]);
  useEffect(() => {
    handleDataWard(idDistrict);
  }, [idDistrict]);
  return (
    <div className="w-screen h-screen bg-white">
      <Header title="Thông tin nhận quà" />
      <Page className="w-full h-full" hideScrollbar>
        <div className="w-full border-b-8 border-b-[#EBEBEB] p-2 ">
          <p className="text-base text-black font-bold"> Thông tin nhận quà</p>
        </div>
        <div className="px-4">
          <InputLabel
            label={"Họ và tên"}
            type={"text"}
            value={name}
            placeholder={"Họ và tên"}
            onChange={(text) => setName(text.target.value)}
            img={
              <div
                dangerouslySetInnerHTML={{
                  __html: personBlueIcon,
                }}
              />
            }
          />
          <InputLabel
            label={"Email"}
            value={email}
            placeholder={"Email"}
            onChange={(text) => setEmail(text.target.value)}
            img={
              <div
                dangerouslySetInnerHTML={{
                  __html: emailBlueIcon,
                }}
              />
            }
          />
          <InputLabel
            label={"Số điện thoại"}
            value={phone}
            placeholder={"Số điện thoại"}
            onChange={(text) => setPhone(text.target.value)}
            img={
              <div
                dangerouslySetInnerHTML={{
                  __html: phoneBlueIcon,
                }}
              />
            }
          />
          {/* TỈnh */}
          <div className="mt-2">
            <span className="text-[15px] text-main font-normal ">
              Chọn Tỉnh/Thành phố
            </span>
            <Picker
              placeholder="Chọn Tỉnh/Thành phố"
              mask
              onChange={(data) => {
                if (!!data) {
                  [onSetNameProvince(data), handleProvinceChange(data)];
                } else {
                  return;
                }
              }}
              maskClosable
              title="Chọn Tỉnh/Thành phố"
              action={{
                text: "Xác nhận",
                close: true,
              }}
              data={[
                {
                  options: listPrv,
                  name: "option",
                },
              ]}
            />
          </div>
          {/* HUyện */}
          {!!idProvince ? (
            <div className="mt-2">
              <span className="text-[15px] text-main font-normal ">
                Chọn Quận/Huyện
              </span>
              <Picker
                placeholder="Chọn Quận/Huyện"
                mask
                disabled={false}
                onChange={(data) => {
                  if (!!data && !!idProvince) {
                    [(onSetNameDistrict(data), handleDistricIDChange(data))];
                  } else {
                    return;
                  }
                }}
                maskClosable
                title="Chọn Quận/Huyện"
                action={{
                  text: "Xác nhận",
                  close: true,
                }}
                data={[
                  {
                    options: listDis,
                    name: "option",
                  },
                ]}
              />
            </div>
          ) : (
            <div className="mt-2">
              <span className="text-[15px] text-main font-normal ">
                Chọn Quận/Huyện
              </span>
              <div className="w-full bg-[#0000001a] rounded-[10px]">
                <p className="text-base text-[#767a7fd5] p-3 ">
                  Chọn Quận/Huyện
                </p>
              </div>
            </div>
          )}

          {/* Xã */}
          {!!idDistrict ? (
            <div className="mt-2">
              <span className="text-[15px] text-main font-normal ">
                Chọn Phường/Xã
              </span>
              <Picker
                placeholder="Chọn Phường/Xã"
                mask
                onChange={(data) => {
                  if (!!data) {
                    [onSetNameWard(data), handleWardIDChange(data)];
                  } else {
                    return;
                  }
                }}
                disabled={!!idDistrict ? false : true}
                maskClosable
                title="Chọn Phường/Xã"
                action={{
                  text: "Xác nhận",
                  close: true,
                }}
                data={[
                  {
                    options: listWard,
                    name: "option",
                  },
                ]}
              />
            </div>
          ) : (
            <div className="mt-2">
              <span className="text-[15px] text-main font-normal ">
                Chọn Phường/Xã
              </span>
              <div className="w-full bg-[#0000001a] rounded-[10px]">
                <p className="text-base text-[#767a7fd5] p-3 ">
                  Chọn Phường/Xã
                </p>
              </div>
            </div>
          )}

          <InputLabel
            label={"Địa chỉ"}
            value={address}
            placeholder={"Địa chỉ"}
            onChange={(text) => setAddress(text.target.value)}
            img={
              <div
                dangerouslySetInnerHTML={{
                  __html: mapPinBlueIcon,
                }}
              />
            }
          />
        </div>
        {!isLoadingOuttech ? (
          <button
            className=" bg-main flex flex-col  justify-center items-center  absolute bottom-10 left-1/2 -translate-x-1/2 w-[70%] py-2 rounded-3xl"
            onClick={() => {
              onShowModalComfimGift();
            }}
          >
            <p className=" text-white text-center">Xác nhận</p>
          </button>
        ) : (
          <p className="text-base text-blue ">Đang xử lý vui lòng đợi...</p>
        )}
      </Page>

      <Modal
        visible={isShowModalComfimGift}
        title="THÔNG BÁO"
        actions={[
          {
            text: "HỦY BỎ",
            onClick() {
              setIsShowModalComfimGift(false);
            },
          },
          {
            text: "ĐỒNG Ý",
            close: true,
            highLight: true,
            onClick() {
              onClickConfirmButton();
              setIsShowModalComfimGift(false);
            },
          },
        ]}
        description="Bạn chắc chắn muốn đổi phần quà này!"
      />
      {showAlert === true ? (
        <ModaNotify
          description={description}
          setPopupVisible={setShowAlert}
          popupVisible={showAlert}
        />
      ) : null}
      <Modal
        visible={isShowModal}
        title="THÔNG BÁO"
        actions={[
          {
            text: "HỦY BỎ",
            onClick(e) {
              setIsShowModal(false);
            },
          },
          {
            text: "ĐỒNG Ý",
            close: true,
            highLight: true,
            onClick(e) {
              onShowModal();
            },
          },
        ]}
        description="Bạn chắc chắn muốn đổi phần quà này!"
      />
    </div>
  );
};

export default ReceiveGiftInformationScreen;
