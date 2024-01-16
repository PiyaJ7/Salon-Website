import React from "react";
import "./addSupplier.css";
import close from "./images/close.png";
import { useNavigate } from "react-router-dom";

export default function SupplierDetails() {
  const navigate = useNavigate();

  const navigteBack = () => {
    navigate(-1);
  };

  return (
    <div className="supplierDetails-page">
      <div className="addEmployee-container">
        <form action="">
          <button onClick={navigteBack} className="close-button">
            <img className="close-icon" src={close} />
          </button>

          <h1>Add new supplier</h1>

          <div className="input-box">
            <input type="text" id="" name="" required />
            <label for="">Name</label>
          </div>

          <div className="input-box">
            <input type="text" id="" name="" required />
            <label for="">Product</label>
          </div>

          <div className="input-box">
            <input type="text" id="" name="" required />
            <label for="">Contact</label>
          </div>

          <div className="input-box">
            <input type="text" id="" name="" required />
            <label for="">Email</label>
          </div>

          <div className="select-supplier-box">
            <select>
              <option value="0">Select Status</option>
              <option value="1">Approved</option>
              <option value="2">Declined</option>
            </select>
          </div>

          <div className="schedule-date-input">
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

          <button type="submit" className="supplierDetails-button">
            Add employee
          </button>
        </form>
      </div>
    </div>
  );
}