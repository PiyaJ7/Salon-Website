import React, { useState } from "react";
import "./createPackages.css";
import close from "./images/close.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreatePackages() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const packageData = {
      title,
      type,
      description,
      price,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/packages/create",
        packageData
      );

      console.log(response);

      if (response.status === 201) {
        console.log(response);
        navigate("/PackageManagement");
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
    <div className="createPackage-page">
      <div className="createPackage-container">
        <form onSubmit={handleSubmit}>
          <button onClick={navigteBack} className="close-button">
            <img className="close-icon" src={close} alt="close" />
          </button>

          <h1>Create New Package</h1>

          <div className="craetePkg-input-box">
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <label htmlFor="title">Title of the new package</label>
          </div>

          <div className="craetePkg-select-box">
            <select
              id="type"
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="0">Select Package type</option>
              <option value="Daily Package">Daily Package</option>
              <option value="Event Package">Event Package</option>
              <option value="Seasonal Package">Seasonal Package</option>
            </select>
          </div>

          <div className="craetePkg-input-box">
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <label htmlFor="description">Description</label>
          </div>

          <div className="craetePkg-input-box">
            <input
              type="text"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <label htmlFor="price">Price (LKR)</label>
          </div>

          <button type="submit" className="createPackage-button">
            Create Package
          </button>
        </form>
      </div>
    </div>
  );
}
