import React, { useEffect, useState } from "react";
import "./updateSupplier.css";
import close from "./images/close.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function UpdateSupplier() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Sup/update/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setProduct(result.data.product);
        setContact(result.data.contact);
        setEmail(result.data.email);
        setStatus(result.data.status);
        setDate(result.data.date);
        setQuantity(result.data.quantity);
        setPrice(result.data.price);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/Sup/update/" + id, {
        name,
        product,
        contact,
        email,
        status,
        date,
        quantity,
        price,
      })
      .then((result) => {
        console.log(result);
        navigate("/SupplierDetails");
      })
      .catch((err) => console.log(err));
  };

  const navigteBack = () => {
    navigate(-1);
  };

  return (
    <div className="supplierDetails-page">
      <div className="updateSupplier-container">
        <form onSubmit={handleUpdate}>
          <button onClick={navigteBack} className="close-button">
            <img className="close-icon" src={close} />
          </button>

          <h1>Update supplier</h1>

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

          <div className="select-updateSupplier-box">
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

          <div className="updateSupplier-date-input">
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

          <button type="submit" className="updateSupplier-button">
            Update employee
          </button>
        </form>
      </div>
    </div>
  );
}
