import React from "react";
import "./serviceManagement.css";
import { TiThMenu } from "react-icons/ti";
import Header from "../Components/Header";

export default function ServiceManagement() {
  return (
    <div>
      <Header />
      <div className="serviceManagement">
        <div className="serviceManagement-header">
          <div className="serviceManagement-header-left">
            <TiThMenu size={29} className="menu-icon" />
            <h1>Available Services</h1>
          </div>
          <div className="serviceManagement-header-right">
            <button className="generate-service-button">
              Generate a report
            </button>
            <button className="add-service-button">Add New Service</button>
          </div>
        </div>
        <div className="serviceManagement-body">
          <table>
            <tr>
              <th>Service ID</th>
              <th>Service name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
