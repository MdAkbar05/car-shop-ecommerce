import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const authenticated = "samratakbar667466@gmail.com";
const AuthRouter = ({ children }) => {
  const location = useLocation();

  // get user from LocalStorage
  const getUser = () => {
    const userJSON = localStorage.getItem("user");
    return userJSON ? JSON.parse(userJSON) : null;
  };

  const user = getUser();

  // Check if refreshToken is available for authentication
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  // Check if user is authenticated
  if (user.email !== authenticated) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children; // Render the protected component if authenticated
};

export default AuthRouter;
