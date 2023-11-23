import React, { useState } from "react";
import { Page, Button, Text, Modal, Box } from "zmp-ui";

export default function AlertCus({
  description,
  setDialogVisible,
  dialogVisible,
}) {
  return (
    <Page className="section-container absolute w-full h-full z-[1000]">
      <Modal
        visible={dialogVisible}
        title="Thông báo"
        onClose={() => {
          setDialogVisible(false);
        }}
        actions={[
          {
            text: "Đóng",
            close: true,
            highLight: true,
          },
        ]}
        description={description}
      />
    </Page>
  );
}
