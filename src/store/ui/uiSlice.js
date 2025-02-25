import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isDateCalendarOpen: false,
  },
  reducers: {
    onOpenCalendarModal: (state) => {
      state.isDateCalendarOpen = true;
    },
    onCloseCalendarModal: (state) => {
      state.isDateCalendarOpen = false;
    },
  },
});

export const { onOpenCalendarModal, onCloseCalendarModal } = uiSlice.actions;
