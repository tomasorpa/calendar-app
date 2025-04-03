import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

export const calendarSlice = createSlice({
  name: "calendarSlice",
  initialState: {
    isLoadingEvents: true,
    events: [],
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
        event._id === payload.id ? payload : event
      );
    },
    onDeleteEvent: (state, { payload }) => {
      state.events = state.events.filter((event) => event._id !== payload.id);
      state.activeEvent = null;
    },
    onLoadEvents: (state, { payload }) => {
      state.events = payload;
      state.isLoadingEvents = false;
      state.activeEvent = null;
    },
    onLogoutCalendar: (state) => {
      state.isLoadingEvents=true
      state.events=[]
      state.activeEvent=null
    }
  },
});

export const {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
  onLoadEvents,
  onLogoutCalendar,
} = calendarSlice.actions;
