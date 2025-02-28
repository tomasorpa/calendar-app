import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";
const temporalEvent = {
  _id: new Date().getTime(),
  title: "Cumpleaños del jefe",
  notes: "Perros calientes + Globos",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafafa",
  user: {
    _id: "123",
    name: "Tomas",
  },
};
export const calendarSlice = createSlice({
  name: "calendarSlice",
  initialState: {
    events: [temporalEvent],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((event) =>
        event._id === payload._id ? payload : event
      );
    },
    onDeleteEvent: (state, { payload }) => {
      state.events = state.events.filter((event) => event._id !== payload._id);
      state.activeEvent = null;
    },
  },
});

export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } =
  calendarSlice.actions;
