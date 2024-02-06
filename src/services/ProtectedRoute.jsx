import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const protectedRoute = () => {
  const auth = localStorage.getItem("loggedin");
  return auth ? <Outlet /> : <navigate to={"/login"} />;
};

export default protectedRoute;
