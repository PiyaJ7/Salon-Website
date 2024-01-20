import React, { useEffect, useState } from "react";
import "./updateSchedule.css";
import close from "./images/close.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function UpdateSchedule() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [contact, setcontact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/schedu/update/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setcontact(result.data.contact);
        setDate(result.data.date);
        setTime(result.data.time);
        setService(result.data.service);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/schedu/update/" + id, {
        name,
        contact,
        date,
        time,
        service,
      })
      .then((result) => {
        console.log(result);
        navigate("/ScheduleManagement");
      })
      .catch((err) => console.log(err));
  };

  const navigteBack = () => {
    navigate(-1);
  };

  return (
    <div className="updateSchedule-page">
      <div className="updateSchedule-container">
        <form onSubmit={handleSubmit}>
          <button onClick={navigteBack} className="close-button">
            <img className="close-icon" src={close} alt="cose" />
          </button>

          <h1>Update Schedule</h1>

          <div className="updateSchedule-input-box">
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

          <div className="updateSchedule-input-box">
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

          <div className="updateSchedule-date-input">
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

          <div className="updateSchedule-time-input">
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

          <div className="select-updateSchedule-box">
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
              <option value="Body care">Body care</option>
              <option value="Facial">Facial</option>
              <option value="Makeup">Makeup</option>
              <option value="ear piercing">ear piercing</option>
            </select>
          </div>

          <button type="submit" className="updateSchedule-button">
            Update Schedule
          </button>
        </form>
      </div>
    </div>
  );
}
