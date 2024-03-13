// import { cartReducer } from "./api/CartApi/cartApi";
import { baseApi } from "./api/baseApi";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  // cart: cartReducer,
};
