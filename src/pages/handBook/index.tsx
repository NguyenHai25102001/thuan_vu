import React from "react";
import { Box, Input, Page, useNavigate } from "zmp-ui";
import Header from "../../components/header";
import Images from "../../static";
import "./styles.css";
import path from "../../constants/path";
import handbookApi from "../../apis/handbook.apis";
import { API_URL_IMAGE, API_URL_IMAGE_LINEABON } from "../../constants/utils";
import { CategoryHandbook } from "../../types/handbook.type";
import LoadingPage from "../loadingScreen";
const HandBook = () => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const [lastPage, setLastPage] = React.useState(1);
  const listInnerRef = React.useRef(null);
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (Math.round(scrollTop + clientHeight) === scrollHeight) {
        loadmore();
      }
    }
  };
  const [data, setData] = React.useState<CategoryHandbook[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [key_search, setKey_search] = React.useState<String>("");
  const getDataSearch = async (key_search) => {
    try {
      setLoading(true);
      const res = await handbookApi.getCateHanbookSearch(key_search);
      if (res.status) {
        setData(res?.data?.data);
      } else {
        alert("Có lỗi xảy ra");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const getDataHanbook = async () => {
    try {
      setLoading(true);
      const res = await handbookApi.getCateHanbook(page);
      if (res.status) {
        setLastPage(res?.data?.data?.last_page);
        setData(res?.data?.data?.data);
      } else {
        alert("Có lỗi xảy ra");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const loadmore = async () => {
    if (page >= lastPage) {
      return;
    } else {
      try {
        let currentPage = page + 1;
        setPage(currentPage);
        const res = await handbookApi.getCateHanbook(currentPage);
        if (res.data.status) {
          setData([...data, ...res?.data?.data?.data]);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  React.useEffect(() => {
    getDataHanbook();
  }, []);
  React.useEffect(() => {
    if (key_search.trim() !== "") {
      getDataSearch(key_search);
    } else {
      getDataHanbook();
    }
  }, [key_search]);
  return (
    <Box className="h-screen p-0 m-0 relative">
      <Header title="Cẩm nang" />
      <Page
        hideScrollbar
        className="w-full h-full pb-40 bg-white px-3 py-5 "
        ref={listInnerRef}
        onScroll={onScroll}
      >
        <Input.Search
          label="Label"
          helperText="Helper text"
          onSearch={(text) => setKey_search(text)}
        />
        <div className="grid gap-4 grid-cols-2">
          {!!data &&
            !!data.length &&
            data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="pt-2"
                  onClick={() =>
                    navigate(`${path.categoryHandBook}`, {
                      state: item,
                    })
                  }
                >
                  <div className="mx-auto shadow rounded-lg pb-2 flex flex-col ">
                    <img
                      src={`${API_URL_IMAGE_LINEABON}${item.banner}`}
                      className="object-cover h-[101px] mb-[5px] w-full rounded-lg"
                    />
                    <p className="text-black mx-1 my-1 text-xs leading-4 font-['Lohit_Sans'] line-clamp-1 self-start">
                      {item.title}
                    </p>
                    <p className="text-[#376464]  text-[10px] leading-[16px] mx-1 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center ">
                      <div className="flex items-center ml-2">
                        <img
                          src={Images.iconEyes}
                          className="w-[11px] h-2 object-contain"
                        />
                        <span className="text-black text-[10px]">
                          Lượt xem: {item?.view}
                        </span>
                      </div>
                      <div className="bg-[#3F5F5B] mr-1 h-[10px] w-[10px] rounded-full flex items-center justify-center">
                        <img
                          src={Images.iconArrowRightWhite}
                          className="w-[4px] h-[4px] object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        {data.length === 0 && (
          <div className="w-full">
            <p className="text-main text-base text-center ">
              Không tìm thấy kết quả cần tìm kiếm
            </p>
          </div>
        )}
      </Page>
      {loading && <LoadingPage />}
    </Box>
  );
};

export default HandBook;
