import React, { useRef } from "react";
import Header from "../../components/header";
import UnConfirm from "./unConfirm";
import Confirm from "./confirm";
import Deliver from "./deliver";
import Cancel from "./cancel";
import Complete from "./complete";

export default function MyOrder() {
  const tabs = [
    {
      id: 0,
      title: "Chờ xác nhận",
    },

    {
      id: 1,
      title: "Đã xác nhận",
    },
    {
      id: 2,
      title: "Đang vận chuyển",
    },
    {
      id: 3,
      title: "Hoàn thành",
    },
    {
      id: 4,
      title: "Đã huỷ",
    },
  ];
  const WIDTH_WINDOW = window.innerWidth;
  const refScroll = useRef(null);
  const [choose, setChoose] = React.useState(0);

  const handleTabClick = (index) => {
    const tabPosition = WIDTH_WINDOW * index;
    refScroll.current?.scrollTo({
      left: tabPosition,
      behavior: "smooth",
    });
    setChoose(index);
  };
  return (
    <div className="w-full h-full bg-white">
      <Header title="Đơn hàng của tôi" />
      <div className="mt-2 flex justify-around items-center w-full">
        {tabs.map((item, index) => {
          return (
            <div
              key={item.id}
              className="flex items-center justify-center py-2"
              style={{
                // width: index === 2 ? "31%" : "23%",
                borderBottomWidth: index === choose ? 1 : 0,
                borderBottomColor: index === choose ? "#e9636e" : "#000",
              }}
              onClick={() => {
                handleTabClick(index);
              }}
            >
              <p
                className="text-xs text-[#6ecff9] font-bold text-center"
                style={{
                  color: index === choose ? "#e9636e" : "#000",
                }}
              >
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
      <div
        ref={refScroll}
        className="no-scrollbar h-full w-full "
        style={{
          overflow: "hidden",
          display: "flex",
          scrollBehavior: "smooth",
        }}
      >
        <div
          className=" no-scrollbar h-full "
          style={{
            flex: `0 0 ${WIDTH_WINDOW}px`,
          }}
        >
          <UnConfirm />
        </div>
        <div
          className=" no-scrollbar h-full "
          style={{
            flex: `0 0 ${WIDTH_WINDOW}px`,
          }}
        >
          <Confirm />
        </div>
        <div
          className=" no-scrollbar h-full "
          style={{
            flex: `0 0 ${WIDTH_WINDOW}px`,
          }}
        >
          <Deliver />
        </div>
        <div
          className=" no-scrollbar h-full "
          style={{
            flex: `0 0 ${WIDTH_WINDOW}px`,
          }}
        >
          <Complete />
        </div>
        <div
          className=" no-scrollbar h-full "
          style={{
            flex: `0 0 ${WIDTH_WINDOW}px`,
          }}
        >
          <Cancel />
        </div>
      </div>
    </div>
  );
}
