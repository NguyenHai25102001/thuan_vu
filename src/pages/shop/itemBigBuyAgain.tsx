import React from "react";
import { convertTimeByFormat } from "../../module";
import { API_URL_IMAGE } from "../../constants/utils";
import cartApi from "../../apis/cart.apis";
import { useNavigate } from "react-router-dom";
import path from "../../constants/path";
import ModaNotify from "../../components/modaNotify";

export default function ItemBigBuyAgain({ item }) {
  const [showAlert, setShowAlert] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const findImage = (item) => {
    if (!!item && !!item.image) {
      return item.image;
    } else {
      return item.order_item[0]?.product?.image;
    }
  };
  const navigate = useNavigate();
  const buyAgain = async () => {
    try {
      const res = await cartApi.buyAgainProduct(item.id);
      if (res.data.status) {
        setDescription(res.data.message);
        setShowAlert(true);
      } else {
        setDescription(res.data.message);
        setShowAlert(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      key={item.id}
      onClick={() => navigate(path.listProductBuyAgain, { state: item })}
      className="bg-[#D6F4FF] rounded-2xl pt-3 py-2 flex flex-col shadow-md relative"
    >
      <p className="text-xs font-['Nunito'] font-semibold text-center w-full  text-[#828282]">
        Đơn hàng:
        {"  "}
        {convertTimeByFormat(item?.created_at, "DD/MM/YYYY")}
      </p>
      <div className="w-[70%] h-24 rounded-lg my-2 mx-auto relative">
        <img
          src={`${API_URL_IMAGE}${findImage(item)}`}
          className="w-[100%] h-24 rounded-lg object-cover mx-auto"
        />
        {!!item && !!item.image ? (
          <div
            className="absolute bottom-0 right-0 rounded-md px-2"
            style={{ backgroundColor: "#50647866" }}
          >
            <p className="font-semibold text-[8px] text-white text-center">
              Sắp sử
              <br />
              dụng hết
            </p>
          </div>
        ) : (
          <div />
        )}
      </div>
      <div className="bg-main flex flex-col justify-start mt-1 pl-4 pr-5 rounded-r-full w-2/3 py-1 ml-[-8px] shadow-lg">
        <div className="whitespace-nowrap text-xs font-['Nunito'] font-semibold text-white ">
          {item?.order_item?.length} sản phẩm
        </div>
      </div>
      <div className="border-solid w-24  border-main mx-auto mt-4 my-2 bg-[#ddf4ff] flex flex-col justify-start h-6 items-center py-1 border rounded-[199px]">
        <div
          onClick={(event) => {
            event.stopPropagation();
            buyAgain();
          }}
          className="whitespace-nowrap text-xs font-['Nunito'] font-semibold leading-[12px] text-main w-1/2"
        >
          Mua lại
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
}
