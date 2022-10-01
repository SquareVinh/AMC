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
import { studentsGrid, ordersGrid, contextMenuItems } from "../data/dummy";
import { Header, Button } from "../components";
import ListStudent from "./ListStudent";
import ListStudentbyClass from "./ListStudentbyClass";

const Students = () => {
  const { currentColor, currentMode } = useStateContext();
  const [apiStudentsData, setApiStudentsData] = useState([]);
  const [apiCourseData, setApiCourseData] = useState([]);
  const getApi = async () => {
    try {
      const res = await axios.get("https://localhost:7009/api/Hocviens");
      console.log("data:  ", res.data);
      setApiStudentsData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div>
      <ListStudent />
      <ListStudentbyClass />
    </div>
  );
};
export default Students;
