import React, { useState } from "react";
import "./createSchedule.css";
import close from "./images/close.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateSchedule() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [contact, setcontact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scheduleData = {
      name,
      contact,
      date,
      time,
      service,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/schedu/make",
        scheduleData
      );

      console.log(scheduleData);

      if (response.status === 201) {
        console.log(response);
        navigate("/ScheduleManagement");
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
    <div className="createSchedule-page">
      <div className="createSchedule-container">
        <form onSubmit={handleSubmit}>
          <button onClick={navigteBack} className="close-button">
            <img className="close-icon" src={close} alt="close" />
          </button>

          <h1>Create a Schedule</h1>

          <div className="input-box">
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="name">Name</label>
          </div>

          <div className="input-box">
            <input
              type="text"
              id="contact"
              name="contact"
              value={contact}
              onChange={(e) => setcontact(e.target.value)}
              required
            />
            <label htmlFor="contact">Contact</label>
          </div>

          <div className="schedule-date-input">
            <label htmlFor="date">Date</label> <br />
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="schedule-time-input">
            <label htmlFor="time">Time</label> <br />
            <input
              type="time"
              id="time"
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>

          <div className="select-schedule-box">
            <select
              id="service"
              name="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="Not Selected">Select Service type</option>
              <option value="Hair cutting">Hair cutting</option>
              <option value="Hair coloring">Hair coloring</option>
              <option value="Nail arts">Nail arts</option>
              <option value="Tinting eyelashes">Tinting eyelashes</option>
              <option value="Bady care">Bady care</option>
              <option value="Facial">Facial</option>
              <option value="Makeup">Makeup</option>
              <option value="ear piercing">ear piercing</option>
            </select>
          </div>

          <button type="submit" className="createSchedule-button">
            Create Schedule
          </button>
        </form>
      </div>
    </div>
  );
}
