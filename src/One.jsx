import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";

import App from "./App";
import Login from "./Login";
import {
  Center,
  Courses,
  Calendar,
  Students,
  Stacked,
  Pyramid,
  Lecturers,
  Kanban,
  Line,
  Area,
  Documents,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Attendance,
} from "./pages";

const One = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default One;
