import React from "react";
import { Box, Page } from "zmp-ui";
import Header from "../../../components/header";
import { useLocation, useNavigate } from "react-router-dom";
import handbookApi from "../../../apis/handbook.apis";
import { CategoryHandbookDetail } from "../../../types/handbook.type";
import {
  API_URL_IMAGE,
  API_URL_IMAGE_LINEABON,
} from "../../../constants/utils";

const ItemCateHandBook = ({ img, contentTitle, content, onClick }) => {
  return (
    <div
      className="w-full h-24 flex rounded-lg outline outline-[#eae6e6] mb-4"
      onClick={onClick}
    >
      <img src={img} className="w-[117px] h-24 rounded-lg object-cover" />
      <div className="pt-3 px-3">
        <div className="flex items-center justify-between">
          <span className="text-[13px] w-[70%] text-[#828282] line-clamp-1">
            {contentTitle}
          </span>
          <span className="text-[#626262] w-[20%] text-[10px] font-semibold">
            {`Chi tiết >`}
          </span>
        </div>
        <div
          className="pt-2 line-clamp-2 text-[13px] font-semibold text-black max-w-[240px]"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
};

const CategoryHandBook = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state;
  const [data, setData] = React.useState<CategoryHandbookDetail[]>([]);
  const getData = async () => {
    const res = await handbookApi.getDetailHanbook(item?.id);
    if (res.status) {
      setData(res.data.data);
    } else {
      alert("Có lỗi xảy ra");
    }
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <Box className="h-screen p-0 m-0">
      <Header title={item.title} />
      <Page hideScrollbar className="w-full h-full pb-40 bg-white px-2 py-3">
        <div className="w-full h-auto">
          <img
            src={`${API_URL_IMAGE_LINEABON}${item.banner}`}
            className="w-full h-[173px] object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-center items-center pt-4">
          {!!data &&
            !!data.length &&
            data.map((detail, index) => {
              return (
                <ItemCateHandBook
                  key={index}
                  img={`${API_URL_IMAGE_LINEABON}${detail.image}`}
                  content={detail.title}
                  contentTitle={item.title}
                  onClick={() =>
                    navigate(`/detailHandbook/${detail.id}`, {
                      state: { detail, item },
                    })
                  }
                />
              );
            })}
        </div>
      </Page>
    </Box>
  );
};
export default CategoryHandBook;
