import React, { useEffect, useState } from "react";
import "./attendanceDetals.css";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import axios from "axios";
import logo from "./images/logo.png";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function AttendanceDetals() {
  const [attendance, setAttendance] = useState([]);
  const [sortCriteria, setSortCriteria] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/attendances/data")
      .then((items) => setAttendance(items.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSort = (criteria) => {
    if (sortCriteria === criteria) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortCriteria(criteria);
      setSortOrder("asc");
    }
  };

  const sortedAttendance = [...attendance].sort((a, b) => {
    if (sortCriteria === "date") {
      return sortOrder === "asc"
        ? a.date.localeCompare(b.date)
        : b.date.localeCompare(a.date);
    }
    return 0;
  });

  const calculateWorkingHours = (timeIn, timeOut) => {
    const [hoursIn, minutesIn, ampmIn] = timeIn
      .match(/(\d+):(\d+) ([APMapm]{2})/)
      .slice(1);
    const [hoursOut, minutesOut, ampmOut] = timeOut
      .match(/(\d+):(\d+) ([APMapm]{2})/)
      .slice(1);

    let totalHoursIn = parseInt(hoursIn, 10);
    let totalHoursOut = parseInt(hoursOut, 10);

    if (ampmIn.toUpperCase() === "PM" && totalHoursIn !== 12) {
      totalHoursIn += 12;
    }

    if (ampmOut.toUpperCase() === "PM" && totalHoursOut !== 12) {
      totalHoursOut += 12;
    }

    const totalMinutesIn = totalHoursIn * 60 + parseInt(minutesIn, 10);
    const totalMinutesOut = totalHoursOut * 60 + parseInt(minutesOut, 10);

    const workingMinutes = totalMinutesOut - totalMinutesIn;

    const workingHours = Math.floor(workingMinutes / 60);
    const workingMinutesRemainder = workingMinutes % 60;

    return `${workingHours}h ${workingMinutesRemainder}m`;
  };

  const downloadPDF = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/attendances/data"
      );
      const AttendanceData = response.data;

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
      doc.text("Attendance Details", 80, 60);
      doc.setFont("normal");

      doc.setDrawColor(0);

      const columns = [
        { header: "ID", dataKey: "index" },
        { header: "Name", dataKey: "name" },
        { header: "Date", dataKey: "date" },
        { header: "Time In", dataKey: "timeIn" },
        { header: "Time Out", dataKey: "timeOut" },
      ];

      const rows = AttendanceData.map((attendance, index) => ({
        index: index + 1,
        name: attendance.name,
        date: attendance.date,
        timeIn: attendance.inTime,
        timeOut: attendance.outTime,
      }));

      autoTable(doc, { columns, body: rows, startY: 70 });

      doc.save("Attendance details.pdf");
    } catch (error) {
      console.error("Error fetching or generating PDF:", error);
    }
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
              onClick={downloadPDF}
              className="download-attendance-button"
            >
              Download daily attendance
            </button>
          </div>
        </div>
        <div className="attendanceDetals-body">
          <div className="sort-button">
            <button
              onClick={() => handleSort("date")}
              className="sort-by-date-button"
            >
              Sort by date
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>Time In</th>
                <th>Time Out</th>
                <th>Working Hours</th>
              </tr>
            </thead>
            <tbody>
              {sortedAttendance.map((attendance, index) => {
                const workingHours = calculateWorkingHours(
                  attendance.inTime,
                  attendance.outTime
                );
                return (
                  <tr key={attendance.id}>
                    <td>{index + 1}</td>
                    <td>{attendance.name}</td>
                    <td>{attendance.date}</td>
                    <td>{attendance.inTime}</td>
                    <td>{attendance.outTime}</td>
                    <td>{workingHours}</td>
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
