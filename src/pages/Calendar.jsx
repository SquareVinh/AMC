import React, { useEffect, useState } from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import axios from "axios";
import { scheduleData2 } from "../data/dummy";
import { Header } from "../components";

// eslint-disable-next-line react/destructuring-assignment
const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

const Scheduler = () => {
  const [scheduleObj, setScheduleObj] = useState();

  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };
  const [apiSchedule, setApiSchedule] = useState([]);
  const onDragStart = (arg) => {
    // eslint-disable-next-line no-param-reassign
    arg.navigation.enable = true;
  };
  const date = new Date(2022, 1, 3, 3, 2, 30);
  const date2 = "2021-01-10T04:00:00.000";
  const date3 = new Date("2021-01-10T04:00:00.000");
  useEffect(() => {
    const getApi0 = async () => {
      try {
        const res2 = await axios.get("https://localhost:7009/api/ClassLiches");
        setApiSchedule(res2.data);
      } catch (error) {
        console.log(error);
      }
    };
    getApi0();
  }, []);
  return (
    <div>
      {apiSchedule.length > 0 && (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
          <Header
            category={new Date(apiSchedule[0].ngay).toISOString()}
            title={new Date(apiSchedule[0].ngay).toLocaleDateString("vi-VN")}
          />
          <ScheduleComponent
            height="650px"
            ref={(schedule) => setScheduleObj(schedule)}
            selectedDate={new Date(2021, 0, 10)}
            eventSettings={{
              dataSource: scheduleData2,
              fields: {
                id: { name: "id" },
                subject: new Date(apiSchedule[0].ngay).toLocaleDateString(
                  "vi-VN"
                ),
                location: { name: "phong" },
                startTime: new Date(apiSchedule[0].ngay).toISOString(),
                endTime: { name: "ketThuc" },
              },
            }}
            dragStart={onDragStart}
          >
            <ViewsDirective>
              {["Day", "Week", "WorkWeek", "Month", "Agenda"].map((item) => (
                <ViewDirective key={item} option={item} />
              ))}
            </ViewsDirective>
            <Inject
              services={[
                Day,
                Week,
                WorkWeek,
                Month,
                Agenda,
                Resize,
                DragAndDrop,
              ]}
            />
          </ScheduleComponent>

          <PropertyPane>
            <table style={{ width: "100%", background: "white" }}>
              <tbody>
                <tr style={{ height: "50px" }}>
                  <td style={{ width: "100%" }}>
                    <DatePickerComponent
                      value={new Date(2021, 0, 10)}
                      showClearButton={false}
                      placeholder="Current Date"
                      floatLabelType="Always"
                      change={change}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </PropertyPane>
        </div>
      )}
    </div>
  );
};

export default Scheduler;
