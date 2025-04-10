import React from "react";
import ProductDetail from "./ProductDetail";
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
const PrivateRoute = () => {
  const { authenticate } = useAuth();
  return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
