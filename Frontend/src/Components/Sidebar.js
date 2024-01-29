import React from "react";
import "./sidebar.css";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const clickDashboard = () => {
    navigate("/Dashboard");
    hideSidebar();
  };

  const clickPackageManagement = () => {
    navigate("/PackageManagement");
    hideSidebar();
  };

  const clickServiceManagement = () => {
    navigate("/ServiceManagement");
    hideSidebar();
  };

  const clickFinanceManagement = () => {
    navigate("/FinanceManagement");
    hideSidebar();
  };

  const clickScheduleManagement = () => {
    navigate("/ScheduleManagement");
    hideSidebar();
  };

  const clickAttendanceManagement = () => {
    navigate("/AttendanceDetals");
    hideSidebar();
  };

  const clickInventoryManagement = () => {
    navigate("/InventoryMnagement");
    hideSidebar();
  };

  const clickAppointmentManagement = () => {
    navigate("/AppointmentManagement");
    hideSidebar();
  };

  const clickSupplierManagement = () => {
    navigate("/SupplierManagement");
    hideSidebar();
  };

  const clickEmployeeManagement = () => {
    navigate("/EmployeeManagement");
    hideSidebar();
  };

  function showSidebar() {
    const sidebar = document.querySelector(".sidebar-layer");
    sidebar.style.display = "flex";
  }

  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar-layer");
    sidebar.style.display = "none";
  }

  return (
    <div className="side-bar">
      <button onClick={showSidebar} className="sidebar-menu-button">
        <TiThMenu size={29} />
      </button>
      <div className="sidebar-layer">
        <div className="side-bar-display">
          <button onClick={hideSidebar} className="sidebar-close-button">
            <IoClose size={29} />
          </button>
          <div onClick={clickDashboard} className="dashboard-item">
            Dashboard
          </div>
          <div onClick={clickPackageManagement} className="dashboard-item">
            Package Management
          </div>
          <div onClick={clickServiceManagement} className="dashboard-item">
            Service Management
          </div>
          <div onClick={clickFinanceManagement} className="dashboard-item">
            Finance Management
          </div>
          <div onClick={clickScheduleManagement} className="dashboard-item">
            Schedule Management
          </div>
          <div onClick={clickAttendanceManagement} className="dashboard-item">
            Attendance Management
          </div>
          <div onClick={clickInventoryManagement} className="dashboard-item">
            Inventory Management
          </div>
          <div onClick={clickAppointmentManagement} className="dashboard-item">
            Appointment Management
          </div>
          <div onClick={clickSupplierManagement} className="dashboard-item">
            Supplier Management
          </div>
          <div onClick={clickEmployeeManagement} className="dashboard-item">
            Employee Management
          </div>
        </div>
      </div>
    </div>
  );
}
