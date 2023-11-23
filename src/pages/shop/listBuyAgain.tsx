import React from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "zmp-ui";
import cartApi from "../../apis/cart.apis";
import { IDataBuyAgain } from "../../types/cart.types";
import ItemBigBuyAgain from "./itemBigBuyAgain";

export default function ListBuyAgain() {
  const navigate = useNavigate();
  const [data, setData] = React.useState<IDataBuyAgain[]>([]);
  const [page, setPage] = React.useState(1);
  const [lastPage, setLastPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const listInnerRef = React.useRef(null);

  const getDataProduct = async () => {
    try {
      const currentPage = 1;
      setPage(currentPage);
      const res = await cartApi.getListOrderComplete(currentPage); //đã xác nhận
      if (res.status) {
        setData(res.data?.data?.data);
        setLastPage(res.data?.data?.last_page);
      } else {
        alert("Có lỗi xảy ra");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  const loadmore = async () => {
    if (page >= lastPage) {
      return;
    } else {
      try {
        const currentPage = page + 1;
        setPage(currentPage);
        const res = await cartApi.getListOrderComplete(currentPage); //đã xác nhận
        if (res.status) {
          setData([...data, ...res.data?.data?.data]);
        } else {
          alert("Có lỗi xảy ra!!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        loadmore();
      }
    }
  };

  // const buyAgain = useMutation({
  //   mutationFn:()=>cartApi.
  // })

  React.useEffect(() => {
    getDataProduct();
  }, []);

  return (
    <div className="w-full h-full bg-white relative">
      {loading && (
        <div className="fixed w-full h-full bg-black bg-opacity-80 z-9999 flex items-center justify-center">
          <div className="spin-loading"></div>
        </div>
      )}
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
          <p className="text-base font-['Nunito'] font-bold text-center text-white uppercase flex-1 mr-9">
            Mua lại nhanh chóng
          </p>
        </div>
      </div>
      <Page
        className="w-full h-full no-scrollbar"
        ref={listInnerRef}
        onScroll={onScroll}
        hideScrollbar
      >
        <div className="grid grid-cols-2 px-4 gap-x-4 gap-y-4 pt-5">
          {!!data &&
            !!data.length &&
            data.map((item, index) => {
              return <ItemBigBuyAgain item={item} key={item.id} />;
            })}
        </div>
        <div className="h-36" />
      </Page>
    </div>
  );
}
