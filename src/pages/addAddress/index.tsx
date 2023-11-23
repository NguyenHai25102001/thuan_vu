import React from "react";
import Header from "../../components/header";
import { Page, Switch } from "zmp-ui";
import { useLocation, useNavigate } from "react-router-dom";
import addressApi from "../../apis/address.apis";
import { useQuery } from "@tanstack/react-query";
import ModalProvince from "./modalProvince";
import ModalDistrict from "./modalDistrict";
import ModalWard from "./modalWard";
import { IParamsAddAddress } from "../../types/address.types";
import ModaNotify from "../../components/modaNotify";

const AddAdress = () => {
  const location = useLocation();
  const { item, type } = location.state; //type:1 thêm - 2 sửa
  const [showAlert, setShowAlert] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const navigate = useNavigate();
  var vnregex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
  const [name, setName] = React.useState(item?.name || "");
  const [phone, setPhone] = React.useState(item?.phone || "");
  const [detailAddress, setDetailAddress] = React.useState(
    item?.address_detail || ""
  );
  const [nameProvince, setnameProvince] = React.useState(
    item?.province_name || ""
  );
  const [idProvince, setidProvince] = React.useState(item?.province_id || "");
  const [nameDistrict, setnameDistrict] = React.useState(
    item?.district_name || ""
  );
  const [idDistrict, setidDistrict] = React.useState(item?.district_id || "");
  const [nameWard, setnameWard] = React.useState(item?.ward_name || "");
  const [idWard, setidWard] = React.useState(item?.ward_id || "");
  const [switchValue, setSwitchValue] = React.useState<boolean>(
    item ? (item?.is_default === 1 ? true : false) : true
  );
  const refProvince = React.useRef(null);
  const refDistrict = React.useRef(null);
  const refWard = React.useRef(null);
  const setNameProvince = (arr) => {
    setnameProvince(arr);
  };
  const setIdProvince = (arr) => {
    setidProvince(arr);
  };
  const setIdDistrict = (arr) => {
    setidDistrict(arr);
  };
  const setNameDistrict = (arr) => {
    setnameDistrict(arr);
  };
  const setIdWard = (arr) => {
    setidWard(arr);
  };
  const setNameWard = (arr) => {
    setnameWard(arr);
  };

  const convetPhoneOne = (phone: string) => {
    let phoneCheck = phone.toString();
    let phoneCheckCut = phoneCheck.slice(0, 3);
    if (phoneCheckCut.indexOf("+84") != -1) {
      return phoneCheck.replace("+84", "0");
    } else {
      return phoneCheck;
    }
  };
  const onConfirm = async () => {
    if (!name) {
      setDescription("Hãy nhập tên người nhận");
      setShowAlert(true);
      return;
    }
    if (!phone) {
      setDescription("Hãy nhập số điện thoại người nhận");
      setShowAlert(true);
      return;
    }
    if (!idProvince) {
      setDescription("Hãy chọn Tỉnh/TP");
      setShowAlert(true);
      return;
    }
    if (!idDistrict) {
      setDescription("Hãy chọn Quận/Huyện");
      setShowAlert(true);
      return;
    }
    if (!detailAddress) {
      setDescription("Hãy nhập địa chỉ chi tiết");
      setShowAlert(true);
      return;
    }
    let checkPhone = vnregex.test(convetPhoneOne(phone));
    if (checkPhone == false) {
      setDescription("Hãy nhập đúng định dạng sdt");
      setShowAlert(true);
      return;
    }
    if (type === 1) {
      const res = await addressApi.addAdress({
        phone,
        name,
        is_default: switchValue ? 1 : 0,
        province_id: idProvince,
        district_id: idDistrict,
        ward_id: idWard,
        address_detail: detailAddress,
      });
      if (res.data.status) {
        setDescription("Hãy nhập đúng định dạng sdt");
        setShowAlert(true);
        navigate(-1);
      } else {
        setDescription("Thêm địa chỉ thất bại.Thử lại sau");
        setShowAlert(true);
        navigate(-1);
      }
    } else {
      const params: IParamsAddAddress = {
        id: item?.id,
        phone: phone,
        name: name,
        is_default: switchValue ? 1 : 0,
        province_id: idProvince,
        district_id: idDistrict,
        ward_id: idWard,
        address_detail: detailAddress,
      };
      const res = await addressApi.editAddress(params);
      if (res.data.status) {
        setDescription("Sửa địa chỉ thành công");
        setShowAlert(true);
        navigate(-1);
      } else {
        setDescription("Thêm địa chỉ thất bại.Thử lại sau");
        setShowAlert(true);
        navigate(-1);
      }
    }
  };
  const resetDistrictAndWard = () => {
    setNameDistrict("");
    setidDistrict("");
    setNameWard("");
    setIdWard("");
  };
  const resetWard = () => {
    setNameWard("");
    setIdWard("");
  };
  React.useEffect(() => {
    resetDistrictAndWard();
  }, [nameProvince]);

  React.useEffect(() => {
    resetWard();
  }, [nameDistrict]);

  React.useEffect(() => {
    if (type === 2) {
      setName(item.name);
      setPhone(item.phone);
      setnameProvince(item?.province_name);
      setnameDistrict(item?.district_name);
      setnameWard(item?.ward_name);
      setidProvince(item?.province_id);
      setidDistrict(item?.district_id);
      setidWard(item?.ward_id);
      setDetailAddress(item?.address_detail);
    }
  }, [item]);
  return (
    <div className="w-full h-full bg-[#ececec] relative">
      <Header title={`${type === 1 ? "Thêm địa chỉ" : "Sửa địa chỉ"}`} />
      <Page className="w-full h-full no-scrollbar px-5" hideScrollbar>
        <div>
          <p className=" font-['Nunito'] font-bold text-[#263238] mt-8">
            Thông tin liên hệ
          </p>
          <div className="bg-white mt-4 mb-5 flex flex-col px-3 rounded-lg pt-2 pb-6">
            <input
              value={name}
              placeholder="Họ tên"
              className="w-full h-10 outline-none border-none py-0 px-2"
              onChange={(e) => setName(e.target.value)}
            />
            <div className="w-full h-[1px] bg-[#828282] mb-2 mt-1" />
            <input
              value={phone}
              placeholder="Nhập số điện thoại"
              className="w-full h-10 outline-none border-none py-0 px-2"
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="w-full h-[1px] bg-[#828282] mt-1" />
          </div>
          <p className=" font-['Nunito'] font-bold text-[#263238] ">Địa chỉ</p>
          <div className="bg-white mt-4 mb-5 flex flex-col px-3 rounded-lg pt-2 pb-6">
            <input
              value={nameProvince}
              placeholder="Nhập tỉnh thành phố"
              className="w-full h-10 outline-none border-none py-0 px-2"
              readOnly
              onClick={() => refProvince.current?.setShowModalProvince(true)}
            />
            <div className="w-full h-[1px] bg-[#828282] mt-1" />
            <input
              value={nameDistrict}
              placeholder="Nhập quận huyện"
              className="w-full h-10 outline-none border-none py-0 px-2"
              readOnly
              onClick={() => {
                if (!idProvince) {
                  setDescription("Hãy chọn Tỉnh/TP");
                  setShowAlert(true);
                } else {
                  refDistrict.current?.setShowModalDistrict(true);
                }
              }}
            />
            <div className="w-full h-[1px] bg-[#828282] mt-1" />{" "}
            <input
              value={nameWard}
              placeholder="Nhập phường xã"
              className="w-full h-10 outline-none border-none py-0 px-2"
              readOnly
              onClick={() => {
                if (!idDistrict) {
                  setDescription("Hãy chọn Quận/Huyện");
                  setShowAlert(true);
                } else {
                  refWard.current?.setShowModalWard(true);
                }
              }}
            />
            <div className="w-full h-[1px] bg-[#828282] mt-1" />{" "}
            <input
              value={detailAddress}
              placeholder="Nhập chi tiết địa chỉ"
              className="w-full h-10 outline-none border-none py-0 px-2"
              onChange={(e) => setDetailAddress(e.target.value)}
            />
            <div className="w-full h-[1px] bg-[#828282] mt-1" />
          </div>
          <div className="flex justify-between">
            <p className=" font-['Nunito'] font-bold text-[#263238] ">
              Đặt làm địa chỉ mặc định
            </p>
            <Switch
              checked={switchValue}
              onChange={() => setSwitchValue(!switchValue)}
            />
          </div>
        </div>
        <div className="h-44" />
      </Page>
      <div className="absolute bottom-0 pb-3 pt-5 border-t borer-t-[#99E7FF] flex flex-col items-center justify-center w-full bg-white">
        <div
          className="bg-main w-[60%] flex justify-center items-center py-2 rounded-full"
          onClick={onConfirm}
        >
          <p className="font-['Nunito'] font-bold text-white text-center">
            {type === 1 ? "Thêm địa chỉ" : "Lưu địa chỉ"}
          </p>
        </div>
      </div>
      <ModalProvince
        ref={refProvince}
        setNameProvince={setNameProvince}
        setIdProvince={setIdProvince}
      />
      <ModalDistrict
        ref={refDistrict}
        provinceId={idProvince}
        setIdDistrict={setIdDistrict}
        setNameDistrict={setNameDistrict}
      />
      <ModalWard
        ref={refWard}
        districtId={idDistrict}
        setIdWard={setIdWard}
        setNameWard={setNameWard}
      />
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
export default AddAdress;
