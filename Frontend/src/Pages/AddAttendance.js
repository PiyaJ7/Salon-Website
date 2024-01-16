import React from "react";
import "./addAttendance.css";
import { TiThMenu } from "react-icons/ti";
import Header from "../Components/Header";

export default function AddAttendance() {
  return (
    <div>
      <Header />
      <div className="addAttendance">
        <div className="addAttendance-header">
          <div className="addAttendance-header-left">
            <TiThMenu size={29} className="menu-icon" />
            <h1>Add Employee Attendance</h1>
          </div>
        </div>
        <div className="addAttendance-body">
          <table>
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Action</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
