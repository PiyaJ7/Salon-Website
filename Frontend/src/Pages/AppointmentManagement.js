import React, { useEffect, useState } from "react";
import "./appointmentManagement.css";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import axios from "axios";
import logo from "./images/logo.png";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function AppointmentManagement() {
  const [appointment, setAppointment] = useState([]);
  const [sortCriteria, setSortCriteria] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

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

  const handleSort = (criteria) => {
    if (sortCriteria === criteria) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortCriteria(criteria);
      setSortOrder("asc");
    }
  };

  const sortedAppointment = [...appointment].sort((a, b) => {
    if (sortCriteria === "name") {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    }
    return 0;
  });

  const downloadPDF = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/Book/appointments"
      );
      const appointmentData = response.data;

      const doc = new jsPDF();

      doc.addImage(logo, "PNG", 10, 5, 40, 40);

      const headerX = doc.internal.pageSize.width - 20;

      doc.setFontSize(14);
      doc.text("Salon JAYDE", headerX, 20, { align: "right" });

      doc.setFontSize(12);
      doc.text("43/8, Flower Road, Colombo 07", headerX, 27, {
        align: "right",
      });
      doc.setFontSize(10);
      doc.text("077-3526412/071-5263491", headerX, 32, {
        align: "right",
      });

      doc.setLineWidth(0.5);
      doc.line(8, 42, 200, 42);

      doc.setFont("bold");
      doc.setFontSize(20);
      doc.text("Appointment Details", 80, 60);
      doc.setFont("normal");

      doc.setDrawColor(0);

      const columns = [
        { header: "Name", dataKey: "name" },
        { header: "Contact No", dataKey: "contact" },
        { header: "Email", dataKey: "email" },
        { header: "Date", dataKey: "date" },
        { header: "Time", dataKey: "time" },
        { header: "Service", dataKey: "service" },
      ];

      const rows = appointmentData.map((appointment) => ({
        name: appointment.name,
        contact: appointment.contact,
        email: appointment.email,
        date: appointment.date,
        time: appointment.time,
        service: appointment.service,
      }));

      autoTable(doc, { columns, body: rows, startY: 70 });

      doc.save("Appointment details.pdf");
    } catch (error) {
      console.error("Error fetching or generating PDF:", error);
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
            <button
              onClick={downloadPDF}
              className="download-appointment-button"
            >
              Download Appointments
            </button>
          </div>
        </div>
        <div className="appointmentManagement-body">
          <div className="sort-button">
            <button
              className="sort-by-name-button"
              onClick={() => handleSort("name")}
            >
              Sort by name
            </button>
          </div>
          <table id="appointmentTable">
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
              {sortedAppointment.map((appointment) => {
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
