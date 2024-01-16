import React from "react";
import "./attendanceDetals.css";
import { TiThMenu } from "react-icons/ti";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

export default function AttendanceDetals() {
  const navigate = useNavigate();

  const scheduleClick = () => {
    navigate("/ScheduleManagement");
  };

  const addAttendanceClick = () => {
    navigate("/AddAttendance");
  };

  return (
    <div>
      <Header />
      <div className="attendanceDetals">
        <div className="attendanceDetals-header">
          <div className="attendanceDetals-header-left">
            <TiThMenu size={29} className="menu-icon" />
            <h1>Attendance Details</h1>
          </div>
          <div className="attendanceDetals-header-right">
            <button
              onClick={addAttendanceClick}
              className="add-attendance-button"
            >
              Add attendance
            </button>
            <button className="download-attendance-button">
              Download daily attendance
            </button>
            <button
              onClick={scheduleClick}
              className="shedule-attendance-button"
            >
              Schedule
            </button>
          </div>
        </div>
        <div className="attendanceDetals-body">
          <div className="sort-button">
            <button className="sort-by-date-button">Sort by date</button>
          </div>
          <table>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
