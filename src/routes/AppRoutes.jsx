import { Routes, Route } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { MainPage } from "../pages/MainPage";
import { SigninPage } from "../pages/SigninPage";
import { SignupPage } from "../pages/SignupPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { AnalysisPage } from "../pages/AnalysisPage";
import { PrivateRoute } from "./PrivateRoutes";
import { AnalysisCalendarPage } from "../components/AnalysisCalendarPage";


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="analysis" element={<AnalysisPage />} />
          <Route path="/analysis/calendar" element={<AnalysisCalendarPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
