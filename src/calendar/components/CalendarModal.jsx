import { useMemo, useState } from "react";
import Modal from "react-modal";
import {
  Button,
  TextField,
  Typography,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { addHours, differenceInMinutes } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { useUiStore } from "../../hooks/useUiStore";

Modal.setAppElement("#root");

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

export const CalendarModal = () => {
  const { isDateCalendarOpen } = useUiStore();
  const [isOpen, setIsOpen] = useState(true);
  const [formValues, setFormValues] = useState({
    title: "",
    notes: "",
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  const [didUserSumbit, setDidUserSumbit] = useState(false);

  const titleError = useMemo(() => {
    if (didUserSumbit && formValues.title.trim().length === 0) return true;
  }, [formValues.title, didUserSumbit]);
  const onCloseModal = () => {
    setIsOpen(false);
  };
 

  const handleOnChange = ({ target }) => {
    const { value, name } = target;
    setFormValues({ ...formValues, [name]: value });
  };
  console.log();
  const handleOnSubmit = (event) => {
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
  };
  return (
    <ThemeProvider theme={theme}>
      <Modal
        isOpen={isDateCalendarOpen}
        onRequestClose={onCloseModal}
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

          <Button
            variant="outlined"
            color="primary"
            fullWidth
            type="submit"
            sx={{ mt: 2 }}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};
