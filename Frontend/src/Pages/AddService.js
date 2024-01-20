import React, { useState } from "react";
import "./addService.css";
import axios from "axios";
import close from "./images/close.png";
import { useNavigate } from "react-router-dom";

export default function AddService() {
  const navigate = useNavigate();
  const [sName, setSName] = useState("");
  const [sPrice, setSPrice] = useState("");
  const [sCategory, setSCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceData = {
      sName,
      sPrice,
      sCategory,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/services/create",
        serviceData
      );

      console.log(serviceData);

      if (response.status === 201) {
        console.log(response);
        navigate("/ServiceManagement");
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
    <div className="addservice-page">
      <div className="addservice-container">
        <form onSubmit={handleSubmit}>
          <button onClick={navigteBack} className="close-button">
            <img className="close-icon" src={close} alt="close" />
          </button>

          <h1>Add a Service</h1>

          <div className="addservice-input-box">
            <input
              type="text"
              id="sName"
              name="sName"
              value={sName}
              onChange={(e) => setSName(e.target.value)}
              required
            />
            <label htmlFor="sName">Enter a service name</label>
          </div>

          <div className="addservice-input-box">
            <input
              type="text"
              id="sPrice"
              name="sPrice"
              value={sPrice}
              onChange={(e) => setSPrice(e.target.value)}
              required
            />
            <label htmlFor="sPrice">Enter Price</label>
          </div>

          <div className="addservice-select-box">
            <select
              id="sCategory"
              name="sCategory"
              value={sCategory}
              onChange={(e) => setSCategory(e.target.value)}
              required
            >
              <option value="Not Selected">Select Category</option>
              <option value="Hair">Hair</option>
              <option value="Skin">Skin</option>
              <option value="Body">Body</option>
              <option value="Nail">Nail</option>
              <option value="Kids">Kids</option>
              <option value="Bridal">Bridal</option>
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
