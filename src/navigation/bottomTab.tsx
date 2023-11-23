import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { openChat } from "zmp-sdk/apis";
import {
  iconCallTab,
  iconHomeTab,
  iconHomeTabActive,
  iconMilestoneTab,
  iconMilestoneTabActive,
  iconProfileTab,
  iconProfileTabActive,
  iconShopTab,
  iconShopTabActive,
} from "../utils/svgTabbar";

const tabs = {
  "/": {
    label: "Trang chủ",
    icon: iconHomeTab,
    activeIcon: iconHomeTabActive,
  },
  "/shop": {
    label: "Shop Mẹ & Bé",
    icon: iconShopTab,
    activeIcon: iconShopTabActive,
  },
  "/advise": {
    label: "Tư vấn",
    icon: iconCallTab,
    activeIcon: iconCallTab,
  },
  "/milestone": {
    label: "Cột mốc",
    icon: iconMilestoneTab,
    activeIcon: iconMilestoneTabActive,
  },

  "/profile": {
    label: "Thông tin bé",
    icon: iconProfileTab,
    activeIcon: iconProfileTabActive,
  },
};
type TabKeys = keyof typeof tabs;

const BOTTOM_NAVIGATION_PAGES = ["/", "/shop", "/milestone", "/profile"];

const CustomNavigationBotom = () => {
  const [activeTab, setActiveTab] = useState<TabKeys | string>("/");
  const navigate = useNavigate();
  const location = useLocation();
  const BottomNav = React.useMemo(() => {
    setActiveTab(location.pathname);
    return BOTTOM_NAVIGATION_PAGES.includes(location.pathname);
  }, [location]);
  const openChatScreen = async () => {
    try {
      await openChat({
        type: "oa",
        id: "4046097185763129211",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (BottomNav) {
    return (
      <div className="flex items-center bg-white pt-3 pb-1 relative">
        {Object.keys(tabs).map((path: TabKeys, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-1 justify-center"
            onClick={() => {
              if (tabs[path].label === "Tư vấn") {
                return;
              } else {
                setActiveTab(path);
                navigate(path);
              }
            }}
          >
            {tabs[path].label === "Tư vấn" ? (
              <div className="w-6 h-6" />
            ) : // <img
            //   src={
            //     path === activeTab ? tabs[path].activeIcon : tabs[path].icon
            //   }
            //   className="w-6 h-6 object-contain"
            // />
            path === activeTab ? (
              tabs[path].activeIcon
            ) : (
              tabs[path].icon
            )}
            <span
              className="text-align text-[9px] font-bold"
              style={{
                color: path === activeTab ? "#e9636e" : "#BFBFBF",
              }}
            >
              {tabs[path].label}
            </span>
          </div>
        ))}
        <div
          className="absolute w-16 h-16 rounded-full overflow-hidden flex items-center -top-7 z-[99] left-1/2 -translate-x-1/2 self-center justify-center bg-white"
          onClick={() => openChatScreen()}
        >
          <div className=" w-14 h-14 rounded-full flex items-center justify-center bg-[#f5f7ff]">
            <svg width={25} height={24} viewBox="0 0 25 24" fill="none">
              <path
                d="M22.5405 18.33C22.5405 18.69 22.4615 19.06 22.2935 19.42C22.1255 19.78 21.9082 20.12 21.6216 20.44C21.1375 20.98 20.6039 21.37 20.0012 21.62C19.4084 21.87 18.7661 22 18.0745 22C17.0666 22 15.9897 21.76 14.8534 21.27C13.7171 20.78 12.5808 20.12 11.4544 19.29C10.3181 18.45 9.24115 17.52 8.21356 16.49C7.19585 15.45 6.27695 14.36 5.45686 13.22C4.64664 12.08 3.99452 10.94 3.52025 9.81C3.04597 8.67 2.80884 7.58 2.80884 6.54C2.80884 5.86 2.92741 5.21 3.16454 4.61C3.40168 4 3.77714 3.44 4.30082 2.94C4.93318 2.31 5.62483 2 6.356 2C6.63266 2 6.90932 2.06 7.15633 2.18C7.41323 2.3 7.64049 2.48 7.81834 2.74L10.1107 6.01C10.2885 6.26 10.417 6.49 10.5059 6.71C10.5948 6.92 10.6442 7.13 10.6442 7.32C10.6442 7.56 10.575 7.8 10.4367 8.03C10.3083 8.26 10.1205 8.5 9.8834 8.74L9.13247 9.53C9.02378 9.64 8.97438 9.77 8.97438 9.93C8.97438 10.01 8.98426 10.08 9.00402 10.16C9.03366 10.24 9.0633 10.3 9.08306 10.36C9.26092 10.69 9.56722 11.12 10.002 11.64C10.4466 12.16 10.9209 12.69 11.4347 13.22C11.9682 13.75 12.482 14.24 13.0057 14.69C13.5195 15.13 13.9444 15.43 14.2803 15.61C14.3297 15.63 14.389 15.66 14.4581 15.69C14.5372 15.72 14.6162 15.73 14.7052 15.73C14.8731 15.73 15.0016 15.67 15.1103 15.56L15.8612 14.81C16.1082 14.56 16.3454 14.37 16.5726 14.25C16.7999 14.11 17.0271 14.04 17.2741 14.04C17.4619 14.04 17.6595 14.08 17.8769 14.17C18.0942 14.26 18.3215 14.39 18.5685 14.56L21.839 16.91C22.0959 17.09 22.2738 17.3 22.3824 17.55C22.4812 17.8 22.5405 18.05 22.5405 18.33Z"
                stroke="#e9636e"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M19.112 9C19.112 8.4 18.6477 7.48 17.956 6.73C17.3236 6.04 16.4838 5.5 15.6538 5.5"
                stroke="#e9636e"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.5703 9C22.5703 5.13 19.4776 2 15.6538 2"
                stroke="#e9636e"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};
export default CustomNavigationBotom;
