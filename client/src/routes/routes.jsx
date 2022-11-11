import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../screens/Login";
import Menu from "../components/Menu";
// import Dashboard from "../screens/Dashboard";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" />

        <Route
          element={
            <Menu>
              <div>Menu</div>
              {/* <Dashboard /> */}
            </Menu>
          }
          path="/dashboard"
        />
      </Routes>
    </BrowserRouter>
  );
};
