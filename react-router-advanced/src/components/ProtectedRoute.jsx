// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth"; // Import the useAuth hook

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // Use the hook to get authentication status

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
