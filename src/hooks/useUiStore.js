import { useDispatch, useSelector } from "react-redux";
import { onAbleDeleteBtn, onCloseCalendarModal, onDisableDeleteBtn, onOpenCalendarModal } from "../store";

export const useUiStore = () => {
  const { isDateCalendarOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const onOpenModal = () => {
    dispatch(onOpenCalendarModal());
  };
  const onCloseModal = () => {
    dispatch(onCloseCalendarModal());
  };
  const ableDeleteBtn = () => {
    dispatch(onAbleDeleteBtn());
  };
  const disableDeleteBtn = () => {
    dispatch(onDisableDeleteBtn());
  };
  return {
    isDateCalendarOpen,
    onOpenModal,
    onCloseModal,
    ableDeleteBtn,
    disableDeleteBtn
  };
};
