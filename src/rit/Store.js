import { configureStore } from "@reduxjs/toolkit";
import ProdcutSlice from "./slices/Prodcut-slice";
import cartSlice from "./slices/Cart-slice";
export const store = configureStore({
  reducer: {
    prodcut: ProdcutSlice,
    cart: cartSlice,
  },
});
