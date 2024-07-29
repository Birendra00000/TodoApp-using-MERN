import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? element : null;
};

export default ProtectedRoute;
