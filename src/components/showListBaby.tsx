import React, { useContext } from "react";
import { AppContext } from "../contexts/app.context";
import { showAgeByMonth } from "../module";
import { useNavigate } from "react-router-dom";
import path from "../constants/path";

const ShowListBaby = React.forwardRef((props, ref) => {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  React.useImperativeHandle(ref, () => {
    return {
      setShow,
    };
  });
  const { listBaby, selectedBaby, setSelectedBaby } = useContext(AppContext);

  if (!show) {
    return <div></div>;
  }
  return (
    <div
      className="w-full h-full fixed top-0 bg-[#000000] z-[9999] bg-opacity-40"
      onClick={() => setShow(false)}
    >
      <div
        className="bg-white w-[90%] mx-auto rounded-2xl mt-28 py-4 z-50"
        onClick={(event) => event.stopPropagation()}
      >
        {!!listBaby &&
          !!listBaby.length &&
          listBaby.map((item) => {
            return (
              <div className="flex mb-2" key={item.id}>
                <div className="flex items-center w-full pl-5 py-1">
                  {selectedBaby?.id === item.id ? (
                    <div className="w-11 h-11 rounded-full overflow-hidden flex items-center justify-center bg-main">
                      <img
                        src={item.image}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>
                  ) : (
                    <img
                      src={item.image}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  )}

                  <div
                    className="flex-1 overflow-hidden ml-4"
                    onClick={() => {
                      setSelectedBaby(item);
                      setShow(false);
                    }}
                  >
                    <p
                      className="text-base uppercase line-clamp-2"
                      style={{
                        color:
                          selectedBaby?.id === item.id ? "#e9636e" : "#828282",
                      }}
                    >
                      {item.name}
                    </p>
                    <p
                      className="text-sm"
                      style={{
                        color:
                          selectedBaby?.id === item.id ? "#e9636e" : "#828282",
                      }}
                    >
                      {showAgeByMonth(item.realAge)}
                    </p>
                  </div>
                  <div
                    className="px-5"
                    onClick={() => {
                      setShow(false);
                      navigate(path.editBaby, {
                        state: { item: item, type: 1 },
                      });
                    }}
                  >
                    {selectedBaby?.id === item.id ? (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M11.7474 18.443H19"
                          stroke="url(#paint0_linear)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.78 1.79479C11.5557 0.867787 12.95 0.731856 13.8962 1.49173C13.9485 1.53296 15.6295 2.83879 15.6295 2.83879C16.669 3.46719 16.992 4.80311 16.3494 5.82259C16.3153 5.87718 6.81195 17.7645 6.81195 17.7645C6.49578 18.1589 6.01583 18.3918 5.50291 18.3973L1.86353 18.443L1.04353 14.9723C0.928662 14.4843 1.04353 13.9718 1.3597 13.5773L10.78 1.79479Z"
                          stroke="url(#paint1_linear)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.02087 4.00085L14.4731 8.18798"
                          stroke="url(#paint2_linear)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="15.3737"
                            y1="17.8859"
                            x2="15.3737"
                            y2="19.0001"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#e9636e" />
                            <stop offset="1" stopColor="#e9636e" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear"
                            x1="8.83997"
                            y1="1"
                            x2="8.83997"
                            y2="18.443"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#e9636e" />
                            <stop offset="1" stopColor="#e9636e" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear"
                            x1="11.747"
                            y1="4.00085"
                            x2="11.747"
                            y2="8.18798"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#e9636e" />
                            <stop offset="1" stopColor="#e9636e" />
                          </linearGradient>
                        </defs>
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M11.7474 18.443H19"
                          stroke="#130F26"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.78 1.79479C11.5557 0.867787 12.95 0.731856 13.8962 1.49173C13.9485 1.53296 15.6295 2.83879 15.6295 2.83879C16.669 3.46719 16.992 4.80311 16.3494 5.82259C16.3153 5.87718 6.81195 17.7645 6.81195 17.7645C6.49578 18.1589 6.01583 18.3918 5.50291 18.3973L1.86353 18.443L1.04353 14.9723C0.928662 14.4843 1.04353 13.9718 1.3597 13.5773L10.78 1.79479Z"
                          stroke="#130F26"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.02087 4.00085L14.4731 8.18798"
                          stroke="#130F26"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        <div className="w-[88%] mx-auto h-[1px] bg-blue mb-4"></div>
        <div
          className="flex mb-1 mx-auto w-fit"
          onClick={() => {
            navigate(path.editBaby, {
              state: { type: 2 },
            });
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.6229 0H6.37714C2.45714 0 0 2.7745 0 6.70219V17.2978C0 21.2255 2.44571 24 6.37714 24H17.6229C21.5543 24 24 21.2255 24 17.2978V6.70219C24 2.7745 21.5543 0 17.6229 0Z"
              fill="url(#paint0_linear)"
            />
            <path
              d="M11.6666 8V15.3264"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.3333 11.6632H8"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="12"
                y1="0"
                x2="12"
                y2="24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#e9636e" />
                <stop offset="1" stopColor="#e9636e" />
              </linearGradient>
            </defs>
          </svg>
          <p className="text-blue text-base ml-2">Thêm bé</p>
        </div>
      </div>
    </div>
  );
});
export default ShowListBaby;
