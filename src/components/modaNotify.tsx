import React from "react";
import { Page, Box, Button, Modal } from "zmp-ui";

const ModaNotify = ({ description, setPopupVisible, popupVisible }) => {
  return (
    <Modal
      visible={popupVisible}
      title="Thông báo"
      onClose={() => {
        setPopupVisible(false);
      }}
      description={description}
      className="text-center overflow-auto bg-orange-700"
    >
      <Box p={2}>
        <button
          className="w-[90%]  bg-main  rounded-2xl px-2 text-white py-2"
          onClick={() => {
            setPopupVisible(false);
          }}
        >
          Xác nhận
        </button>
      </Box>
    </Modal>
  );
};

export default ModaNotify;
