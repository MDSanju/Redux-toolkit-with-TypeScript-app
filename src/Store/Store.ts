import { configureStore } from "@reduxjs/toolkit";
import { auth, product } from "./Slices";

import { AuthState } from "./Slices/AuthSlice";
import { ProductState } from "./Slices/ProductSlice";

const store = configureStore({
  reducer: {
    auth,
    product,
  },
});

export interface RootState {
  auth: AuthState;
  product: ProductState;
}
export type AppDispatch = typeof store.dispatch;

export default store;
