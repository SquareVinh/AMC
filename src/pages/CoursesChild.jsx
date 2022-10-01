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
import { contextMenuItems, levelGrid, courseGrid } from "../data/dummy";
import { Header, Input, Button } from "../components";
import { LevelSettings } from "@syncfusion/ej2/treemap";

const CoursesChild = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  const { currentColor, currentMode } = useStateContext();

  const [apiLevelData, setApiLevelData] = useState([]);
  const [apiCourseData, setApiCourseData] = useState([]);

  const [levelID1, setLevelID1] = useState("");

  function handleChange(event) {
    setLevelID1(event.target.value);
  }
  const handleSearch = (event) => {
    //event.preventDefault();
    axios.get(`https://localhost:7009/api/Levels/${levelID1}`).then((res) => {
      console.log(res.data);
    });
  };

  const getApi0 = async () => {
    try {
      const res2 = await axios.get("https://localhost:7009/api/Levels");
      //console.log("data:  ", res2.data);
      setApiLevelData(res2.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApi0();
  }, []);

  const getApi1 = async () => {
    try {
      const res3 = await axios.get("https://localhost:7009/api/Courses");
      //console.log("data:  ", res3.data);
      setApiCourseData(res3.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApi1();
  }, []);

  return (
    <div className="col-span-2">
      <div>
        <Header title="Courses" />
      </div>
      <div className="grid grid-cols-4 gap-2 pb-5">
        <div className="col-span-1">
          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input
              className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Level ID"
              type="text"
              name="search"
            />
          </label>
        </div>
        <div className="col-span-1">
          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input
              className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Course ID"
              type="text"
              name="search"
            />
          </label>
        </div>
        <div className="col-span-1">
          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input
              className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Course Name"
              type="text"
              name="search"
            />
          </label>
        </div>
        <div className="col-span-1">
          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input
              className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Begin"
              type="text"
              name="search"
            />
          </label>
        </div>
        <div className="col-span-1">
          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input
              className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="End"
              type="text"
              name="search"
            />
          </label>
        </div>
        <div className="col-span-1">
          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input
              className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Type of lecture"
              type="text"
              name="search"
            />
          </label>
        </div>
        <div className="col-span-1">
          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input
              className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Tuition"
              type="text"
              name="search"
            />
          </label>
        </div>
        <div className="col-span-1">
          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input
              className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Amount"
              type="text"
              name="search"
            />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-8 gap-1 pb-5 ">
        <div className="col-span-4"></div>
        <div className="col-span-1 justify-self-auto">
          <Button
            color="white"
            bgColor={currentColor}
            text="Search"
            width="20px"
            borderRadius="10px"
          />
        </div>
        <div className="col-span-1 justify-self-auto">
          <Button
            color="white"
            bgColor={currentColor}
            text="Add"
            width="20px"
            borderRadius="10px"
          />
        </div>
        <div className="col-span-1 justify-self-stretch">
          <Button
            color="white"
            bgColor={currentColor}
            text="Update"
            width="20px"
            borderRadius="10px"
          />
        </div>
        <div className="col-span-1 justify-self-stretch">
          <Button
            color="white"
            bgColor={currentColor}
            text="Delete"
            width="20px"
            borderRadius="10px"
          />
        </div>
      </div>
      <div className="col-span2">
        <GridComponent
          id="gridcomp"
          dataSource={apiCourseData}
          allowPaging
          allowSorting
          allowExcelExport
          allowPdfExport
          contextMenuItems={contextMenuItems}
          editSettings={editing}
        >
          <ColumnsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {courseGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject
            services={[
              Resize,
              Sort,
              ContextMenu,
              Filter,
              Page,
              ExcelExport,
              Edit,
              PdfExport,
            ]}
          />
        </GridComponent>
      </div>
    </div>
  );
};
export default CoursesChild;
