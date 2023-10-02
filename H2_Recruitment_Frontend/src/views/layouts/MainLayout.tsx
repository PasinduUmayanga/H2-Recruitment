import React from "react";
import "./layout.css";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className="main-container">
      <h1>This is layout page</h1>
      <Outlet />
    </div>
  );
};

export default MainLayout;
