import React from "react";
import "./scheduleManagement.css";
import { TiThMenu } from "react-icons/ti";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

export default function ScheduleManagement() {
  const navigate = useNavigate();

  const createScheduleClick = () => {
    navigate("/CreateSchedule");
  };

  return (
    <div>
      <Header />
      <div className="scheduleManagement">
        <div className="scheduleManagement-header">
          <div className="scheduleManagement-header-left">
            <TiThMenu size={29} className="menu-icon" />
            <h1>Schedule Management</h1>
          </div>
          <div className="scheduleManagement-header-right">
            <button
              onClick={createScheduleClick}
              className="create-schedule-button"
            >
              Create Schedule
            </button>
          </div>
        </div>
        <div className="scheduleManagement-body">
          <table>
            <tr>
              <th>Employee No</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
