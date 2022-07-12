import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
// import AdminHomePage from "./AdminHomePage";
import LoginPage from "../pages/LoginPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import AdminHomePage from "../pages/AdminHomePage";
import CreateTripPage from "../pages/CreateTripPage";
import TripDetailsPage from "../pages/TripDetailsPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/application" element={<ApplicationFormPage />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/admin/create" element={<CreateTripPage />} />
        <Route path="/admin/tripDetails" element={<TripDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
