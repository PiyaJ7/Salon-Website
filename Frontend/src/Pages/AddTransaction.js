import React from "react";
import "./addTransaction.css";
import close from "./images/close.png";
import { useNavigate } from "react-router-dom";

export default function AddTransaction() {
  const navigate = useNavigate();

  const navigteBack = () => {
    navigate(-1);
  };

  return (
    <div className="addTransaction-page">
      <div className="addTransaction-container">
        <form action="">
          <button onClick={navigteBack} className="close-button">
            <img className="close-icon" src={close} />
          </button>

          <h1>Add transaction details</h1>

          <div className="addTransaction-input-box">
            <input type="text" id="" name="" required />
            <label for="">Amount (LKR)</label>
          </div>

          <div className="addTransaction-select-box">
            <select>
              <option value="0">Select transaction type</option>
              <option value="1">Income</option>
              <option value="2">Expenses</option>
            </select>
          </div>

          <div className="addTransaction-date-input">
            <label for="">Date</label> <br />
            <input type="date" id="" name="" required />
          </div>

          <div className="addTransaction-input-box">
            <input type="text" id="" name="" required />
            <label for="">Description</label>
          </div>

          <div className="addTransaction-input-box">
            <input type="text" id="" name="" required />
            <label for="">Reference</label>
          </div>

          <button type="submit" className="addTransaction-button">
            Create transaction
          </button>
        </form>
      </div>
    </div>
  );
}
