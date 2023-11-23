import React, { useEffect, useState } from "react";
import { API_URL_IMAGE } from "../../constants/utils";
import path from "../../constants/path";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/header";
import { Page } from "zmp-ui";
import { getAccessTokenFromLS } from "../../utils/auth";
import axios from "axios";
import API from "../../api";

const DetailBlog = () => {
  const location = useLocation();

  const [detailBlog, setDetailBlog] = useState();
  const getDetailBog = async () => {
    try {
      const token = getAccessTokenFromLS();
      const res = await axios({
        url: API.getDetailBlog(location.state),
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if (res?.data?.data) {
        setDetailBlog(res?.data?.data);
      } else {
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
  };
  useEffect(() => {
    getDetailBog();
  }, [location.state]);

  return (
    <div className="w-screen h-screen">
      <Header title={detailBlog?.title} />
      {!!detailBlog && (
        <Page className="w-full h-full px-2 pt-4 pb-40" hideScrollbar>
          <img
            src={detailBlog?.image}
            className="w-full h-[173px] rounded-xl object-cover"
          />
          <div className="pt-5">
            <p className="text-[13px] text-black font-semibold">
              {detailBlog.title}
            </p>
            <p
              className="text-[13px] text-[#828282] leading-[18px] pt-2"
              dangerouslySetInnerHTML={{ __html: detailBlog?.content }}
            ></p>
          </div>
        </Page>
      )}
    </div>
  );
};

export default DetailBlog;
