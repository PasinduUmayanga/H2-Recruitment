import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./views/layouts/MainLayout";
import Home from "./views/pages/HomePage/HomePage";
import CandidatePage from "./views/pages/CandidatePage/CandidatePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/candidate" element={<CandidatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
