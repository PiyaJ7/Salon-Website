import React from "react";
import "./dashboard.css";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className="dashboard-page">
        <div className="dashboard-header">
          <div className="dashboard-header-left">
            <Sidebar />
            <h1>Dashboard</h1>
          </div>
        </div>
        <div className="dashboard-body">
          <div className="dashboard-block-body">
            <Link to="/PackageManagement" className="dashboard-link">
              <div className="dashboard-blocks">Package Management</div>
            </Link>
            <Link to="/ServiceManagement" className="dashboard-link">
              <div className="dashboard-blocks">Service Management</div>
            </Link>
            <Link to="/FinanceManagement" className="dashboard-link">
              <div className="dashboard-blocks">Finance Management</div>
            </Link>
            <Link to="/AttendanceDetals" className="dashboard-link">
              <div className="dashboard-blocks">Schedule Management</div>
            </Link>
            <Link to="/InventoryMnagement" className="dashboard-link">
              <div className="dashboard-blocks">Inventory Management</div>
            </Link>
            <Link to="/AppointmentManagement" className="dashboard-link">
              <div className="dashboard-blocks">Appointment Management</div>
            </Link>
            <Link to="/SupplierManagement" className="dashboard-link">
              <div className="dashboard-blocks">Supplier Management</div>
            </Link>
            <Link to="/EmployeeManagement" className="dashboard-link">
              <div className="dashboard-blocks">Employee Management</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
