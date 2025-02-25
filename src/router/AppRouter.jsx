import { Navigate, Route, Routes } from "react-router-dom";
import {  CalendarRoutes } from "../calendar";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

export const AppRouter = () => {
  const loginStatus = "authenticated";
  return (
    <Routes>
      {loginStatus == "authenticated" ? (
        <Route path="/*" element={<CalendarRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="auth/login" />} />
    </Routes>
  );
};
