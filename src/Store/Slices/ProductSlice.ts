import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const { v4: uuidv4 } = require("uuid");

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
}

export interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [
    {
      id: uuidv4(),
      name: "Cheese Burger",
      category: "Food",
      description: "This burger is very cheesy and tasty!",
    },
    {
      id: uuidv4(),
      name: "Friday T-Shirt",
      category: "Clothing",
      description: "Very beautiful design & comfortable T-Shirt!",
    },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    createProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    fetchProducts: (state) => state,
  },
});

export const { createProduct, fetchProducts } = productSlice.actions;
export default productSlice.reducer;
