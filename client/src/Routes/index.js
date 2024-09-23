import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./../pages/Home";
import Error from "./../pages/Errors";

import Footer from "../Layouts/Footer/Footer";
import { Header } from "../Layouts/Header/Header";
import Cars from "../pages/Cars";
import AdminRouter from "../pages/Admin";
import DashboardHome from "../pages/Admin/Home";
import Users from "../pages/Admin/Users";
import AllCars from "../pages/Admin/Cars";
import Orders from "../pages/Admin/Orders";
import Login from "../pages/Login";
import Register from "../pages/Register";
import VerifyUser from "../pages/Register/VerifyUser";
import ScrollToTop from "../components/ScrollToTop";
import Sales from "../pages/Admin/Sales";
import Reviews from "../pages/Reviews";
import AuthRouter from "../components/AuthRouter";

const Index = () => {
  // set your conditional Route or Private Routes
  return (
    <BrowserRouter>
      {/* declare static Components here  Like Header Navbar etc */}

      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-user" element={<VerifyUser />} />
        /* Protecting Dashboard routes */
        <Route
          path="/admin/*"
          element={
            <AuthRouter>
              <AdminRouter />
            </AuthRouter>
          }
        >
          {/* Nested route */}
          <Route path="home" element={<DashboardHome />} />
          <Route path="users" element={<Users />} />
          <Route path="cars" element={<AllCars />} />
          <Route path="sales" element={<Sales />} />
          <Route path="Orders" element={<Orders />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      {/* declare static Components here  Like Footer or Dropdown */}
    </BrowserRouter>
  );
};

export default Index;
