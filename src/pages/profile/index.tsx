import React, { useContext } from "react";
import { Modal, Page, useNavigate } from "zmp-ui";
import Images from "../../static";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { AppContext } from "../../contexts/app.context";
import askDoctorApi from "../../apis/askDoctor.apis";
import { CategoryQuestion, Question } from "../../types/askDoctor.type";
import { API_URL_IMAGE } from "../../constants/utils";
import { showTimeAgo } from "../../module";
import path from "../../constants/path";
import SpinLoad from "../../components/spinLoad";
import ItemProductShop from "../../components/itemProductShop";
import profileApi from "../../apis/profile.apis";
import { IProductShop } from "../../types/shop.types";
import ModalAddProduct from "../shop/modalAddProduct";
import { listCategoryBlog } from "./dataProfile";
import HeaderBackHome from "../../components/headerBackHome";
import ModaNotify from "../../components/modaNotify";
interface IListCategory {
  title: string;
  icon: string;
  id: string;
}
const Profile = () => {
  const navigate = useNavigate();
  const { selectedBaby } = useContext(AppContext);
  const refModalAddProduct = React.useRef(null);
  const [showAlert, setShowAlert] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const [itemProductChoose, setItemProductChoose] =
    React.useState<IProductShop>();
  const [dataMyQues, setDataMyQues] = React.useState<Question[]>([]);
  const [contentQues, setContentQues] = React.useState("");
  const [contentQuesGpt, setContentQuesGpt] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const [categoryQues, setCategoryQues] = React.useState<CategoryQuestion[]>(
    []
  );
  const [solutionId, setSolutionId] = React.useState("");
  const [chatAI, setChatAI] = React.useState(false);
  const [loadingGPT, setLoadingGPT] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [dataGPT, setDataGPT] = React.useState("");
  const [loadingFalse, setLoadingFalse] = React.useState(false);
  const [dataProduct, setDataProduct] = React.useState<IProductShop[]>([]);
  const [listCategory] = React.useState<IListCategory[]>(listCategoryBlog);
  const getMyDataQues = async () => {
    try {
      setIsLoading(true);
      const res = await askDoctorApi.getMyQuesHome();
      if (res.status) {
        setIsLoading(false);

        setDataMyQues(res.data.data);
      } else {
        setDescription("Có lỗi xảy ra");
        setShowAlert(true);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  const getCategoryQues = async () => {
    const res = await askDoctorApi.getAllCategoryQues();
    if (res.status) {
      setCategoryQues(res.data.data);
    } else {
      setDescription("Có lỗi xảy ra");
      setShowAlert(true);
    }
  };
  const sendQuestion = async () => {
    if (!solutionId) {
      setDescription("Vui lòng chọn 1 danh mục");
      setShowAlert(true);
    }
    if (!contentQues) {
      setDescription("Vui lòng nhập nội dung câu hỏi");
      setShowAlert(true);
    }
    try {
      let formData = new FormData();
      formData.append("id_category_question", solutionId);
      formData.append("content_question", contentQues);
      const res = await askDoctorApi.createQuestion(formData);
      if (res.status) {
        setDescription("Gửi câu hỏi thành công");
        setShowAlert(true);
        setContentQues("");
        setSolutionId("");
        getMyDataQues();
      } else {
        setDescription(res.data.message);
        setShowAlert(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const sendQuesGpt = async () => {
    if (!contentQues) {
      setDescription("Vui lòng nhập nội dung câu hỏi");
      setShowAlert(true);
    }
    try {
      let formData = new FormData();
      formData.append("content", contentQues);
      setLoadingGPT(true);
      setLoadingFalse(false);
      const res = await askDoctorApi.chatGPTQues(formData);
      if (res.status) {
        setDataGPT(res.data.data);
        setContentQues("");
        setLoadingGPT(false);
      } else {
        setLoadingFalse(true);
        setDescription(res.data.message);
        setShowAlert(true);
      }
    } catch (error) {
      setLoadingFalse(true);
      console.error(error);
    } finally {
      setLoadingGPT(false);
    }
  };
  const getProduct = async () => {
    const res = await profileApi.getProductRecommend();
    if (res.status) {
      setDataProduct(res.data.data.data);
    } else {
      setDescription("Có lỗi xảy ra");
      setShowAlert(true);
    }
  };
  React.useEffect(() => {
    getProduct();
  }, []);
  React.useEffect(() => {
    getCategoryQues();
    getMyDataQues();
  }, []);
  const handleSendQues = () => {
    if (solutionId && contentQues) {
      sendQuestion();
      setVisible(false);
    } else if (!contentQues) {
      setDescription("Vui lòng nhập nội dung câu hỏi");
      setShowAlert(true);
      setVisible(false);
    } else if (!solutionId) {
      setDescription("Vui lòng chọn 1 danh mục câu hỏi");
      setShowAlert(true);
    }
  };
  const handleSenQuesGPT = () => {
    if (!contentQues) {
      setDescription("Vui lòng nhập nội dung câu hỏi");
      setShowAlert(true);
    } else {
      setContentQuesGpt(contentQues);
      sendQuesGpt();
      setChatAI(true);
      setDataGPT("");
    }
  };

  return (
    <div className="h-screen p-0 m-0">
      <div className="overflow-y-hidden sticky top-0 z-20">
        <HeaderBackHome title="Phương pháp nuôi con khoa học" />
      </div>
      <Page hideScrollbar className="w-full h-full pb-56 bg-[#FFF1F4]">
        <div className="">
          <div className="flex items-center justify-normal px-2 pt-2">
            <div className="flex items-center">
              <svg
                className=""
                width="14"
                height="14"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12ZM5.0625 7.875H5.625V6.375H5.0625C4.75078 6.375 4.5 6.12422 4.5 5.8125C4.5 5.50078 4.75078 5.25 5.0625 5.25H6.1875C6.49922 5.25 6.75 5.50078 6.75 5.8125V7.875H6.9375C7.24922 7.875 7.5 8.12578 7.5 8.4375C7.5 8.74922 7.24922 9 6.9375 9H5.0625C4.75078 9 4.5 8.74922 4.5 8.4375C4.5 8.12578 4.75078 7.875 5.0625 7.875ZM6 3C6.19891 3 6.38968 3.07902 6.53033 3.21967C6.67098 3.36032 6.75 3.55109 6.75 3.75C6.75 3.94891 6.67098 4.13968 6.53033 4.28033C6.38968 4.42098 6.19891 4.5 6 4.5C5.80109 4.5 5.61032 4.42098 5.46967 4.28033C5.32902 4.13968 5.25 3.94891 5.25 3.75C5.25 3.55109 5.32902 3.36032 5.46967 3.21967C5.61032 3.07902 5.80109 3 6 3Z"
                  fill="#e9636e"
                />
              </svg>
            </div>
            <div className="flex items-center justify-between w-full pl-1">
              <span className="paytoneOne text-sm font-bold text-[#332d37]">
                Danh mục
              </span>
            </div>
          </div>
          <div className="grid grid-cols-5 bg-[#FFF1F4] rounded-xl p-2 items-start justify-center">
            {!!listCategory &&
              !!listCategory.length &&
              listCategory?.map((item, i) => {
                return (
                  <div
                    className="flex flex-col items-center justify-center"
                    key={i}
                    onClick={() => {
                      navigate(path.listBlog, {
                        state: {
                          id: item.id,
                          title: item.title,
                          age: selectedBaby?.realAge,
                        },
                      });
                    }}
                  >
                    <div className="bg-main rounded-[50%] p-2">
                      <img src={item.icon} className="w-8 h-8 object-contain" />
                    </div>
                    <div
                      className="text-[#828282] font-bold text-[11px] text-center mb-2 mt-1"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></div>
                  </div>
                );
              })}
          </div>
        </div>
        {isLoading && <SpinLoad />}
        {/*Câu hỏi của tôi */}
        {!!dataMyQues && dataMyQues?.length > 0 && (
          <>
            <div className="flex items-center justify-normal px-2 pt-2">
              <div className="flex items-center">
                <svg
                  className=""
                  width="14"
                  height="14"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12ZM5.0625 7.875H5.625V6.375H5.0625C4.75078 6.375 4.5 6.12422 4.5 5.8125C4.5 5.50078 4.75078 5.25 5.0625 5.25H6.1875C6.49922 5.25 6.75 5.50078 6.75 5.8125V7.875H6.9375C7.24922 7.875 7.5 8.12578 7.5 8.4375C7.5 8.74922 7.24922 9 6.9375 9H5.0625C4.75078 9 4.5 8.74922 4.5 8.4375C4.5 8.12578 4.75078 7.875 5.0625 7.875ZM6 3C6.19891 3 6.38968 3.07902 6.53033 3.21967C6.67098 3.36032 6.75 3.55109 6.75 3.75C6.75 3.94891 6.67098 4.13968 6.53033 4.28033C6.38968 4.42098 6.19891 4.5 6 4.5C5.80109 4.5 5.61032 4.42098 5.46967 4.28033C5.32902 4.13968 5.25 3.94891 5.25 3.75C5.25 3.55109 5.32902 3.36032 5.46967 3.21967C5.61032 3.07902 5.80109 3 6 3Z"
                    fill="#e9636e"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between w-full pl-1">
                <span className="paytoneOne text-sm font-bold text-[#332d37]">
                  Các câu hỏi của tôi
                </span>
                <span
                  className="text-right text-xs font-bold text-[#626262]"
                  onClick={() => navigate(`${path.historyAsk}`)}
                >
                  Lịch sử câu hỏi
                  {"  "}
                  &#62;
                </span>
              </div>
            </div>
            <div className="px-2 pt-2">
              {!!dataMyQues && !!dataMyQues?.length && (
                <Swiper slidesPerView={3} spaceBetween={5}>
                  {dataMyQues?.map((item) => {
                    return (
                      <SwiperSlide key={item.id}>
                        <div
                          className="flex flex-col justify-center items-center"
                          onClick={() => {
                            navigate(`/detailQuestion/${item.id}`, {
                              state: { item },
                            });
                          }}
                        >
                          <img
                            src={`${API_URL_IMAGE}${item.image}`}
                            className="w-[113px] h-[114px] object-cover rounded-xl self-start"
                          />
                          <span className="text-[#828282] text-xs pt-2 mr-2 h-10 line-clamp-2 self-start">
                            |{item.content_question}
                          </span>
                          <div className="flex justify-between items-center pt-2 pr-2 w-full">
                            <div className="flex flex-col self-start">
                              {item.type_result === 0 && (
                                <span className="text-xs font-bold text-[#c7a536]">
                                  Chờ xác nhận
                                </span>
                              )}
                              {item.type_result === 1 && (
                                <span className="text-xs font-bold text-main">
                                  Đã trả lời
                                </span>
                              )}
                              <span className="text-[#828282] text-[10px] font-bold">
                                {showTimeAgo(item?.created_at)}
                              </span>
                            </div>
                            {item.type_result === 1 && (
                              <div className="flex justify-end">
                                <img
                                  src={Images.iconReadMore}
                                  className="w-[15px] h-[15px] object-contain"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              )}
            </div>
          </>
        )}

        <div className="flex items-center justify-normal px-2 pt-2">
          <div className="flex items-center">
            <svg
              className=""
              width="14"
              height="14"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12ZM5.0625 7.875H5.625V6.375H5.0625C4.75078 6.375 4.5 6.12422 4.5 5.8125C4.5 5.50078 4.75078 5.25 5.0625 5.25H6.1875C6.49922 5.25 6.75 5.50078 6.75 5.8125V7.875H6.9375C7.24922 7.875 7.5 8.12578 7.5 8.4375C7.5 8.74922 7.24922 9 6.9375 9H5.0625C4.75078 9 4.5 8.74922 4.5 8.4375C4.5 8.12578 4.75078 7.875 5.0625 7.875ZM6 3C6.19891 3 6.38968 3.07902 6.53033 3.21967C6.67098 3.36032 6.75 3.55109 6.75 3.75C6.75 3.94891 6.67098 4.13968 6.53033 4.28033C6.38968 4.42098 6.19891 4.5 6 4.5C5.80109 4.5 5.61032 4.42098 5.46967 4.28033C5.32902 4.13968 5.25 3.94891 5.25 3.75C5.25 3.55109 5.32902 3.36032 5.46967 3.21967C5.61032 3.07902 5.80109 3 6 3Z"
                fill="#e9636e"
              />
            </svg>
          </div>
          <div className="flex items-center justify-between w-full pl-1">
            <span className="paytoneOne text-sm font-bold text-[#332d37]">
              Sản phẩm gợi ý cho bạn
            </span>
          </div>
        </div>
        <div className="flex items-center px-2 pt-1 justify-between overflow-x-auto no-scrollbar">
          {!!dataProduct &&
            !!dataProduct.length &&
            dataProduct.map((item, i) => {
              return (
                <div key={i} className="w-[calc(100%/3)] shrink-0">
                  <ItemProductShop
                    item={item}
                    onClickPlus={(event) => {
                      event.stopPropagation();
                      setItemProductChoose(item);
                      refModalAddProduct.current?.setShowModalAddProduct(true);
                    }}
                  />
                </div>
              );
            })}
        </div>
        {/*Giải đáp thắc mắc */}
        <div className="pt-5 px-2 w-full h-auto flex flex-col items-center">
          <div className="bg-[#0e1c7b] w-full h-8 rounded-t-lg flex items-center pl-3">
            <svg
              className=""
              width="14"
              height="14"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12ZM5.0625 7.875H5.625V6.375H5.0625C4.75078 6.375 4.5 6.12422 4.5 5.8125C4.5 5.50078 4.75078 5.25 5.0625 5.25H6.1875C6.49922 5.25 6.75 5.50078 6.75 5.8125V7.875H6.9375C7.24922 7.875 7.5 8.12578 7.5 8.4375C7.5 8.74922 7.24922 9 6.9375 9H5.0625C4.75078 9 4.5 8.74922 4.5 8.4375C4.5 8.12578 4.75078 7.875 5.0625 7.875ZM6 3C6.19891 3 6.38968 3.07902 6.53033 3.21967C6.67098 3.36032 6.75 3.55109 6.75 3.75C6.75 3.94891 6.67098 4.13968 6.53033 4.28033C6.38968 4.42098 6.19891 4.5 6 4.5C5.80109 4.5 5.61032 4.42098 5.46967 4.28033C5.32902 4.13968 5.25 3.94891 5.25 3.75C5.25 3.55109 5.32902 3.36032 5.46967 3.21967C5.61032 3.07902 5.80109 3 6 3Z"
                fill="#e9636e"
              />
            </svg>
            <span className="text-xs font-['Open_Sans'] font-semibold uppercase text-white pl-2">
              Giải đáp thắc mắc cho bạn
            </span>
          </div>
          <div className="bg-white w-full">
            <div className="p-4 relative">
              <textarea
                value={contentQues}
                cols="30"
                rows="10"
                className="resize-none no-scrollbar w-full h-auto border-2 border-[#1C58D9] outline-none text-[#06164B] openSans text-sm font-semibold px-4 py-4"
                onChange={(e) => setContentQues(e.target.value)}
              />
              <span className="absolute text-[#636D79] bg-white text-sm top-[2%] left-9">
                Nội dung câu hỏi & vấn đề cần giải đáp
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center py-2 px-4 bg-[#f4f2f2] w-full rounded-b-lg">
            <div
              className="flex justify-center bg-white items-center rounded-lg w-36 h-10 border-2 border-[#4FB87C]"
              onClick={() => setVisible(true)}
            >
              <img
                src={Images.iconDoctor}
                className="w-[30px] h-[30px] object-contain"
              />
              <span className="text-[#4FB87C] text-base font-semibold">
                Gửi bác sĩ
              </span>
            </div>
            <div
              className="flex justify-center bg-white items-center rounded-lg w-36 h-10 border-2 border-[#005891]"
              onClick={handleSenQuesGPT}
            >
              <img
                src={Images.iconChatGpt}
                className="w-[30px] h-[30px] object-contain"
              />
              <span className="text-[#005891] text-base font-semibold">
                Gửi chat GPT
              </span>
            </div>
          </div>
        </div>
        {/*Chat gpt trả lời */}
        {chatAI && (
          <div className="px-4">
            <div className="pt-3 flex items-center">
              <span className="text-sm text-[#2a258a] font-semibold">
                {" "}
                Câu hỏi :
              </span>
            </div>
            <div className="flex pl-2">
              <span className="text-sm font-medium text-black">
                {contentQuesGpt}
              </span>
            </div>
            <div className="pt-3 flex items-center">
              <span className="text-sm text-[#2a258a] font-semibold">
                Bot GPT
              </span>
              <img src={Images.iconChatGpt} className="px-2" />
              <span className="text-sm text-[#2a258a] font-semibold">: </span>
            </div>
            <div className="flex pl-2">
              {loadingGPT && (
                <span className="text-sm font-medium text-[#31fa4f]">
                  Vui lòng đợi kết quả...
                </span>
              )}
              {loadingFalse && (
                <span className="text-sm font-medium text-[#ff3d3d]">
                  Vui lòng thử lại...
                </span>
              )}
              <span className="text-sm font-medium text-black">{dataGPT}</span>
            </div>
          </div>
        )}
        <Modal
          visible={visible}
          title="Vui lòng chọn 1 danh mục"
          onClose={() => {
            setVisible(false);
          }}
        >
          <div className="grid justify-center items-center h-40 overflow-x-auto no-scrollbar">
            {!!categoryQues &&
              !!categoryQues.length &&
              categoryQues.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="py-1"
                    onClick={() => {
                      setSolutionId(item?.id);
                    }}
                  >
                    <div
                      className={
                        solutionId === item?.id
                          ? "bg-[#51C6F2] rounded-lg px-3 flex items-center justify-center"
                          : " px-3 flex items-center justify-center"
                      }
                    >
                      <span className="text-[#06164B] text-sm font-semibold">
                        {item?.content}
                      </span>
                    </div>
                    <div className="w-auto h-[0.5px] mt-1 bg-black"></div>
                  </div>
                );
              })}
          </div>
          <div className="w-full mt-4 flex items-center justify-center">
            <div
              className="h-[30px] w-[70%] flex items-center justify-center rounded-lg bg-[#51C6F2]"
              onClick={handleSendQues}
            >
              <span className="text-base text-white font-semibold">Gửi</span>
            </div>
          </div>
        </Modal>
      </Page>
      {showAlert === true ? (
        <ModaNotify
          description={description}
          setPopupVisible={setShowAlert}
          popupVisible={showAlert}
        />
      ) : null}
      <ModalAddProduct ref={refModalAddProduct} item={itemProductChoose} />
    </div>
  );
};

export default Profile;
