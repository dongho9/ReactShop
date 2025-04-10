import { useState, useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles.styles";
import styled from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./AuthContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true, // 상속받음
          element: <ProductAll />,
        },
        {
          path: "Login",
          element: <Login />,
        },
        {
          path: "products/:id",
          element: <PrivateRoute />,
        },
      ],
    },
  ]);
  return (
    <AuthProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
