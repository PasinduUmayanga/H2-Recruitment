import React from "react";
import "./layout.css";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className="main-container">
      <div>Main Layout</div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
