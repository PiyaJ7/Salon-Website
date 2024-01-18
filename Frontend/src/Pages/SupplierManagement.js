import React from "react";
import "./supplierManagement.css";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

export default function SupplierManagement() {
  return (
    <div>
      <Header />
      <div className="supplierManagement">
        <div className="supplierManagement-header">
          <div className="supplierManagement-header-left">
            <Sidebar />
            <h1>Supplier Management</h1>
          </div>
        </div>
        <div className="supplierManagement-body">
          <div className="supplierManagement-block-body">
            <Link to="/SupplierDetails" className="supplierManagement-link">
              <div className="supplierManagement-blocks">Supplier details</div>
            </Link>
            <Link to="/OrderDetails" className="supplierManagement-link">
              <div className="supplierManagement-blocks">Order details</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
