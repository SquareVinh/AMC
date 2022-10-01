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

import { lecturersGrid, contextMenuItems } from "../data/dummy";
import { Header, Button } from "../components";
import ListLecturer from "./ListLecturer";
import ListLecturerbyClass from "./ListLecturerbyClass";

const Lecturers = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Delete"];
  const { currentColor, currentMode } = useStateContext();
  const [apiLecturersData, setApiLecturersData] = useState([]);
  const editing = { allowDeleting: true, allowEditing: true };
  const getApi = async () => {
    try {
      const res = await axios.get("https://localhost:7009/api/Giangviens");
      console.log("data:  ", res.data);
      setApiLecturersData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <div>
      <ListLecturer />
      <ListLecturerbyClass />
    </div>
    // <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    //   <Header category="Page" title="Customers" />
    //   <GridComponent
    //     dataSource={customersData}
    //     enableHover={false}
    //     allowPaging
    //     pageSettings={{ pageCount: 5 }}
    //     selectionSettings={selectionsettings}
    //     toolbar={toolbarOptions}
    //     editSettings={editing}
    //     allowSorting
    //   >
    //     <ColumnsDirective>
    //       {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    //       {customersGrid.map((item, index) => (
    //         <ColumnDirective key={index} {...item} />
    //       ))}
    //     </ColumnsDirective>
    //     <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
    //   </GridComponent>
    // </div>
  );
};

export default Lecturers;
