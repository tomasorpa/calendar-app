import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { AppRouter } from "./router";
import { store } from "./store";
export const CalendarApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
      >
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};
