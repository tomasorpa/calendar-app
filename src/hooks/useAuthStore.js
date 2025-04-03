import { useDispatch, useSelector } from "react-redux";
import { calendarApi } from "../api";
import { onClearErrorMsg, onLogin, onLogout } from "../store/auth/authSlice";

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, user } = useSelector((state) => state.auth);
  const startLogin = async ({ email, password }) => {
    try {
      const { data } = await calendarApi.post("/auth", { email, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-time", new Date().getTime());
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      dispatch(onLogout("Unauthorized Credentials"));
      setTimeout(() => {
        dispatch(onClearErrorMsg());
      }, 10);
      console.log({ error });
    }
  };
  const startRegister = async ({ name, email, password }) => {
    try {
      const { data } = await calendarApi.post("/auth/new", {
        name,
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-time", new Date().getTime());
      dispatch(
        onLogin({
          name: data.name,
          uid: data.uid,
        })
      );
    } catch (error) {
      dispatch(onLogout("Unauthorized Credentials"));
      setTimeout(() => {
        dispatch(onClearErrorMsg());
      }, 10);
      console.log({ error });
    }
  };
  const startCheckingToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout());

    try {
      const { data } = await calendarApi.get("/auth/renew");
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-time", new Date().getTime());
      dispatch(
        onLogin({
          name: data.name,
          uid: data.uid,
        })
      );
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
    }
  };
  const startOnLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  return {
    status,
    user,

    startCheckingToken,
    startLogin,
    startOnLogout,
    startRegister,
  };
};
