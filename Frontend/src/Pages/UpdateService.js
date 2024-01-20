import React, { useEffect, useState } from "react";
import "./updateService.css";
import close from "./images/close.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function UpdateService() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [sName, setSName] = useState("");
  const [sPrice, setSPrice] = useState("");
  const [sCategory, setSCategory] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/services/update/" + id)
      .then((result) => {
        console.log(result);
        setSName(result.data.sName);
        setSPrice(result.data.sPrice);
        setSCategory(result.data.sCategory);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/services/update/" + id, {
        sName,
        sPrice,
        sCategory,
      })
      .then((result) => {
        console.log(result);
        navigate("/ServiceManagement");
      })
      .catch((err) => console.log(err));
  };

  const navigteBack = () => {
    navigate(-1);
  };

  return (
    <div className="updateservice-page">
      <div className="updateservice-container">
        <form onSubmit={updateSubmit}>
          <button onClick={navigteBack} className="close-button">
            <img className="close-icon" src={close} alt="close" />
          </button>

          <h1>Update Service</h1>

          <div className="updateservice-input-box">
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

          <div className="updateservice-input-box">
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

          <div className="updateservice-select-box">
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

          <button type="submit" className="updateservice-button">
            Update Service
          </button>
        </form>
      </div>
    </div>
  );
}
