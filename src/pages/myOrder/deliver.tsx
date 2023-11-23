import React from "react";
import { Page } from "zmp-ui";
import myOderApi from "../../apis/myOder.apis";
import { IDataMyOrder } from "../../types/myOder.types";
import ItemMyOder from "./itemMyOder";
import { formatDecimalNumber } from "../../utils/Utilities";
import ItemComboMyOder from "./itemComboMyOrder";

export default function Deliver() {
  const [data, setData] = React.useState<IDataMyOrder[]>([]);
  const [page, setPage] = React.useState(1);
  const [lastPage, setLastPage] = React.useState(1);
  const listInnerRef = React.useRef(null);

  const getDataProduct = async () => {
    try {
      const currentPage = 1;
      setPage(currentPage);
      const res = await myOderApi.myOder(2, currentPage); //vận chuyển
      if (res.status) {
        setData(res.data?.data?.data);
        setLastPage(res.data?.data?.last_page);
      } else {
        alert("Có lỗi xảy ra");
      }
    } catch (e) {
      console.log(e);
    } finally {
    }
  };
  const loadmore = async () => {
    if (page >= lastPage) {
      return;
    } else {
      try {
        const currentPage = page + 1;
        setPage(currentPage);
        const res = await myOderApi.myOder(2, currentPage); //vận chuyển

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
  React.useEffect(() => {
    getDataProduct();
  }, []);
  return (
    <Page
      className="w-full h-full"
      hideScrollbar
      onScroll={onScroll}
      ref={listInnerRef}
    >
      <div className="w-full h-full mb-96">
        {!!data &&
          !!data.length &&
          data.map((item) => {
            return (
              <div
                key={item.id}
                className="border-b-[12px] border-b-[#EBEBEB] pb-2"
              >
                {!!item?.order_item &&
                  !!item.order_item.length &&
                  item.order_item.map((el) => {
                    if (!!el && !!el.combo_id) {
                      return (
                        <div key={el.id}>
                          <ItemMyOder item={el} isCombo />
                          {el.combo.data_product.map((e) => {
                            return <ItemComboMyOder item={e} key={e.id} />;
                          })}
                        </div>
                      );
                    } else {
                      return <ItemMyOder item={el} key={el.id} />;
                    }
                  })}

                <div>
                  <p className="text-black text-sm mt-1 font-normal ml-2">
                    Người nhận hàng:{" "}
                    <span className="font-bold mr-2">{item?.name}</span>
                  </p>
                  <p className="text-black text-sm mt-1 font-normal ml-2">
                    Địa chỉ:{" "}
                    <span className="font-bold mr-2">{item?.full_address}</span>
                  </p>
                  <p className="text-black text-sm mt-1 font-normal ml-2">
                    Tiền sản phẩm:
                    <span className="font-bold mr-2">
                      {formatDecimalNumber(item?.total_money_product)} đ
                    </span>
                  </p>
                  <p className="text-black text-sm mt-1 font-normal ml-2">
                    Phí vận chuyển:{" "}
                    <span className="font-bold mr-2">
                      {formatDecimalNumber(item?.fee_shipping)} đ
                    </span>
                  </p>
                  <p className="text-black text-sm mt-1 font-normal ml-2">
                    Tiền giảm trừ:{" "}
                    <span className="font-bold mr-2">
                      {formatDecimalNumber(item?.money_use_voucher)} đ
                    </span>
                  </p>
                  <p className="text-black text-sm mt-1 font-normal ml-2">
                    Thanh toán:
                    <span className="font-bold mr-2">
                      {" "}
                      {formatDecimalNumber(item?.total_money)} đ
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        <div className="h-44"></div>
      </div>
    </Page>
  );
}
