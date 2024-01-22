import React, { useEffect, useState } from "react";
import "./appointmentManagement.css";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import axios from "axios";

export default function AppointmentManagement() {
  const [appointment, setAppointment] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Book/appointments")
      .then((items) => setAppointment(items.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id, name) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${name}"?`
    );

    if (confirmDelete) {
      axios
        .delete("http://localhost:8000/api/Book/delete/" + id)
        .then((res) => {
          console.log("Delete successful:", res);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <Header />
      <div className="appointmentManagement">
        <div className="appointmentManagement-header">
          <div className="appointmentManagement-header-left">
            <Sidebar />
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
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact No</th>
                <th>Email</th>
                <th>Date</th>
                <th>Time</th>
                <th>Service</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointment.map((appointment) => {
                return (
                  <tr key={appointment.id}>
                    <td>{appointment.name}</td>
                    <td>{appointment.contact}</td>
                    <td>{appointment.email}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.time}</td>
                    <td>{appointment.service}</td>
                    <td>
                      <button
                        onClick={(e) =>
                          handleDelete(appointment._id, appointment.name)
                        }
                        className="appointment-table-delete-button"
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
