import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/header";
import { useLocation, useNavigate } from "react-router-dom";
import API from "../../api";
import axios from "axios";
import { getAccessTokenFromLS } from "../../utils/auth";
import { Page } from "zmp-ui";
import path from "../../constants/path";
import SpinLoad from "../../components/spinLoad";
interface IListBlogs {
  age: number;
  category_id: number;
  description: string;
  id: number;
  image: string;
  publish: string;
  title: string;
}
const ListBlog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const idCate = location?.state?.id;
  const age = location?.state?.age;
  const titleCate = location?.state?.title;
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [listBlogs, setListBlogs] = useState<IListBlogs[]>([]);
  const [lastPage, setLastPage] = React.useState(1);
  const listInnerRef = React.useRef(null);
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (Math.ceil(scrollTop) + clientHeight >= scrollHeight) {
        loadmore();
      }
    }
  };
  const getListBlogs = async () => {
    try {
      setLoading(true);
      const token = getAccessTokenFromLS();
      const res = await axios({
        url: API.getBlogs(age, idCate, page),
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if (res?.data?.data) {
        setLoading(false);
        setListBlogs(res?.data?.data.blogs);
        setLastPage(res.data.data.total_page);
      } else {
        setLoading(true);
      }
    } catch (error) {
      setLoading(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const loadmore = async () => {
    if (page >= lastPage) {
      return;
    } else {
      try {
        const token = getAccessTokenFromLS();
        const currentPage = page + 1;
        setPage(currentPage);
        const res = await axios({
          url: API.getBlogs(age, idCate, currentPage),
          method: "get",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        if (res.status) {
          setListBlogs([...listBlogs, ...res.data?.data?.blogs]);
        } else {
          alert("Có lỗi xảy ra!!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getListBlogs();
  }, [location]);
  return (
    <div className="w-screen h-screen bg-[#faf7f7]">
      <Header title={titleCate} />
      <Page
        className="w-full h-full pb-32 pt-4 px-2"
        hideScrollbar
        ref={listInnerRef}
        onScroll={onScroll}
      >
        {!!listBlogs &&
          !!listBlogs.length &&
          listBlogs.map((item, i) => {
            return (
              <div
                className="bg-white rounded-xl w-full mb-4 pb-4"
                key={i}
                onClick={() =>
                  navigate(`${path.detailBlog}`, { state: item.id })
                }
              >
                <img
                  src={`${item.image}`}
                  className="w-[100%] h-[173px] object-cover rounded-xl"
                />
                <div className="flex items-center justify-normal px-2 pt-1 mt-1">
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
                    <span className="text-xs text-[#828282] w-[70%] line-clamp-1">
                      {item.title}
                    </span>
                    <span className="text-right text-xs text-[#626262]">
                      Chi tiết
                      {"  "}
                      &#62;
                    </span>
                  </div>
                </div>
                <p className="text-xs font-bold text-[#333333] line-clamp-2 px-2 mt-2">
                  {item.description}
                </p>
              </div>
            );
          })}

        {loading && <SpinLoad />}
        {listBlogs?.length === 0 && (
          <p className="text-base text-center font-semibold">
            Danh mục không có bài viết
          </p>
        )}
      </Page>
    </div>
  );
};

export default ListBlog;
