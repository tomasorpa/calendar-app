import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    status: "checking",
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = "authorized";
      state.user = payload ;
      state.errorMessage = undefined;
    },
    onLogout: (state, { payload }) => {

      state.status = "not-authorized";
      state.user = {};
      state.errorMessage = payload;
    },
    onClearErrorMsg: (state) => {
      state.errorMessage = undefined;
    }
  },
});

export const { onChecking, onLogin, onLogout, onClearErrorMsg } = authSlice.actions;
