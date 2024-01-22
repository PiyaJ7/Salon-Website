import React, { useState } from "react";
import "./addSupplier.css";
import close from "./images/close.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SupplierDetails() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const supplierData = {
      name,
      product,
      contact,
      email,
      status,
      date,
      quantity,
      price,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/Sup/add",
        supplierData
      );

      console.log(supplierData);

      if (response.status === 201) {
        console.log(response);
        navigate("/SupplierDetails");
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
    <div className="supplierDetails-page">
      <div className="supplierDetails-container">
        <form onSubmit={handleSubmit}>
          <button onClick={navigteBack} className="close-button">
            <img className="close-icon" src={close} />
          </button>

          <h1>Add new supplier</h1>

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
              id="product"
              name="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              required
            />
            <label htmlFor="product">Product</label>
          </div>

          <div className="input-box">
            <input
              type="text"
              id="contact"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
            <label htmlFor="contact">Contact</label>
          </div>

          <div className="input-box">
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="select-supplier-box">
            <select
              id="status"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="Not Selected">Select Status</option>
              <option value="Approved">Approved</option>
              <option value="Declined">Declined</option>
            </select>
          </div>

          <div className="schedule-date-input">
            <label htmlFor="">Date</label> <br />
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="input-box">
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
            <label htmlFor="quantity">Quantity</label>
          </div>

          <div className="input-box">
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

          <button type="submit" className="supplierDetails-button">
            Add Supplier
          </button>
        </form>
      </div>
    </div>
  );
}
