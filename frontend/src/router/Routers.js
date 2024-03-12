import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TourPage from "../pages/TourPage";
import TourDetailPage from "../pages/TourDetailPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import SearchResultList from "../pages/SearchResultList";
import ThankYouPage from "../pages/ThankYouPage";
import MyBookingPage from "../components/Booking/MyBooking";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/tours" element={<TourPage />} />
      <Route path="/tours/:id" element={<TourDetailPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      <Route path="/myBooking/:id" element={<MyBookingPage />} />

    </Routes>
  );
};

export default Routers;
