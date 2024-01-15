import React from "react";
import "./appointmentManagement.css";
import { TiThMenu } from "react-icons/ti";
import Header from "../Components/Header";

export default function AppointmentManagement() {
  return (
    <div>
      <Header />
      <div className="appointmentManagement">
        <div className="appointmentManagement-header">
          <div className="appointmentManagement-header-left">
            <TiThMenu size={29} className="menu-icon" />
            <h1>Salon Appointments</h1>
          </div>
          <div className="appointmentManagement-header-right">
            <button className="download-appointment-button">
              Download Appointments
            </button>
          </div>
        </div>
        <div className="appointmentManagement-body">
          <div className="sort-button">
            <button className="sort-by-name-button">Sort by name</button>
          </div>
          <table>
            <tr>
              <th>Name</th>
              <th>Contact No</th>
              <th>Email</th>
              <th>Date</th>
              <th>Time</th>
              <th>Service</th>
              <th>Action</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
