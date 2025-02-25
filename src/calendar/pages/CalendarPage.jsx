import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours } from "date-fns";
import { NavBar } from "../components/Navbar";
import { Calendar } from "react-big-calendar";
import { localizer } from "../../helpers";
import { Opacity } from "@mui/icons-material";
import { CalendarEvent } from "../components/CalendarEvent";
import { useState } from "react";
import { CalendarModal } from "../components/CalendarModal";
import { useUiStore } from "../../hooks/useUiStore";

export const CalendarPage = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );
  const events = [
    {
      title: "dsfasa",
      notes: "sdfgsdg",
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: "#fafafa",
      user: {
        _id: "123",
        name: "Tomas",
      },
    },
  ];

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#347CF7",
      opacity: 0.8,
      color: "#ffff",
    };

    return { style };
  };

  const { onOpencalendarModal } = useUiStore();
  
  const onSelect = () => {};

  const onViewChanged = (event) => {
    localStorage.setItem("lastView", event);
    setLastView(event);
  };
   const handleDoubleClick = (event) => {
    
     console.log(event)
  };
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
        onDoubleClickEvent={handleDoubleClick}
        onView={onViewChanged}
      />
      <CalendarModal />
    </div>
  );
};
