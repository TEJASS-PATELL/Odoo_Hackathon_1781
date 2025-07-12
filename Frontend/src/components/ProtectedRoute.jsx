// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { authUser, isCheckingAuth, checkAuth } = useAuthStore();

  // Call checkAuth on first render
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) {
    return <p>Loading...</p>; // or spinner component
  }

  if (!authUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
