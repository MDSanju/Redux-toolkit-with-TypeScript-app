import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  isLoggedIn: boolean;
  user: {
    id: string;
    email: string;
    password: string;
  };
}

export const initialState: AuthState = {
  isLoggedIn: false,
  user: {
    id: "",
    email: "",
    password: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ id: string; email: string; password: string }>
    ) => {
      state.isLoggedIn = true;
      state.user = {
        id: action.payload.id,
        email: action.payload.email,
        password: action.payload.password,
      };
    },
    getUser: (state) => state,
  },
});

export const { login, getUser } = authSlice.actions;
export default authSlice.reducer;
