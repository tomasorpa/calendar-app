import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvents,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store";
import { useUiStore } from "./useUiStore";
import axios from "axios";
import calendarApi from "../api/calendarApi";
import { convertDate } from "../helpers";
import Swal from "sweetalert2";

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const { user } = useSelector((state) => state.auth);
  const { disableDeleteBtn, onCloseModal } = useUiStore();
  const dispatch = useDispatch();
  const setActiveEvent = (event) => {
    dispatch(onSetActiveEvent(event));
  };
  const startSavingEvent = async (event) => {
    try {
      if (event.id) {
        const { data } = await calendarApi.put(`/events/${event.id}`, event);
        startLoadingEvents();
        onUpdateEvent(data.event);
      } else {
        const { data } = await calendarApi.post("/events", event);
        disableDeleteBtn();
        await dispatch(onAddNewEvent({ ...event, id: data.event.id, user }));
      }
    } catch (error) {
      console.error(error);
      onCloseModal();
      Swal.fire(
        "Unauthorized",
        "You can not change an event which is not yours",
        "error"
      );
    }
  };

  const startDeletingEvent = async (event) => {
    try {
      await calendarApi.delete(`/events/${event.id}`);
      dispatch(onDeleteEvent(event.id));
      startLoadingEvents();
    } catch (error) {
      console.error(error);
      onCloseModal();
      Swal.fire(
        "Unauthorized",
        "You can not change an event which is not yours",
        "error"
      );
    }
  };
  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get("/events");
      const events = convertDate(data.events);
      dispatch(onLoadEvents(events));
    } catch (error) {
      console.error(error);
    }
  };
  
  return {
    events,
    setActiveEvent,
    activeEvent,
    startSavingEvent,
    startLoadingEvents,
    startDeletingEvent,
  };
};
