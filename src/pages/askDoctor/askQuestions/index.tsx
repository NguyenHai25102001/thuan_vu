import React from "react";
import { Input, Modal, Page, useNavigate } from "zmp-ui";
import HeaderMB from "../header";
import "./styles.css";
import Images from "../../../static";
import { chooseImage } from "zmp-sdk/apis";
import askDoctorApi from "../../../apis/askDoctor.apis";
import { CategoryQuestion } from "../../../types/askDoctor.type";
import { getAccessTokenFromLS } from "../../../utils/auth";
import axios from "axios";
import { API_URL } from "../../../constants/utils";
import ModaNotify from "../../../components/modaNotify";

// Định nghĩa lớp con kế thừa từ FilePropertyBag và thêm thuộc tính path
interface FilePropertyBagWithPath extends FilePropertyBag {
  path: string;
}

// Hàm utility để tạo File từ Blob và FilePropertyBagWithPath
function createFileFromBlob(
  blob: Blob,
  fileName: string,
  propertyBag: FilePropertyBagWithPath
): File {
  return new File([blob], fileName, propertyBag);
}

const AskQuestions = () => {
  const [data, setData] = React.useState<CategoryQuestion[]>([]);
  const [showAlert, setShowAlert] = React.useState(false);
  const [description, setDescription] = React.useState("");
  const navigate = useNavigate();
  const [chatAI, setChatAI] = React.useState(false);
  const [dataGPT, setDataGPT] = React.useState("");
  const [popupVisible, setPopupVisible] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [loadingGPT, setLoadingGPT] = React.useState(false);
  const [loadingFalse, setLoadingFalse] = React.useState(false);
  const [solution, setSolution] = React.useState("");
  const [solutionId, setSolutionId] = React.useState<number>();
  const [contentQues, setContentQues] = React.useState("");
  const [fileImg, setFileImg] = React.useState<File>();
  const img = React.useMemo(() => {
    return fileImg ? URL.createObjectURL(fileImg) : "";
  }, [fileImg]);
  const refInputImage = React.useRef<HTMLInputElement>(null);
  const handleUpload = () => {
    refInputImage.current?.click();
  };
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileFromLocal = event.target.files?.[0];
    setFileImg(fileFromLocal);
  };
  const getData = async () => {
    const res = await askDoctorApi.getAllCategoryQues();
    if (res.status) {
      setData(res.data.data);
    } else {
      alert("Có lỗi xảy ra");
    }
  };
  React.useEffect(() => {
    getData();
  }, []);
  const senData = async () => {
    if (!solution) {
      setDescription("Hãy chọn 1 danh mục câu hỏi");
      setShowAlert(true);
      return;
    }
    if (!contentQues) {
      setDescription("Vui lòng nhập nội dung câu hỏi");
      setShowAlert(true);
    }
    try {
      let formData = new FormData();
      formData.append("id_category_question", String(solutionId));
      formData.append("content_question", contentQues);
      formData.append("image", fileImg);
      // const res = await askDoctorApi.createQuestion(formData);
      const token = getAccessTokenFromLS();
      const res = await axios({
        url: `${API_URL}/api/question/create`,
        method: "post",
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status) {
        setVisible(true);
      } else {
        setDescription(res.data.message);
        setShowAlert(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const sentDataGpt = async () => {
    if (!contentQues) {
      setDescription("Vui lòng nhập nội dung câu hỏi");
      setShowAlert(true);
    }
    try {
      let formData = new FormData();
      formData.append("content", contentQues);
      setLoadingFalse(false);
      setLoadingGPT(true);
      const res = await askDoctorApi.chatGPTQues(formData);
      if (res.status) {
        setDataGPT(res.data.data);
        setContentQues("");
        setLoadingGPT(false);
      } else {
        setLoadingFalse(true);
        alert(res.data.message);
      }
    } catch (error) {
      setLoadingFalse(true);
      console.log(error);
    } finally {
      setLoadingGPT(false);
    }
  };
  const handleSenData = () => {
    if (chatAI) {
      setDescription("Quay lại chế độ đặt câu hỏi với bác sĩ");
      setShowAlert(true);
      setChatAI(false);
      setDataGPT("");
      setContentQues("");
    } else {
      senData();
    }
  };
  const handleSenDataGPT = () => {
    if (chatAI) {
      setChatAI(true);
      sentDataGpt();
      setDataGPT("");
    } else {
      sentDataGpt();
      setChatAI(true);
      setDataGPT("");
    }
  };
  const handleNavigate = () => {
    setSolution("");
    setSolutionId();
    if (chatAI) {
      setChatAI(false);
      setDataGPT("");
      setContentQues("");
    } else {
      navigate(-1);
      setDataGPT("");
    }
  };

  return (
    <Page className="h-screen p-0 m-0" hideScrollbar>
      <div className="overflow-y-hidden sticky top-0">
        <HeaderMB
          onClick={handleNavigate}
          title="Đặt câu hỏi và hỗ trợ tư vấn"
        />
      </div>
      <Page hideScrollbar className="w-full h-full bg-white">
        <div className="py-3 px-2">
          {/* <div className="my-2">
            <input
              className="hidden"
              type="file"
              accept=".jpg,.jpeg,.png"
              ref={refInputImage}
              onChange={onFileChange}
            />
            <img
              src={preViewImage || Images.UploadImage}
              className="w-20 h-20 object-cover"
            />
            <div onClick={handleUpload} className="py-2 bg-red-600">
              uploaddddd
            </div>
          </div> */}
          {/* chủ đề giải đáp */}
          {!chatAI && (
            <>
              <div className="flex items-center">
                <span className="text-[#636D79] text-sm">Chủ đề giải đáp</span>
                <svg
                  className="pl-1"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M14.3749 5.62512H9.43431L7.79744 0.529497C7.77689 0.466976 7.73712 0.412538 7.68381 0.373945C7.6305 0.335353 7.56637 0.314575 7.50056 0.314575C7.43475 0.314575 7.37062 0.335353 7.31731 0.373945C7.264 0.412538 7.22423 0.466976 7.20369 0.529497L5.56556 5.62512H0.624935C0.559739 5.62511 0.496171 5.64549 0.443134 5.68341C0.390097 5.72132 0.350247 5.77488 0.329166 5.83657C0.308084 5.89827 0.306827 5.96501 0.325569 6.02746C0.344311 6.0899 0.382115 6.14492 0.433685 6.18481L4.37494 9.23575L2.73494 14.2786C2.71453 14.3413 2.71453 14.4089 2.73492 14.4717C2.75532 14.5345 2.79506 14.5892 2.84846 14.628C2.90186 14.6668 2.96617 14.6877 3.03218 14.6877C3.09818 14.6877 3.16248 14.6667 3.21587 14.6279L7.49994 11.5157L11.784 14.6279C11.8374 14.6667 11.9017 14.6877 11.9677 14.6877C12.0337 14.6877 12.098 14.6668 12.1514 14.628C12.2048 14.5892 12.2446 14.5345 12.2649 14.4717C12.2853 14.4089 12.2853 14.3413 12.2649 14.2786L10.6249 9.23575L14.5649 6.18481C14.6164 6.14499 14.6542 6.09008 14.673 6.02776C14.6917 5.96543 14.6906 5.8988 14.6697 5.83716C14.6487 5.77553 14.6091 5.72196 14.5563 5.68395C14.5034 5.64594 14.44 5.62537 14.3749 5.62512Z"
                    fill="url(#paint0_linear_783_3057)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_783_3057"
                      x1="0.277117"
                      y1="13.2096"
                      x2="19.2323"
                      y2="9.95016"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3DFFC8" />
                      <stop offset="0.1209" stopColor="#40F6CF" />
                      <stop offset="0.3219" stopColor="#49DCE1" />
                      <stop offset="0.5771" stopColor="#57B3FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="mt-2 flex justify-between items-center"
                onClick={() => setPopupVisible(true)}
              >
                <input
                  value={solution}
                  className="openSans border border-[#CCD3DC] w-full outline-none rounded-l-lg pl-2 h-10 text-[#06164B] text-sm font-semibold placeholder:text-[#06164B]"
                  placeholder="Vui lòng chọn danh mục câu hỏi"
                  readOnly
                />
                <div className="w-10 h-10 rounded-r-lg bg-[#CCD3DC] flex items-center justify-center">
                  <svg width="13" height="8" viewBox="0 0 13 8" fill="none">
                    <path
                      d="M7.21368 7.27286C6.8217 7.67223 6.1783 7.67223 5.78632 7.27286L0.807794 2.20048C0.186888 1.56786 0.635061 0.5 1.52147 0.5L11.4785 0.500001C12.3649 0.500001 12.8131 1.56786 12.1922 2.20047L7.21368 7.27286Z"
                      fill="#99A0A9"
                    />
                  </svg>
                </div>
              </div>
            </>
          )}
          {/* nội dung câu hỏi */}
          <div className="flex items-center pt-2">
            <span className="text-[#636D79] text-sm">
              Nội dung câu hỏi & vấn đề cần giải đáp
            </span>
            <svg
              className="pl-1"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M14.3749 5.62512H9.43431L7.79744 0.529497C7.77689 0.466976 7.73712 0.412538 7.68381 0.373945C7.6305 0.335353 7.56637 0.314575 7.50056 0.314575C7.43475 0.314575 7.37062 0.335353 7.31731 0.373945C7.264 0.412538 7.22423 0.466976 7.20369 0.529497L5.56556 5.62512H0.624935C0.559739 5.62511 0.496171 5.64549 0.443134 5.68341C0.390097 5.72132 0.350247 5.77488 0.329166 5.83657C0.308084 5.89827 0.306827 5.96501 0.325569 6.02746C0.344311 6.0899 0.382115 6.14492 0.433685 6.18481L4.37494 9.23575L2.73494 14.2786C2.71453 14.3413 2.71453 14.4089 2.73492 14.4717C2.75532 14.5345 2.79506 14.5892 2.84846 14.628C2.90186 14.6668 2.96617 14.6877 3.03218 14.6877C3.09818 14.6877 3.16248 14.6667 3.21587 14.6279L7.49994 11.5157L11.784 14.6279C11.8374 14.6667 11.9017 14.6877 11.9677 14.6877C12.0337 14.6877 12.098 14.6668 12.1514 14.628C12.2048 14.5892 12.2446 14.5345 12.2649 14.4717C12.2853 14.4089 12.2853 14.3413 12.2649 14.2786L10.6249 9.23575L14.5649 6.18481C14.6164 6.14499 14.6542 6.09008 14.673 6.02776C14.6917 5.96543 14.6906 5.8988 14.6697 5.83716C14.6487 5.77553 14.6091 5.72196 14.5563 5.68395C14.5034 5.64594 14.44 5.62537 14.3749 5.62512Z"
                fill="url(#paint0_linear_783_3057)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_783_3057"
                  x1="0.277117"
                  y1="13.2096"
                  x2="19.2323"
                  y2="9.95016"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3DFFC8" />
                  <stop offset="0.1209" stopColor="#40F6CF" />
                  <stop offset="0.3219" stopColor="#49DCE1" />
                  <stop offset="0.5771" stopColor="#57B3FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="border border-[#CCD3DC] my-2">
            <Input.TextArea
              style={{
                color: "#06164B",
                fontFamily: "Open Sans",
                fontWeight: 700,
              }}
              className="bg-red-500 py-0"
              value={contentQues}
              onChange={(e) => setContentQues(e.target.value)}
            />
          </div>
          {/*Caht GPt trả lời */}
          {chatAI && (
            <>
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
                <span className="text-sm font-medium text-black">
                  {dataGPT}
                </span>
              </div>
            </>
          )}
          {/*hình ảnh */}
          {!chatAI && (
            <>
              <span className="text-sm text-[#636D79]">
                Hình ảnh cung cấp ( nếu có )
              </span>
              <div className={img ? "flex items-center justify-center" : ""}>
                {img ? (
                  <div className="relative">
                    <input
                      className="hidden"
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      ref={refInputImage}
                      onChange={onFileChange}
                    />
                    <div onClick={handleUpload}>
                      <img
                        src={img}
                        className="w-auto h-auto max-w-full max-h-[250px] object-contain pt-2"
                      />
                    </div>
                    {!!img && (
                      <div
                        onClick={() => setFileImg("")}
                        className="absolute w-[20px] h-[20px] rounded items-center justify-center flex bg-[#00000080] top-[4%] right-[0%]"
                      >
                        <img src={Images.iconX} className="w-[10px] h-[10px]" />
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <input
                      className="hidden"
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      ref={refInputImage}
                      onChange={onFileChange}
                    />
                    <div onClick={handleUpload}>
                      <img
                        src={Images.UploadImage}
                        className="w-[120px] h-[120px] object-contain pt-2"
                      />
                    </div>
                  </>
                )}
              </div>
            </>
          )}
          <div className="fixed bottom-0 mb-14 left-0 right-0">
            <div className="flex justify-between items-center px-4 mt-48">
              <div
                className="bg-[#51C6F2] w-32 h-10 rounded-lg flex justify-center items-center"
                onClick={handleSenData}
              >
                <span className="roboto text-base font-semibold text-white text-center">
                  {chatAI ? "Quay Lại" : "Gửi câu hỏi"}
                </span>
              </div>
              <div
                className="bg-[#108646] w-32 h-10 rounded-lg flex justify-center items-center"
                onClick={handleSenDataGPT}
              >
                <span className="roboto text-base font-semibold text-white text-center">
                  Gửi chat GPT
                </span>
              </div>
            </div>
          </div>
        </div>
        <Modal
          visible={popupVisible}
          // title="Vui lòng chọn 1 danh mục"
          onClose={() => {
            setPopupVisible(false);
          }}
          modalClassName="modal-cus2"
        >
          <div className="grid justify-center items-center h-40 overflow-x-auto no-scrollbar">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="py-1"
                  onClick={() => {
                    setSolution(item?.content);
                    setSolutionId(item?.id);
                    setPopupVisible(false);
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
              onClick={() => {
                setPopupVisible(false);
              }}
            >
              <span className="text-base text-white font-semibold">Đóng</span>
            </div>
          </div>
        </Modal>
        <Modal
          visible={visible}
          title="Gửi câu hỏi thành công"
          // description="Vui lòng chọn"
          onClose={() => {
            setVisible(false);
            navigate("/askDoctor");
          }}
          // modalClassName="modal-cus"
        >
          <p className="text-xs text-center">Vui lòng lựa chọn</p>
          <div className="flex flex-col bg-white w-[100%] mt-2">
            <div className="w-full h-[1px] bg-slate-500"></div>
            <div
              onClick={() => {
                setChatAI(true);
                setVisible(false);
                sentDataGpt();
                setFileImg("");
                setSolution("");
              }}
              className="w-full h-[30px] rounded-md flex items-center justify-center"
            >
              <span className="font-normal text-sm text-[#51C6F2] roboto">
                Xem đáp án ngay bằng chat GPT
              </span>
            </div>
            <div className="w-full h-[1px] bg-slate-500"></div>
            <div
              onClick={() => {
                navigate("/askDoctor");
                setDataGPT("");
              }}
              className="w-full h-[30px] rounded-md items-center flex justify-center"
            >
              <span className="font-semibold text-sm text-[#51C6F2] roboto">
                Trở về
              </span>
            </div>
          </div>
        </Modal>
        {showAlert === true ? (
          <ModaNotify
            description={description}
            setPopupVisible={setShowAlert}
            popupVisible={showAlert}
          />
        ) : null}
      </Page>
    </Page>
  );
};

export default AskQuestions;
