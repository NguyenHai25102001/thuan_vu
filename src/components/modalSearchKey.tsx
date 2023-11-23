import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import detailProblemApi from "../apis/detailProblem.apis";
import path from "../constants/path";

const ModalSearchKey = ({ setModal, month }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [listData, setListData] = React.useState([]);

  const fetchDataSearch = async (value: string) => {
    const res = await detailProblemApi.getProductWithSearchKey(value, month);
    if (res.status) {
      setListData(res?.data?.data);
    } else {
      alert("Có lỗi xảy ra");
    }
  };
  const handleChange = (value: string) => {
    setSearchValue(value);
    fetchDataSearch(value);
  };
  useEffect(() => {
    fetchDataSearch(" ");
  }, []);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[10000] outline-none focus:outline-none ">
        <div className="relative  my-6 mx-auto w-[90%]">
          <div className="border-0  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none rounded-[10px]">
            <div className="flex items-center justify-between px-2 py-2 border-b border-solid border-main rounded-t">
              <svg width="40" height="40" viewBox="0 0 30 30" fill="none">
                <circle
                  cx="14.8281"
                  cy="9.17156"
                  r="5"
                  transform="rotate(45 14.8281 9.17156)"
                  stroke="#e9636e"
                  strokeWidth="2"
                />
                <line
                  x1="12.0001"
                  y1="13.4141"
                  x2="5.63611"
                  y2="19.7781"
                  stroke="#e9636e"
                  strokeWidth="2"
                />
              </svg>
              <input
                type="search"
                placeholder="Tìm kiếm vấn đề tại đây....."
                value={searchValue}
                onChange={(e) => handleChange(e.target.value)}
                className="w-full h-full text-lg text-main bg-white outline-none "
              />
              <button
                className="p-1 ml-auto bg-transparent border-0   float-right "
                onClick={() => setModal(false)}
              >
                <span className=" text-main text-2xl  ">×</span>
              </button>
            </div>
            {/*body*/}
            <div className=" px-6 py-2 h-[200px] overflow-y-auto rounded-[10px] ">
              {listData.length === 0 && (
                <span className="text-lg text-main">
                  Không tìm thấy kết quả phù hợp
                </span>
              )}
              {!!listData &&
                !!listData.length &&
                listData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-between items-center border-b-[0.5px] border-solid border-main mb-2"
                      onClick={() => {
                        navigate(path.lisPostWithProblem, { state: item });
                      }}
                    >
                      <span className="text-lg text-main">{item.name}</span>
                      <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                        <path
                          d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5H13V3.5H0V4.5Z"
                          fill="#828282"
                          fillOpacity="0.5"
                        />
                      </svg>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalSearchKey;
