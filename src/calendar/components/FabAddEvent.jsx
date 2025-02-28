import { Fab } from "@mui/material";
import { useUiStore, useCalendarStore } from "../../hooks";
import { addHours } from "date-fns";
import { AddOutlined } from "@mui/icons-material";

export const FabAddEvent = () => {
  const { onOpenModal, disableDeleteBtn } = useUiStore();
  const { setActiveEvent } = useCalendarStore();

  const handleOnClick = () => {
    setActiveEvent({
      title: "",
      notes: "",
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: "#fafafa",
      user: {
        _id: "123",
        name: "Tomas",
      },
    });
    onOpenModal();
    disableDeleteBtn();
  };

  return (
    <Fab
      color="primary"
      aria-label="add"
      onClick={handleOnClick}
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
      }}
    >
      <AddOutlined />
    </Fab>
  );
};
