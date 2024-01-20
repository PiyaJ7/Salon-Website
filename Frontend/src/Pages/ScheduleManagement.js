import React, { useEffect, useState } from "react";
import "./scheduleManagement.css";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import axios from "axios";

export default function ScheduleManagement() {
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/schedu/schedules")
      .then((items) => setSchedule(items.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/api/schedu/delete/" + id)
      .then((res) => {
        console.log("Delete successful:", res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const createScheduleClick = () => {
    navigate("/CreateSchedule");
  };

  const formatTime = (time) => {
    const options = { hour: "numeric", minute: "numeric", hour12: true };
    return new Date(`1970-01-01T${time}`).toLocaleTimeString([], options);
  };

  return (
    <div>
      <Header />
      <div className="scheduleManagement">
        <div className="scheduleManagement-header">
          <div className="scheduleManagement-header-left">
            <Sidebar />
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
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Date</th>
                <th>Time</th>
                <th>Service</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((schedule, index) => {
                return (
                  <tr key={schedule.id}>
                    <td>{index + 1}</td>
                    <td>{schedule.name}</td>
                    <td>{schedule.contact}</td>
                    <td>{schedule.date}</td>
                    <td>{formatTime(schedule.time)}</td>
                    <td>{schedule.service}</td>
                    <td>
                      <Link to={`/UpdateSchedule/${schedule._id}`}>
                        <button className="schedule-table-edit-button">
                          Edit
                        </button>
                      </Link>

                      <button
                        onClick={(e) => handleDelete(schedule._id)}
                        className="schedule-table-delete-button"
                      >
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
