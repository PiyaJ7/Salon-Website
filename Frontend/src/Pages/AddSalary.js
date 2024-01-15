import React from "react";
import "./addSalary.css";
import close from "./images/close.png";
import { useNavigate } from "react-router-dom";

export default function AddSalary() {
  const navigate = useNavigate();

  const navigteBack = () => {
    navigate(-1);
  };

  return (
    <div className="addSalary-page">
      <div className="addSalary-container">
        <form action="">
          <button onClick={navigteBack} className="close-button">
            <img className="close-icon" src={close} />
          </button>

          <h1>Add Salary</h1>

          <div className="addSalary-input-box">
            <input type="text" id="" name="" required />
            <label for="">Employee ID</label>
          </div>

          <div className="addSalary-input-box">
            <input type="text" id="" name="" required />
            <label for="">Month</label>
          </div>

          <div className="addSalary-input-box">
            <input type="text" id="" name="" required />
            <label for="">Working Days</label>
          </div>

          <div className="addSalary-input-box">
            <input type="text" id="" name="pice" required />
            <label for="">Pay Rate</label>
          </div>

          <button type="submit" className="addSalary-button">
            Add Salary
          </button>
        </form>
      </div>
    </div>
  );
}
