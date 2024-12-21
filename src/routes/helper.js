import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

// Utility to check if the token is expired
const isTokenExpired = (token) => {
  try {
    const { exp } = jwtDecode(token); // Decode token to get expiry time
    return Date.now() >= exp * 1000; // Compare current time with expiry time
  } catch {
    return true; // Treat invalid or missing tokens as expired
  }
};

const PrivateRoute = () => {
  const token = localStorage.getItem("token");

  // Redirect to login if token is missing or expired
  if (!token || isTokenExpired(token)) {
    localStorage.removeItem("token"); // Clear invalid token
    return <Navigate to="/login" replace />;
  }

  // Render the route if token is valid
  return <Outlet />;
};

export default PrivateRoute;
