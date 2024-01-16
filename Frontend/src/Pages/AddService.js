import React from "react";
import "./addService.css";
import close from "./images/close.png";
import { useNavigate } from "react-router-dom";

export default function AddService() {
  const navigate = useNavigate();

  const navigteBack = () => {
    navigate(-1);
  };
  return (
    <div className="addservice-page">
      <div className="addservice-container">
        <form action="">
          <button onClick={navigteBack} className="close-button">
            <img className="close-icon" src={close} />
          </button>

          <h1>Add a Service</h1>

          <div className="addservice-input-box">
            <input type="text" id="" name="" required />
            <label for="">Enter a service name</label>
          </div>

          <div className="addservice-input-box">
            <input type="text" id="" name="" required />
            <label for="">Enter Price</label>
          </div>

          <div className="addservice-select-box">
            <select>
              <option value="0">Select Category</option>
              <option value="1">Hair</option>
              <option value="2">Skin</option>
              <option value="3">Body</option>
              <option value="4">Nail</option>
              <option value="5">Kids</option>
              <option value="6">Bridal</option>
            </select>
          </div>

          <button type="submit" className="addservice-button">
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
}
