import React, { useEffect, useState } from "react";
import "./employeeManagement.css";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import axios from "axios";

export default function EmployeeManagement() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/employees/emps")
      .then((items) => setEmployee(items.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/api/employees/delete/" + id)
      .then((res) => {
        console.log("Delete successful:", res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

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
            <Sidebar />
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
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>EmployeeName</th>
                <th>NIC</th>
                <th>Joined Date</th>
                <th>Position</th>
                <th>Address</th>
                <th>Contact No</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employee.map((employee, index) => {
                return (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.NIC}</td>
                    <td>{employee.joinedDate}</td>
                    <td>{employee.position}</td>
                    <td>{employee.address}</td>
                    <td>{employee.phoneNo}</td>
                    <td>
                      <Link to={`/UpdateEmployee/${employee._id}`}>
                        <button className="employee-table-edit-button">
                          Edit
                        </button>
                      </Link>

                      <button
                        onClick={(e) => handleDelete(employee._id)}
                        className="employee-table-delete-button"
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
