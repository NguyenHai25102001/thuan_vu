import React, { useContext } from "react";
import { Box, Page, useSnackbar } from "zmp-ui";
import Header from "../../../components/header";
import { QuestionProblem } from "../../../types/detailProblem.type";
import detailProblemApi from "../../../apis/detailProblem.apis";
import SpinLoad from "../../../components/spinLoad";
import { AppContext } from "../../../contexts/app.context";
import { showTimeAgo } from "../../../module";

const AllQuesProblem = () => {
  const { selectedBaby } = useContext(AppContext);
  const { openSnackbar } = useSnackbar();

  const [dataQues, setDataQues] = React.useState<QuestionProblem[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [lastPage, setLastpage] = React.useState(1);
  const listInnerRef = React.useRef(null);
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (Math.ceil(scrollTop) + clientHeight === scrollHeight) {
        loadmore();
      }
    }
  };

  const getDataQues = async () => {
    try {
      setIsLoading(true);
      const res = await detailProblemApi.getListQuesProblem(page);
      if (res.status) {
        const newData = res.data.data.data.map((item) => {
          return {
            ...item,
            active: false,
          };
        });
        setDataQues(newData);
        setIsLoading(false);
        setLastpage(res.data.data.last_page);
      } else {
        setIsLoading(true);
        openSnackbar({
          position: "top",

          position: "top",
          text: "Có lỗi xảy ra",
          verticalAction: true,
          type: "default",
          icon: true,
          duration: 1500,
        });
      }
    } catch (e) {
      console.error(e);
      setIsLoading(true);
    } finally {
      setIsLoading(false);
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
        const res = await detailProblemApi.getListQuesProblem(currentPage);
        if (res.status) {
          const newData = res.data.data.data.map((item) => {
            return {
              ...item,
              active: false,
            };
          });
          setDataQues([...dataQues, ...newData]);
        } else {
          setIsLoading(true);
          openSnackbar({
            position: "top",

            position: "top",
            text: "Có lỗi xảy ra",
            verticalAction: true,
            type: "default",
            icon: true,
            duration: 1500,
          });
        }
      } catch (e) {
        console.error(e);
        setIsLoading(true);
      } finally {
        setIsLoading(false);
      }
    }
  };
  React.useEffect(() => {
    getDataQues();
    loadmore();
  }, []);
  return (
    <Box className="h-screen p-0 m-0">
      <Header title="Tất cả câu hỏi" />
      <Page
        className="w-full h-full pt-3 pb-40 bg-white"
        hideScrollbar
        ref={listInnerRef}
        onScroll={onScroll}
      >
        <div className="px-2">
          {!!dataQues &&
            !!dataQues.length &&
            dataQues.map((item, i) => {
              return (
                <div className="px-5 pt-3 flex justify-normal" key={i}>
                  <img
                    src={`${selectedBaby?.image}`}
                    className="w-10 h-10 object-cover rounded-full self-start"
                  />
                  <div className="flex flex-1 flex-col items-center justify-normal pl-2">
                    <span className="text-[15px] font-['Piazzolla'] font-semibold self-start pl-1">
                      {selectedBaby?.name}
                    </span>
                    <div className="bg_message mt-1">
                      <p className="text-sm font-['Piazzolla'] text-black mx-3 my-1 line-clamp-3">
                        {item.content_question}
                      </p>
                    </div>
                    {item.content_answer != "" && (
                      <div className="bg-[#d9d9d9] rounded-lg w-full h-auto min-h-[70px] mt-3 ml-2 py-1 px-2">
                        <span className="text-sm font-['Piazzolla'] text-black">
                          {item.content_answer}
                        </span>
                      </div>
                    )}
                    <span className="text-[#828282] text-[13px] self-end pt-4">
                      {showTimeAgo(item.created_at)}
                    </span>
                    <div className="bg-[#efefef] w-full h-[2px] my-4"></div>
                  </div>
                </div>
              );
            })}
        </div>
        {isLoading && <SpinLoad />}
      </Page>
    </Box>
  );
};

export default AllQuesProblem;
