import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ApplicationPage from "../pages/ApplicationPage";
import AdminHomePage from "../pages/AdminHomePage";
import CreateTripPage from "../pages/CreateTripPage";
import TripDetailsPage from "../pages/TripDetailsPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/application/:name/:id" element={<ApplicationPage />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/admin/create" element={<CreateTripPage />} />
        <Route path="/admin/tripDetails/:id" element={<TripDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
