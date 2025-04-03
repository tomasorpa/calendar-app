import { Navigate, Route, Routes } from "react-router-dom";
import { CalendarRoutes } from "../calendar";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useAuthStore } from "../hooks/useAuthStore";
import { useEffect } from "react";
import { CheckingAuth } from "../calendar/components/CheckingAuth";

export const AppRouter = () => {
  const { startCheckingToken, status } = useAuthStore();
  useEffect(() => {
    startCheckingToken();
  }, []);

  if (status === "checking") {
    return <CheckingAuth />;
  }
  return (
    <Routes>
      {status == "authorized" ? (
        <Route path="/*" element={<CalendarRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="auth/login" />} />
    </Routes>
  );
};
