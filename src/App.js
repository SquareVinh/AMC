import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings, BackGr } from "./components";
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
import "./App.css";
import Login from "./Login";
import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  const [sigin, setSigin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* dashboard  */}

        <Route path="/" element={<Login />} />
        {/* <Route path="/" element={<Center />} /> */}

        {/* <Route path="/login" element={<Login />} /> */}
        <Route
          path="/center"
          element={
            <BackGr>
              <Center />
            </BackGr>
          }
        />

        {/* pages  */}
        <Route
          path="/courses"
          element={
            <BackGr>
              <Courses />
            </BackGr>
          }
        />
        <Route
          path="/students"
          element={
            <BackGr>
              <Students />
            </BackGr>
          }
        />

        <Route
          path="/lecturers"
          element={
            <BackGr>
              <Lecturers />
            </BackGr>
          }
        />

        {/* apps  */}
        <Route
          path="/kanban"
          element={
            <BackGr>
              <Kanban />
            </BackGr>
          }
        />
        <Route
          path="/attendance"
          element={
            <BackGr>
              <Attendance />
            </BackGr>
          }
        />
        <Route
          path="/calendar"
          element={
            <BackGr>
              <Calendar />
            </BackGr>
          }
        />
        {/* <Route path="/color-picker" element={<ColorPicker />} /> */}

        {/* charts  */}
        {/* <Route path="/line" element={<Line />} />
        <Route path="/area" element={<Area />} /> */}
        <Route
          path="/documents"
          element={
            <BackGr>
              <Documents />
            </BackGr>
          }
        />
        {/* <Route path="/pie" element={<Pie />} />
        <Route path="/financial" element={<Financial />} />
        <Route path="/color-mapping" element={<ColorMapping />} />
        <Route path="/pyramid" element={<Pyramid />} />
        <Route path="/stacked" element={<Stacked />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
