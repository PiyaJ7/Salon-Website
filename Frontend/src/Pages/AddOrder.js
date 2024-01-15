import React from "react";
import "./addOrder.css";
import close from "./images/close.png";
import { Link } from "react-router-dom";

export default function AddOrder() {
  return (
    <div className="addOrder-page">
      <div className="addOrder-container">
        <form action="">
          <Link to="/OrderDetails">
            <button className="close-button">
              <img className="close-icon" src={close} />
            </button>
          </Link>

          <h1>Add new order</h1>

          <div className="input-box">
            <input type="text" id="" name="" required />
            <label for="">Name</label>
          </div>

          <div className="input-box">
            <input type="text" id="" name="" required />
            <label for="">Product</label>
          </div>

          <div className="order-date-input">
            <label for="">Date</label> <br />
            <input type="date" id="" name="" required />
          </div>

          <div className="input-box">
            <input type="text" id="" name="" required />
            <label for="">Quantity</label>
          </div>

          <div className="input-box">
            <input type="text" id="" name="" required />
            <label for="">Price (LKR)</label>
          </div>

          <div className="select-order-box">
            <select>
              <option value="0">Select Status</option>
              <option value="1">Recieved Order</option>
              <option value="2">Not Recieved Order</option>
            </select>
          </div>

          <button type="submit" className="addOrder-button">
            Add order
          </button>
        </form>
      </div>
    </div>
  );
}
