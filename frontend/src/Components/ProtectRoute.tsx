import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// A helper function to get the token from cookies
const getCookie = (name: string): string | null => {
  const cookieArr = document.cookie.split("; ");
  // eslint-disable-next-line prefer-const
  for (let cookie of cookieArr) {
    const cookiePair = cookie.split("=");
    if (name === cookiePair[0]) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
};

// A custom hook to check authentication status
const useAuth = (): boolean => {
  const token = getCookie("token"); // Checking for "token" cookie
  return token ? true : false; // Return true if the token exists, false otherwise
};

// A protected route component to guard your pages
const ProtectedRoute: React.FC = () => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/signin" />;
  }

  // If authenticated, render the protected content
  return <Outlet />;
};

export default ProtectedRoute;
