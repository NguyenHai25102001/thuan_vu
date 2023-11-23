import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "zmp-ui";
import { AppContext } from "../../contexts/app.context";
import ModalCategory from "./modalCategory";
import { API_URL } from "../../constants/utils";
import { getAccessTokenFromLS } from "../../utils/auth";
import axios from "axios";
import SpinLoad from "../../components/spinLoad";
import ModaNotify from "../../components/modaNotify";
export default function UploadPost() {
  const navigate = useNavigate();
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { selectedBaby } = useContext(AppContext);
  const refModal = React.useRef(null);
  const [itemCategory, setItemCategory] = React.useState();
  const [fileImg, setFileImg] = React.useState<File>();
  const [showAlert, setShowAlert] = React.useState(false);
  const [description, setDescription] = React.useState("");
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
  const uploadPost = async () => {
    if (title.trim() === "") {
      setDescription("Hãy nhập tiêu đề bài đăng");
      setShowAlert(true);
    } else if (content.trim() === "") {
      setDescription("Hãy nhập nội dung bài đăng");
      setShowAlert(true);
    } else if (!itemCategory) {
      setDescription("Hãy chọn danh mục");
      setShowAlert(true);
    } else if (!fileImg) {
      setDescription("Hãy chọn ảnh");
      setShowAlert(true);
    } else {
      try {
        setLoading(true);
        const token = getAccessTokenFromLS();
        let formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("category_id", itemCategory?.id);
        // params.image.forEach((item) => {
        formData.append("img[]", fileImg);
        const res = await axios({
          url: `${API_URL}/api/social/create-new`,
          method: "post",
          data: formData,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        if (res.data.code === 200) {
          setDescription("Đăng tin thành công");
          setShowAlert(true);
          navigate(-1);
        } else {
          setDescription("Đăng thất bại.Thử lại sau!");
          setShowAlert(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full h-full bg-white relative">
      <div className="pt-14 pb-4 bg-main">
        <div className="flex items-center ">
          <div
            className="w-9 h-9 bg-white ml-2 rounded-full flex items-center justify-center"
            onClick={() => navigate(-1)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.9999 11H6.41394L11.7069 5.70703L10.2929 4.29303L2.58594 12L10.2929 19.707L11.7069 18.293L6.41394 13H20.9999V11Z"
                fill="#333333"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full justify-between py-3 px-2">
        <p className="text-base text-[#333333] font-normal">Tạo bài viết</p>
        <div
          onClick={uploadPost}
          className="rounded-full px-6 py-1 bg-[#F26091] flex items-center justify-center"
        >
          <p className="text-base text-white font-normal">Đăng</p>
        </div>
      </div>
      <div className="bg-[#EBEBEB] h-2"></div>
      {loading === false ? (
        <Page className="w-full h-full no-scrollbar" hideScrollbar>
          <div className="flex items-center pt-3 pb-4 pl-2">
            <img
              src={selectedBaby?.image}
              className="w-9 h-9 object-cover mr-2 rounded-full"
            />
            <p className="text-xs text-[#828282] font-normal">
              {selectedBaby?.name}
            </p>
          </div>
          <div className="px-2">
            <input
              className="h-10 w-full border border-[#EBEBEB] px-2 py-0"
              placeholder="Nhập tiêu đề"
              value={title}
              onChange={(value) => setTitle(value.target.value)}
            />
            <textarea
              className="h-80 mt-3 w-full border border-[#EBEBEB] px-2 py-2"
              placeholder="Nhập nội dung"
              value={content}
              onChange={(value) => setContent(value.target.value)}
            />
          </div>
          <div className="px-2">
            <div className="flex items-center pt-3 pb-2" onClick={handleUpload}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7.49902 11C8.32745 11 8.99902 10.3284 8.99902 9.5C8.99902 8.67157 8.32745 8 7.49902 8C6.6706 8 5.99902 8.67157 5.99902 9.5C5.99902 10.3284 6.6706 11 7.49902 11Z"
                  fill="#52AC0E"
                />
                <path
                  d="M10.499 14L8.99902 12L5.99902 16H17.999L13.499 10L10.499 14Z"
                  fill="#52AC0E"
                />
                <path
                  d="M19.999 4H3.99902C2.89602 4 1.99902 4.897 1.99902 6V18C1.99902 19.103 2.89602 20 3.99902 20H19.999C21.102 20 21.999 19.103 21.999 18V6C21.999 4.897 21.102 4 19.999 4ZM3.99902 18V6H19.999L20.001 18H3.99902Z"
                  fill="#52AC0E"
                />
              </svg>
              <p className="text-xs text-[#828282] font-normal ml-2">
                Chọn ảnh
              </p>
            </div>
            <div className="h-[2px] bg-[#EBEBEB]"></div>
            <div
              className="flex items-center pt-3 pb-2"
              onClick={() => refModal.current?.setShowModal(true)}
            >
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path
                  d="M10.833 3.5625H4.83301C4.56779 3.5625 4.31344 3.66786 4.1259 3.85539C3.93836 4.04293 3.83301 4.29728 3.83301 4.5625V10.5625C3.83301 10.8277 3.93836 11.0821 4.1259 11.2696C4.31344 11.4571 4.56779 11.5625 4.83301 11.5625H10.833C11.0982 11.5625 11.3526 11.4571 11.5401 11.2696C11.7277 11.0821 11.833 10.8277 11.833 10.5625V4.5625C11.833 4.29728 11.7277 4.04293 11.5401 3.85539C11.3526 3.66786 11.0982 3.5625 10.833 3.5625ZM9.83301 9.5625H5.83301V5.5625H9.83301V9.5625ZM20.833 3.5625H14.833C14.5678 3.5625 14.3134 3.66786 14.1259 3.85539C13.9384 4.04293 13.833 4.29728 13.833 4.5625V10.5625C13.833 10.8277 13.9384 11.0821 14.1259 11.2696C14.3134 11.4571 14.5678 11.5625 14.833 11.5625H20.833C21.0982 11.5625 21.3526 11.4571 21.5401 11.2696C21.7277 11.0821 21.833 10.8277 21.833 10.5625V4.5625C21.833 4.29728 21.7277 4.04293 21.5401 3.85539C21.3526 3.66786 21.0982 3.5625 20.833 3.5625ZM19.833 9.5625H15.833V5.5625H19.833V9.5625ZM10.833 13.5625H4.83301C4.56779 13.5625 4.31344 13.6679 4.1259 13.8554C3.93836 14.0429 3.83301 14.2973 3.83301 14.5625V20.5625C3.83301 20.8277 3.93836 21.0821 4.1259 21.2696C4.31344 21.4571 4.56779 21.5625 4.83301 21.5625H10.833C11.0982 21.5625 11.3526 21.4571 11.5401 21.2696C11.7277 21.0821 11.833 20.8277 11.833 20.5625V14.5625C11.833 14.2973 11.7277 14.0429 11.5401 13.8554C11.3526 13.6679 11.0982 13.5625 10.833 13.5625ZM9.83301 19.5625H5.83301V15.5625H9.83301V19.5625ZM17.833 13.5625C15.627 13.5625 13.833 15.3565 13.833 17.5625C13.833 19.7685 15.627 21.5625 17.833 21.5625C20.039 21.5625 21.833 19.7685 21.833 17.5625C21.833 15.3565 20.039 13.5625 17.833 13.5625ZM17.833 19.5625C16.73 19.5625 15.833 18.6655 15.833 17.5625C15.833 16.4595 16.73 15.5625 17.833 15.5625C18.936 15.5625 19.833 16.4595 19.833 17.5625C19.833 18.6655 18.936 19.5625 17.833 19.5625Z"
                  fill="#e9636e"
                />
              </svg>
              <p className="text-xs text-[#828282] font-normal ml-2">
                {itemCategory ? itemCategory?.name : "Chọn danh mục"}
              </p>
            </div>
            <div className="h-[2px] bg-[#EBEBEB]"></div>
          </div>
          <div className="relative">
            <input
              className="hidden"
              type="file"
              accept=".jpg,.jpeg,.png"
              ref={refInputImage}
              onChange={onFileChange}
            />
            {/* <div onClick={handleUpload}>
            <img
              src={img}
              className="w-auto h-auto max-w-full max-h-[250px] object-contain pt-2"
            />
          </div> */}
            {!!img && (
              <div
                onClick={() => setFileImg("")}
                className="px-2 py-4 rounded bg-[#00000080]"
              >
                <img
                  src={img}
                  className="w-auto mx-auto h-auto max-w-full object-contain pt-2"
                />
                {/* <img src={Images.iconX} className="w-[10px] h-[10px]" /> */}
              </div>
            )}
          </div>
          <div className="h-60" />
        </Page>
      ) : (
        <SpinLoad />
      )}
      <ModalCategory
        ref={refModal}
        setItem={(value) => setItemCategory(value)}
      />
      {showAlert === true ? (
        <ModaNotify
          description={description}
          setPopupVisible={setShowAlert}
          popupVisible={showAlert}
        />
      ) : null}
    </div>
  );
}
