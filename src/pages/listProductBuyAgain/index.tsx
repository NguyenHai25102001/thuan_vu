import React from "react";
import { Page } from "zmp-ui";
import ItemComboMyOder from "../myOrder/itemComboMyOrder";
import ItemMyOder from "../myOrder/itemMyOder";
import { formatDecimalNumber } from "../../utils/Utilities";
import { useLocation } from "react-router-dom";
import Header from "../../components/header";

const ListProductBuyAgain = (props) => {
  const location = useLocation();
  const item = location.state;
  return (
    <div className="w-full h-full bg-white">
      <Header title="Danh sách sản phẩm" />
      <Page className="w-full h-full" hideScrollbar>
        <div className="w-full h-full mb-96">
          {!!item &&
            !!item?.order_item &&
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

          <div className="h-36"></div>
        </div>
      </Page>
    </div>
  );
};
export default ListProductBuyAgain;
