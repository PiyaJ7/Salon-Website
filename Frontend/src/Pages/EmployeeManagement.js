import React from "react";
import "./employeeManagement.css";
import { TiThMenu } from "react-icons/ti";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

export default function EmployeeManagement() {
  const navigate = useNavigate();

  const addEmployeeClick = () => {
    navigate("/AddEmployee");
  };

  const employeesalaryClick = () => {
    navigate("/SalaryDetails");
  };

  return (
    <div>
      <Header />
      <div className="employeeManagement">
        <div className="employeeManagement-header">
          <div className="employeeManagement-header-left">
            <TiThMenu size={29} className="menu-icon" />
            <h1>Employee Detals</h1>
          </div>
          <div className="employeeManagement-header-right">
            <button onClick={addEmployeeClick} className="add-employee-button">
              Add employee
            </button>
            <button className="download-employee-list-button">
              Download employee list
            </button>
            <button
              onClick={employeesalaryClick}
              className="employee-salary-button"
            >
              Employee Salary
            </button>
          </div>
        </div>
        <div className="employeeManagement-body">
          <div className="sort-button">
            <button className="sort-by-name-button">Sort by name</button>
          </div>
          <table>
            <tr>
              <th>EmployeeName</th>
              <th>Employee ID</th>
              <th>NIC</th>
              <th>Joined Date</th>
              <th>Position</th>
              <th>Address</th>
              <th>Contact No</th>
              <th>Action</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
