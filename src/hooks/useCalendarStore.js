import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store";
import { useUiStore } from "./useUiStore";

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { disableDeleteBtn } = useUiStore();
  const dispatch = useDispatch();
  const setActiveEvent = (event) => {
    dispatch(onSetActiveEvent(event));
  };
  const startSavingEvent = async (event) => {
    if (event._id) {
      onUpdateEvent({ ...event });
    } else {
      disableDeleteBtn();
      await dispatch(onAddNewEvent({ ...event, _id: new Date().getMinutes() }));
    }
  };

  const deleteEvent = (event) => {
    dispatch(onDeleteEvent({ ...event }));
  };
  return {
    events,
    setActiveEvent,
    activeEvent,
    startSavingEvent,
    deleteEvent,
  };
};
