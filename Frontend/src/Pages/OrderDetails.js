import React from "react";
import "./orderDetails.css";
import { TiThMenu } from "react-icons/ti";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

export default function OrderDetails() {
  const navigate = useNavigate();

  const addOrderClick = () => {
    navigate("/AddOrder");
  };

  return (
    <div>
      <Header />
      <div className="orderDetails">
        <div className="orderDetails-header">
          <div className="orderDetails-header-left">
            <TiThMenu size={29} className="menu-icon" />
            <h1>Order Details</h1>
          </div>
          <div className="orderDetails-header-right">
            <button onClick={addOrderClick} className="add-new-order-button">
              Add new order
            </button>
            <button className="download-order-list-button">
              Download order list
            </button>
          </div>
        </div>
        <div className="orderDetails-body">
          <div className="sort-button">
            <button className="sort-by-type">Sort by type</button>
            <button className="sort-by-price">Sort by price</button>
          </div>
          <table>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Product</th>
              <th>Date</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
