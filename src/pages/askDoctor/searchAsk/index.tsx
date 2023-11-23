import React from "react";
import { Box, Page } from "zmp-ui";
import { useLocation } from "react-router-dom";
import ItemAsk from "../itemAsk";
import Header from "../../../components/header";
import askDoctorApi from "../../../apis/askDoctor.apis";
import { ItemQuestion } from "../../../types/askDoctor.type";
import SpinLoad from "../../../components/spinLoad";

const SearchAsk = () => {
  const location = useLocation();
  const item = location.state;
  const [keySearch, setKeySearch] = React.useState("");
  const [dataQues, setData] = React.useState<ItemQuestion[]>([]);
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const [lastPage, setLastpage] = React.useState(1);
  const listInnerRef = React.useRef(null);
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (Math.ceil(scrollTop) + clientHeight >= scrollHeight) {
        loadmore();
      }
    }
  };
  const getDataQuesCate = async () => {
    setIsLoading(true);
    let formData = new FormData();
    {
      !!keySearch.length && formData.append("key_search", keySearch);
    }
    const res = await askDoctorApi.getQuesByCategory(item?.id, page, formData);
    if (res.status) {
      const newData = res.data.data.data.map((item) => {
        return {
          ...item,
          active: false,
        };
      });
      setIsLoading(false);
      setData(newData);
      setLastpage(res.data.data.last_page);
    } else {
      alert("Có lỗi xảy ra");
    }
  };
  const loadmore = async () => {
    if (page >= lastPage) {
      return;
    } else {
      try {
        setIsLoading(true);
        const currentPage = page + 1;
        setPage(currentPage);
        let formData = new FormData();
        {
          !!keySearch.length && formData.append("key_search", keySearch);
        }
        const res = await askDoctorApi.getQuesByCategory(
          item?.id,
          currentPage,
          formData
        );
        if (res.status) {
          const newData = res.data.data.data.map((item) => {
            return {
              ...item,
              active: false,
            };
          });
          setData([...dataQues, ...newData]);
        } else {
          alert("Có lỗi xảy ra");
        }
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };
  React.useEffect(() => {
    getDataQuesCate();
  }, []);
  // const findContentById = (dataList, categoryId) => {
  //   for (const data of dataList) {
  //     if (data.info_category?.id === categoryId && data.info_category) {
  //       return data.info_category.content;
  //     }
  //   }
  //   return "";
  // };
  // const content = findContentById(dataQues, id);

  return (
    <Box className="h-full w-full p-0 m-0">
      <Header title={item?.content} />
      <div className="flex justify-between items-center px-2 py-2 bg-[#E9F6FF]">
        <input
          className="w-[70%] h-9 text-[#828282] outline-none text-[13px] pl-2 border border-[#bac1c3] rounded-lg"
          placeholder="Nhập nội dung câu hỏi cần tìm..."
          value={keySearch}
          onChange={(e) => setKeySearch(e.target.value)}
        />
        <div
          className="bg-main flex items-center justify-center rounded-lg w-[25%] h-9"
          onClick={() => {
            getDataQuesCate();
            setKeySearch("");
          }}
        >
          <span className="text-black text-xs">Tìm kiếm</span>
        </div>
      </div>
      <Page
        ref={listInnerRef}
        onScroll={onScroll}
        hideScrollbar
        className="w-full h-full pb-40 bg-[#E9F6FF]"
      >
        {!!dataQues &&
          !!dataQues.length &&
          dataQues.map((item, index) => {
            return <ItemAsk item={item} key={index} infoDoctor={true} img />;
          })}
        {isLoading && <SpinLoad />}
      </Page>
    </Box>
  );
};

export default SearchAsk;
