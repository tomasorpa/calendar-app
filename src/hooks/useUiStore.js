import { useDispatch, useSelector } from "react-redux";
import { onOpenCalendarModal } from "../store";

export const useUiStore = () => {
  const { isDateCalendarOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const onOpencalendarModal = () => {
    dispatch(onOpenCalendarModal());
  };
  return {
    isDateCalendarOpen,
    onOpencalendarModal,
  };
};
