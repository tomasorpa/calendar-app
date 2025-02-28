import { useEffect, useMemo, useState } from "react";
import Modal from "react-modal";
import {
  Button,
  TextField,
  Typography,
  Box,
  createTheme,
  ThemeProvider,
  Grid2,
} from "@mui/material";
import { addHours, differenceInMinutes } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { useUiStore } from "../../hooks/useUiStore";
import { useSelector } from "react-redux";
import { useCalendarStore } from "../../hooks";

Modal.setAppElement("#root");

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

export const CalendarModal = () => {
  const { isDateCalendarOpen, onCloseModal,disableDeleteBtn } = useUiStore();

  const [formValues, setFormValues] = useState({
    title: "",
    notes: "",
    start: new Date(),
    end: addHours(new Date(), 2),
  });
  
  const { startSavingEvent, deleteEvent } = useCalendarStore();
  const [didUserSumbit, setDidUserSumbit] = useState(false);

  const { activeEvent } = useSelector((state) => state.calendar);
  const { isDeleteBtnDisabled} =useSelector(state=>state.ui)
  const titleError = useMemo(() => {
    if (didUserSumbit && formValues.title.trim().length === 0) return true;
  }, [formValues.title, didUserSumbit]);

  useEffect(() => {
    if (activeEvent !== null) {
      setFormValues({
        ...activeEvent,
      });
    }
  }, [activeEvent]);

  const onClose = () => {
    console.log("close");
    onCloseModal();
  };

  const handleOnChange = ({ target }) => {
    const { value, name } = target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleOnSubmit = async (event) => {
    setDidUserSumbit(true);
    event.preventDefault();
    const timeDifference = differenceInMinutes(
      formValues.end,
      formValues.start
    );

    if (timeDifference < 0 || isNaN(timeDifference)) {
      Swal.fire("Incorrect dates", "Correct input dates", "error");
      return;
    }

    if (formValues.title.length <= 0) {
      console.log(`Title field is Empty`);
      return;
    }

    await startSavingEvent(formValues);
    onCloseModal();
  };

  const handleDeleteEvent = () => {
    console.log({ activeEvent });
    deleteEvent({ ...activeEvent });
    onClose();
  };
  return (
    <ThemeProvider theme={theme}>
      <Modal
        isOpen={isDateCalendarOpen}
        onRequestClose={onClose}
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
      >
        <Box
          component="form"
          sx={{ maxHeight: "700px", p: 2 }}
          onSubmit={handleOnSubmit}
        >
          <Typography variant="h5" gutterBottom>
            New Event
          </Typography>
          <hr />

          <Box sx={{ position: "relative", zIndex: 1500, mb: 2 }}>
            <DatePicker
              selected={formValues.start}
              onChange={(date) => setFormValues({ ...formValues, start: date })}
              showTimeSelect
              dateFormat="Pp"
              popperModifiers={[
                {
                  name: "preventOverflow",
                  options: { boundary: "viewport" },
                },
              ]}
              customInput={
                <TextField
                  fullWidth
                  size="small"
                  label="Start Date and Time"
                  margin="normal"
                />
              }
            />
          </Box>

          <Box sx={{ position: "relative", zIndex: 1400, mb: 2 }}>
            <DatePicker
              selected={formValues.end}
              onChange={(date) => setFormValues({ ...formValues, end: date })}
              dateFormat="Pp"
              showTimeSelect
              minDate={formValues.start}
              popperModifiers={[
                {
                  name: "preventOverflow",
                  options: { boundary: "viewport" },
                },
              ]}
              customInput={
                <TextField
                  fullWidth
                  size="small"
                  label="End Date and Time"
                  margin="normal"
                />
              }
            />
          </Box>

          <hr />

          <TextField
            fullWidth
            size="small"
            label="Event Title"
            name="title"
            autoComplete="off"
            margin="normal"
            error={titleError}
            onChange={handleOnChange}
            value={formValues.title}
          />
          <Typography variant="body2" color="textSecondary">
            A short description
          </Typography>

          <TextField
            fullWidth
            size="small"
            label="Notes"
            name="notes"
            multiline
            rows={3}
            margin="normal"
            onChange={handleOnChange}
            value={formValues.notes}
          />
          <Typography variant="body2" color="textSecondary">
            Additional information
          </Typography>
          <Grid2 container display={"flex"} justifyContent={"space-evenly"}>
            <Button
              variant="outlined"
              onClick={handleDeleteEvent}
              color="error"
              sx={{ mt: 2 }}
              disabled={isDeleteBtnDisabled}
            >
              Delete
            </Button>
            <Button variant="outlined" color="gray" sx={{ mt: 2 }}>
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              sx={{ mt: 2 }}
            >
              Save
            </Button>
          </Grid2>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};
