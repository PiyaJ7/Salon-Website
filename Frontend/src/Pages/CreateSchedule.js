import React from 'react';
import './createSchedule.css';
import close from './images/close.png';
import { Link } from "react-router-dom";

export default function CreateSchedule() {
  return (
    <div className="createSchedule-page">
      <div className="createSchedule-container">
        <form action="">
        <Link to="/ScheduleManagement">
            <button className="close-button">
                <img className="close-icon" src={close} />
            </button>
          </Link>
          
          <h1>Create a Schedule</h1>

          <div className="input-box">
            <input type="text" id="" name="" required />
            <label for="">Name</label>
          </div>

          <div className="input-box">
            <input type="text" id="" name="" required />
            <label for="">Contact</label>
          </div>

          <div className="schedule-date-input">
          <label for="">Date</label> <br />
            <input type="date" id="" name="" required />
          </div>

          <div className="schedule-time-input">
          <label for="">Time</label> <br />
            <input type="time" id="" name="" required />
          </div>

          <div className="select-service-box">
            <select>
              <option value="0">Select Service type</option>
              <option value="1">Hair cutting</option>
              <option value="2">Hair coloring</option>
              <option value="3">Nail arts</option>
              <option value="1">Tinting eyelashes</option>
              <option value="2">Bady care</option>
              <option value="3">Facial</option>
              <option value="1">Makeup</option>
              <option value="2">ear piercing</option>
            </select>
          </div>

          <button type="submit" className="createSchedule-button">
            Create Schedule
          </button>
        </form>
      </div>
    </div>
  )
}
