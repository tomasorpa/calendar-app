import "react-big-calendar/lib/css/react-big-calendar.css";
import { NavBar } from "../components/Navbar";
import { Calendar } from "react-big-calendar";
import { localizer } from "../../helpers";
import { CalendarEvent } from "../components/CalendarEvent";
import { useEffect, useState } from "react";
import { CalendarModal } from "../components/CalendarModal";
import { useUiStore, useCalendarStore } from "../../hooks";
import { FabAddEvent } from "../components/FabAddEvent";
import { useAuthStore } from "../../hooks/useAuthStore";

export const CalendarPage = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );
  const { user } =useAuthStore()
  const eventStyleGetter = (event, start, end, isSelected) => {
    console.log(event)
    console.warn(user)
    const isEventMine =
      user.uid === event.user._id ||
      user.uid === event.user.uid;
    const style = {
      backgroundColor: isEventMine ? "#24B0F9" : "#E30000",
      opacity: 0.8,
      color: "#fff",
      // color: isEventMine ? "#000" : "#fff",
      border: 0,
    };

    return { style };
  };

  const { onOpenModal, ableDeleteBtn } = useUiStore();

  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();

  const onSelect = (event) => {
    setActiveEvent(event);
  };

  const onViewChanged = (event) => {
    localStorage.setItem("lastView", event);
    setLastView(event);
  };

  const handleDoubleClick = () => {
    ableDeleteBtn();
    onOpenModal();
  };
  useEffect(() => {
    startLoadingEvents();
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <NavBar />
      <Calendar
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{
          height: "calc(100vh - 70px)",
          marginTop: "20px",
          width: "100%",
        }}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onSelectEvent={onSelect}
        onDoubleClickEvent={handleDoubleClick}
        onView={onViewChanged}
      />
      <CalendarModal />
      <FabAddEvent />
    </div>
  );
};
