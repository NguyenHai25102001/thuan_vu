import React from "react";
import { useNavigate } from "react-router-dom";
import Images from "../../static";
import path from "../../constants/path";
import { Page } from "zmp-ui";
import shopApi from "../../apis/shop.apis";
import { IProductShop } from "../../types/shop.types";
import { API_URL_IMAGE } from "../../constants/utils";
import ModalAddProduct from "../shop/modalAddProduct";
import _ from "lodash";
const SearchProduct = () => {
  const [data, setData] = React.useState<IProductShop[]>([]);
  const [page, setPage] = React.useState(1);
  const [lastPage, setLastPage] = React.useState(1);
  const [keySearch, setKeySearch] = React.useState("");
  const refModalAddProduct = React.useRef(null);
  const [loading, setLoading] = React.useState(false);
  const [isSearch, setIsSearch] = React.useState(false);
  const [itemProductChoose, setItemProductChoose] =
    React.useState<IProductShop>();
  const navigate = useNavigate();

  const getData = React.useCallback(
    _.debounce((text: string) => {
      getDataProduct(text);
    }, 500),
    []
  );

  const getDataProduct = async (keySearch: string) => {
    try {
      setLoading(true);
      setIsSearch(true);
      const currentPage = 1;
      setPage(currentPage);
      const res = await shopApi.searchProduct(keySearch, currentPage);
      if (res.status) {
        setData(res.data.data.data);
        setLastPage(res.data.data.last_page);
      } else {
        alert("Có lỗi xảy ra");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      setIsSearch(false);
    }
  };
  const loadmore = async () => {
    if (page >= lastPage) {
      return;
    } else {
      try {
        const currentPage = page + 1;
        setPage(currentPage);
        const res = await shopApi.searchProduct(keySearch, currentPage);
        if (res.status) {
          setData([...data, ...res.data.data.data]);
        } else {
          alert("Có lỗi xảy ra!!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const listInnerRef = React.useRef(null);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        loadmore();
      }
    }
  };
  React.useEffect(() => {
    const time = setTimeout(() => {
      getData(keySearch);
    }, 1000);
    return () => clearTimeout(time);
  }, [keySearch]);
  return (
    <div className="w-full h-full bg-white relative">
      {loading && (
        <div className="fixed w-full h-full bg-black bg-opacity-80 z-[99999] flex items-center justify-center">
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
            Tìm kiếm sản phẩm
          </p>
        </div>
        <div className="mx-2 my-4 border-solid border-[#c3dbe5] overflow-hidden bg-white flex flex-row justify-start gap-2 h-10 items-center px-4 border rounded">
          <input
            value={keySearch}
            onChange={(event) => setKeySearch(event.target.value)}
            placeholder="Nhập tên sản phẩm"
            className="outline-none h-10 border-none flex-1 text-sm text-black placeholder:text-[#8e90a5]"
          />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z"
              fill="#828282"
            />
          </svg>
        </div>
      </div>

      <div className="h-[2px] w-[96%] mx-auto mb-4 bg-[#EBEBEB]"></div>
      <Page
        className="w-full h-full no-scrollbar"
        hideScrollbar
        ref={listInnerRef}
        onScroll={onScroll}
      >
        <div className="grid grid-cols-3 px-2 gap-3 pb-72">
          {!loading &&
            !isSearch &&
            !!keySearch &&
            keySearch !== "" &&
            data?.length === 0 && (
              <p className="w-full text-base text-black col-span-3">
                Không tìm thấy sản phẩm.
              </p>
            )}
          {!!data &&
            !!data.length &&
            data.map((item, index) => {
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    navigate(`${path.home}${item.id}`);
                  }}
                  className="mt-1 rounded-lg border border-[#f8f8fb] overflow-hidden shadow"
                >
                  <div className="w-full bg-[#f8f8fb] flex items-center justify-center py-4">
                    <img
                      src={
                        item.image
                          ? `${API_URL_IMAGE}${item.image}`
                          : Images.bannerDrinkHome
                      }
                      className=" w-20 h-20 rounded object-cover"
                    />
                  </div>
                  <div>
                    <p className="mx-1 text-sm font-['Nunito'] leading-[20px] text-[#333333] text-left my-1 line-clamp-2">
                      {item?.name}
                    </p>
                  </div>
                  <div className="flex items-center px-1 justify-between pb-2">
                    <div>
                      <p className="text-xs font-['Nunito'] font-bold  text-[#d60013] ">
                        {item?.money}
                      </p>
                      <p className="text-xs font-['Nunito']  text-[#828282] line-through">
                        {item?.money_base}
                      </p>
                    </div>
                    <div
                      className="bg-main flex items-center justify-center p-2 rounded-md"
                      onClick={(event) => {
                        event.stopPropagation();
                        setItemProductChoose(item);
                        refModalAddProduct.current?.setShowModalAddProduct(
                          true
                        );
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M7.875 15.75C8.49632 15.75 9 15.2463 9 14.625C9 14.0037 8.49632 13.5 7.875 13.5C7.25368 13.5 6.75 14.0037 6.75 14.625C6.75 15.2463 7.25368 15.75 7.875 15.75Z"
                          fill="white"
                        />
                        <path
                          d="M13.125 15.75C13.7463 15.75 14.25 15.2463 14.25 14.625C14.25 14.0037 13.7463 13.5 13.125 13.5C12.5037 13.5 12 14.0037 12 14.625C12 15.2463 12.5037 15.75 13.125 15.75Z"
                          fill="white"
                        />
                        <path
                          d="M15.75 5.25H5.5005L4.635 3.1725C4.52138 2.89886 4.32908 2.66511 4.08247 2.50088C3.83586 2.33665 3.54604 2.24934 3.24975 2.25H1.5V3.75H3.2505L6.80775 12.2888C6.924 12.5678 7.19775 12.75 7.5 12.75H13.5C13.8127 12.75 14.0925 12.5558 14.2028 12.264L16.4528 6.264C16.4949 6.15045 16.509 6.0284 16.4939 5.90822C16.4787 5.78805 16.4348 5.67331 16.3658 5.57375C16.2968 5.4742 16.2048 5.39278 16.0976 5.33641C15.9904 5.28005 15.8711 5.25041 15.75 5.25ZM12.75 9.75H11.25V11.25H9.75V9.75H8.25V8.25H9.75V6.75H11.25V8.25H12.75V9.75Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </Page>
      <ModalAddProduct ref={refModalAddProduct} item={itemProductChoose} />
    </div>
  );
};
export default SearchProduct;
