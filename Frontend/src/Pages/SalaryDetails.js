import React, { useEffect, useState } from "react";
import "./salaryDetails.css";
import { TiThMenu } from "react-icons/ti";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import axios from "axios";

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
            <button className="download-salary-button">
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
