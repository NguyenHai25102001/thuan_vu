import React from "react";
import { Box, Spinner } from "zmp-ui";

const LoadingPage = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10000,
        width: "100%",
        height: "100%",
        backgroundColor: "#00000080",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner />
    </div>
  );
};
export default LoadingPage;
