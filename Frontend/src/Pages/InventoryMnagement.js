import React from "react";
import "./inventoryMnagement.css";
import { TiThMenu } from "react-icons/ti";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

export default function InventoryMnagement() {
  const navigate = useNavigate();

  const addProductClick = () => {
    navigate("/AddProduct");
  };

  return (
    <div>
      <Header />
      <div className="inventoryManagement">
        <div className="inventoryManagement-header">
          <div className="inventoryManagement-header-left">
            <Sidebar />
            <h1>Inventory Management</h1>
          </div>
          <div className="inventoryManagement-header-right">
            <button
              onClick={addProductClick}
              className="add-new-product-button"
            >
              Add new product
            </button>
            <button className="report-button">Report</button>
          </div>
        </div>
        <div className="inventoryManagement-body">
          <div className="sort-button">
            <button className="sort-by-type">Sort by type</button>
            <button className="sort-by-price">Sort by price</button>
          </div>
          <table>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Category</th>
              <th>Date</th>
              <th>Remaining qty</th>
              <th>Used qty</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
