import { SuccessResponse } from "../types/utils.type";
import http from "../utils/http";
import { ICart, IDataOrderComplete, IPramsBuyCart } from "../types/cart.types";
const cartApi = {
  getCart: () => http.get<SuccessResponse<ICart[]>>(`/api/cart-shop/get-cart`),
  deleteItemCart: (id) => {
    let formData = new FormData();
    formData.append("id", id);
    return http.post("/api/cart-shop/delete-cart", formData);
  },
  addToCart: (params: {
    product_id: number;
    quantity: number | string;
    product_variant_id: number;
    type: number;
  }) => {
    let formData = new FormData();
    formData.append("product_id", String(params.product_id));
    formData.append("quantity", String(params.quantity));
    formData.append(
      "product_variant_id",
      String(params.product_variant_id) || ""
    );
    formData.append("type", String(params.type)); //1 cộng 0 trừ
    return http.post("/api/cart-shop/add-to-cart", formData);
  },
  buy: (params: IPramsBuyCart) => {
    let formData = new FormData();
    formData.append("address_id", String(params.address_id));
    formData.append("transport_name", String(params.transport_name));
    formData.append("fee_shipping", String(params.fee_shipping));
    formData.append("money_use_voucher", String(params.money_use_voucher));
    formData.append("voucher_id_one", String(params.voucher_id_one));
    formData.append("voucher_id_two", String(params.voucher_id_two));
    return http.post("/api/place-order-shop", formData);
  },
  buyCombo: (id: number) => {
    let formData = new FormData();
    formData.append("combo_id", String(id));
    return http.post("/api/cart-shop/add-cart-combo", formData);
  },
  getListOrderComplete: (page: number) =>
    http.get<SuccessResponse<IDataOrderComplete>>(
      `/api/place-order-shop/repurchase-order?page=${page}`
    ),
  buyAgainProduct: (id: number) => {
    let formData = new FormData();
    formData.append("order_id", String(id));
    return http.post("/api/cart-shop/repurchase", formData);
  },
};

export default cartApi;
