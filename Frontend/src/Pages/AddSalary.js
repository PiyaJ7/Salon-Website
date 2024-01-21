import React, { useState } from "react";
import "./addSalary.css";
import close from "./images/close.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddSalary() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [month, setMonth] = useState("");
  const [workingDays, setWorkingDays] = useState("");
  const [payRate, setPayRate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const SalaryData = {
      id,
      month,
      workingDays,
      payRate,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/sal/adds",
        SalaryData
      );

      console.log(SalaryData);

      if (response.status === 201) {
        console.log(response);
        navigate("/SalaryDetails");
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const navigteBack = () => {
    navigate(-1);
  };

  return (
    <div className="addSalary-page">
      <div className="addSalary-container">
        <form onSubmit={handleSubmit}>
          <button onClick={navigteBack} className="close-button">
            <img className="close-icon" src={close} />
          </button>

          <h1>Add Salary</h1>

          <div className="addSalary-input-box">
            <input
              type="text"
              id="id"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
            <label htmlFor="id">Employee ID</label>
          </div>

          <div className="addSalary-input-box">
            <input
              type="text"
              id="month"
              name="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              required
            />
            <label htmlFor="month">Month</label>
          </div>

          <div className="addSalary-input-box">
            <input
              type="text"
              id="workingDays"
              name="workingDays"
              value={workingDays}
              onChange={(e) => setWorkingDays(e.target.value)}
              required
            />
            <label htmlFor="workingDays">Working Days</label>
          </div>

          <div className="addSalary-input-box">
            <input
              type="text"
              id="payRate"
              name="payRate"
              value={payRate}
              onChange={(e) => setPayRate(e.target.value)}
              required
            />
            <label htmlFor="payRate">Pay Rate</label>
          </div>

          <button type="submit" className="addSalary-button">
            Add Salary
          </button>
        </form>
      </div>
    </div>
  );
}
