import React, { useEffect, useState } from "react";
import "./employeeManagement.css";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import axios from "axios";
import logo from "./images/logo.png";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function EmployeeManagement() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);
  const [sortCriteria, setSortCriteria] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/employees/emps")
      .then((items) => setEmployee(items.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id, name) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${name}"?`
    );

    if (confirmDelete) {
      axios
        .delete("http://localhost:8000/api/employees/delete/" + id)
        .then((res) => {
          console.log("Delete successful:", res);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  const addEmployeeClick = () => {
    navigate("/AddEmployee");
  };

  const employeesalaryClick = () => {
    navigate("/SalaryDetails");
  };

  const handleSort = (criteria) => {
    if (sortCriteria === criteria) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortCriteria(criteria);
      setSortOrder("asc");
    }
  };

  const sortedEmployee = [...employee].sort((a, b) => {
    if (sortCriteria === "name") {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (sortCriteria === "id") {
      return sortOrder === "asc"
        ? a.id.localeCompare(b.id)
        : b.id.localeCompare(a.id);
    }
    return 0;
  });

  const downloadPDF = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/employees/emps"
      );
      const employeeData = response.data;

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
      doc.text("Employee List", 80, 60);
      doc.setFont("normal");

      doc.setDrawColor(0);

      const columns = [
        { header: "Employee ID", dataKey: "empID" },
        { header: "Employee Name", dataKey: "empName" },
        { header: "NIC", dataKey: "nic" },
        { header: "Joined Date", dataKey: "date" },
        { header: "Position", dataKey: "position" },
        { header: "Address", dataKey: "address" },
        { header: "Contact No", dataKey: "contact" },
      ];

      const rows = employeeData.map((employee) => ({
        empID: employee.id,
        empName: employee.name,
        nic: employee.NIC,
        date: employee.joinedDate,
        position: employee.position,
        address: employee.address,
        contact: employee.phoneNo,
      }));

      autoTable(doc, { columns, body: rows, startY: 70 });

      doc.save("Employee List.pdf");
    } catch (error) {
      console.error("Error fetching or generating PDF:", error);
    }
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
            <button
              onClick={downloadPDF}
              className="download-employee-list-button"
            >
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
            <button
              className="sort-by-id-button"
              onClick={() => handleSort("id")}
            >
              Sort by ID
            </button>
            <button
              className="sort-by-name-button"
              onClick={() => handleSort("name")}
            >
              Sort by name
            </button>
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
              {sortedEmployee.map((employee, index) => {
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
                        onClick={(e) =>
                          handleDelete(employee._id, employee.name)
                        }
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
