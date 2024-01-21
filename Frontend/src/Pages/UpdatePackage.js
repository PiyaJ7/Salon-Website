import React, { useEffect, useState } from "react";
import "./updatePackage.css";
import close from "./images/close.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function UpdatePackage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/packages/update/" + id)
      .then((result) => {
        console.log(result);
        setTitle(result.data.title);
        setType(result.data.type);
        setDescription(result.data.description);
        setPrice(result.data.price);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/packages/update/" + id, {
        title,
        type,
        description,
        price,
      })
      .then((result) => {
        console.log(result);
        navigate("/PackageManagement");
      })
      .catch((err) => console.log(err));
  };

  const navigteBack = () => {
    navigate(-1);
  };

  return (
    <div className="createPackage-page">
      <div className="createPackage-container">
        <form onSubmit={handleUpdate}>
          <button onClick={navigteBack} className="close-button">
            <img className="close-icon" src={close} alt="close" />
          </button>

          <h1>Update Package</h1>

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
            Update Package
          </button>
        </form>
      </div>
    </div>
  );
}
