import React, { useEffect, useState } from "react";
import "./salaryDetails.css";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import axios from "axios";
import logo from "./images/logo.png";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function SalaryDetails() {
  const navigate = useNavigate();
  const [salary, setSalary] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/sal/sals")
      .then((items) => setSalary(items.data))
      .catch((err) => console.log(err));
  }, []);

  const addSalaryClick = () => {
    navigate("/AddSalary");
  };

  const downloadPDF = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/sal/sals");
      const SalaryData = response.data;

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
      doc.text("Salary Sheet", 80, 60);
      doc.setFont("normal");

      doc.setDrawColor(0);

      const columns = [
        { header: "Employee ID", dataKey: "empID" },
        { header: "Month", dataKey: "month" },
        { header: "Working Dates", dataKey: "wdays" },
        { header: "Pay Rate(LKR)", dataKey: "rate" },
        { header: "Net Salary(LKR)", dataKey: "netSalary" },
      ];

      const rows = SalaryData.map((employee) => ({
        empID: employee.id,
        month: employee.month,
        wdays: employee.workingDays,
        rate: employee.payRate,
        netSalary: employee.workingDays * employee.payRate,
      }));

      autoTable(doc, { columns, body: rows, startY: 70 });

      doc.save("Salary sheet.pdf");
    } catch (error) {
      console.error("Error fetching or generating PDF:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="salaryDetails">
        <div className="salaryDetails-header">
          <div className="salaryDetails-header-left">
            <Sidebar />
            <h1>Salary Detals</h1>
          </div>
          <div className="salaryDetails-header-right">
            <button onClick={addSalaryClick} className="add-salary-button">
              Add salary
            </button>
            <button onClick={downloadPDF} className="download-salary-button">
              Download salary sheet
            </button>
          </div>
        </div>
        <div className="salaryDetails-body">
          <div className="sort-button">
            <button className="sort-by-id-button">Sort by ID</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Month</th>
                <th>Working Days</th>
                <th>Pay rate (LKR)</th>
                <th>Net Salary (LKR)</th>
              </tr>
            </thead>
            <tbody>
              {salary.map((salary) => {
                return (
                  <tr key={salary.id}>
                    <td>{salary.id}</td>
                    <td>{salary.month}</td>
                    <td>{salary.workingDays}</td>
                    <td>{salary.payRate}</td>
                    <td>{salary.workingDays * salary.payRate}</td>
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
