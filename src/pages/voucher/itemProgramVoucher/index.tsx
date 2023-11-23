import React from "react";
import ModaNotify from "../../../components/modaNotify";

const ItemProgramVoucher = ({ status, name, describe }) => {
  const [showAlert, setShowAlert] = React.useState(false);
  const [description, setDescription] = React.useState("");
  return (
    <div className="border-solid bg-[linear-gradient(360deg,_#ee8948_0%,rgba(238,_137,_72,_0)_100%)] pt-3 pb-1 px-3 mx-2 mb-2 w-auto h-auto rounded-lg">
      <div className="flex items-center justify-between pt-4">
        <span className="text-base font-['Montserrat'] font-semibold text-[#28293d]">
          {name}
        </span>
        {status === 1 && (
          <span className="text-sm font-['Montserrat'] font-semibold text-[#d54f44] bg-gradient-to-r from-pink-600 via-red-600 to-orange-500 text-transparent bg-clip-text">
            Đang diễn ra
          </span>
        )}
        {status === 0 && (
          <span className="text-sm font-['Montserrat'] font-semibold text-[#d54f44] bg-gradient-to-r from-pink-600 via-red-600 to-orange-500 text-transparent bg-clip-text">
            Đã kết thúc
          </span>
        )}
      </div>
      <div className="flex justify-between pb-2 h-30">
        <span className="text-xs font-['Montserrat'] text-[#e10b0c] w-[200px] line-clamp-3">
          {describe}
        </span>
        {status === 1 && (
          <div
            className="flex items-center justify-center w-[120px] bg-[#db2759] h-8 mt-4 ml-2 rounded-[30px] self-end"
            onClick={() => {
              setDescription("Tính năng đang phát triển");
              setShowAlert(true);
            }}
          >
            <span className="text-sm font-['Montserrat'] text-white">
              Thực hiện
            </span>
          </div>
        )}
        {status === 0 && (
          <div className="flex items-center justify-center h-8 mt-4 ml-2 w-[120px] rounded-[30px] self-end"></div>
        )}
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
export default ItemProgramVoucher;
