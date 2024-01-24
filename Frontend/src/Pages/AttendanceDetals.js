import React, { useEffect, useState } from "react";
import "./attendanceDetals.css";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import axios from "axios";

export default function AttendanceDetals() {
  const navigate = useNavigate();
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/attendances/data")
      .then((items) => setAttendance(items.data))
      .catch((err) => console.log(err));
  }, []);

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
            <Sidebar />
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
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {attendance.map((attendance, index) => {
                return (
                  <tr key={attendance.id}>
                    <td>{index + 1}</td>
                    <td>{attendance.date}</td>
                    <td>{attendance.name}</td>
                    <td>
                      <button className="service-table-edit-button">
                        Edit
                      </button>
                      <button className="service-table-delete-button">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
