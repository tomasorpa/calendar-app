import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isDateCalendarOpen: false,
    isDeleteBtnDisabled: false,
  },
  reducers: {
    onOpenCalendarModal: (state) => {
      state.isDateCalendarOpen = true;
    },
    onCloseCalendarModal: (state) => {
      state.isDateCalendarOpen = false;
    },
    onAbleDeleteBtn: (state) => {
      state.isDeleteBtnDisabled = false;
    },
    onDisableDeleteBtn: (state) => {
      state.isDeleteBtnDisabled = true;
    },
  },
});

export const { onOpenCalendarModal, onCloseCalendarModal,onAbleDeleteBtn
,onDisableDeleteBtn } = uiSlice.actions;
