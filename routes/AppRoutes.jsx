import React from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../components/layouts/DefaultLayout";
import HomePage from "../pages/home/HomePage";
import SignUpPage from "../pages/auth/SignUpPage";
import SignInPage from "../pages/auth/SignInPage";
import ForgetPasswordPage from "../pages/auth/ForgetPasswordPage";
const AppRoutes = () => {
  return (
    <Routes>
      {/* public pages  */}
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="signup" element={<SignUpPage />}></Route>
        <Route path="login" element={<SignInPage />}></Route>
        <Route path="forget-password" element={<ForgetPasswordPage />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
