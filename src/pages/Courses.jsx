import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { useStateContext } from "../contexts/ContextProvider";
import {
  contextMenuItems,
  ordersGrid,
  levelGrid,
  courseGrid,
} from "../data/dummy";
import { Header, Input, Button } from "../components";
import Levels from "./Levels";
import CoursesChild from "./CoursesChild";
import Class from "./Class";
const Courses = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  const { currentColor, currentMode } = useStateContext();

  return (
    <div>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl grid grid-cols-3 gap-5">
        <Levels />
        <CoursesChild />
      </div>

      <Class />
    </div>
  );
};
export default Courses;
