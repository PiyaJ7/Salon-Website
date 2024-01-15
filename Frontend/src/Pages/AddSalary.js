import React from "react";
import "./addSalary.css";
import close from "./images/close.png";
import { Link } from "react-router-dom";

export default function AddSalary() {
  return (
    <div className="addSalary-page">
      <div className="addSalary-container">
        <form action="">
          <Link to="/SalaryDetails">
            <button className="close-button">
              <img className="close-icon" src={close} />
            </button>
          </Link>

          <h1>Add Salary</h1>

          <div className="input-box">
            <input type="text" id="" name="" required />
            <label for="">Employee ID</label>
          </div>

          <div className="input-box">
            <input type="text" id="" name="" required />
            <label for="">Month</label>
          </div>

          <div className="input-box">
            <input type="text" id="" name="" required />
            <label for="">Working Days</label>
          </div>

          <div className="input-box">
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
