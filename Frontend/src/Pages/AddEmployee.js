import React from 'react';
import './addEmployee.css';
import close from './images/close.png';
import { Link } from "react-router-dom";

export default function AddEmployee() {
  return (
    <div className="addEmployee-page">
      <div className="addEmployee-container">
        <form action="">
        <Link to="/EmployeeManagement">
            <button className="close-button">
                <img className="close-icon" src={close} />
            </button>
          </Link>
          
          <h1>Add new employee</h1>

          <div className="input-box">
            <input type="text" id="" name="" required />
            <label for="">Name</label>
          </div>

          <div className="input-box">
            <input type="text" id="" name="" required />
            <label for="">Employee ID</label>
          </div>

          <div className="input-box">
            <input type="text" id="" name="" required />
            <label for="">NIC</label>
          </div>

          <div className="schedule-date-input">
          <label for="">Joined date</label> <br />
            <input type="date" id="" name="" required />
          </div>

          <div className="select-position-box">
            <select>
              <option value="0">Select Position</option>
              <option value="1">Hair dresser</option>
              <option value="3">Nail technicial</option>
              <option value="1">Wax specialist</option>
              <option value="2">Colorist</option>
            </select>
          </div>

          <div className="input-box">
            <input type="text" id="" name="" required />
            <label for="">Address</label>
          </div>

          <div className="input-box">
            <input type="text" id="" name="" required />
            <label for="">Contact No</label>
          </div>

          <button type="submit" className="addEmployee-button">
            Add employee
          </button>
        </form>
      </div>
    </div>
  )
}
