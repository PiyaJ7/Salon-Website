import React, { useEffect, useState } from "react";
import "./updateOrder.css";
import close from "./images/close.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function UpdateOrder() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [date, setDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Ord/update/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setProduct(result.data.product);
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
      .put("http://localhost:8000/api/Ord/update/" + id, {
        name,
        product,
        status,
        date,
        quantity,
        price,
      })
      .then((result) => {
        console.log(result);
        navigate("/OrderDetails");
      })
      .catch((err) => console.log(err));
  };

  const navigteBack = () => {
    navigate(-1);
  };

  return (
    <div className="updateOrder-page">
      <div className="updateOrder-container">
        <form onSubmit={handleUpdate}>
          <button onClick={navigteBack} className="close-button">
            <img className="close-icon" src={close} />
          </button>

          <h1>Update order</h1>

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

          <div className="order-date-input">
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

          <div className="select-order-box">
            <select
              id="status"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="Not Selected">Select Status</option>
              <option value="Recieved">Recieved</option>
              <option value="Not Recieved">Not Recieved</option>
            </select>
          </div>

          <button type="submit" className="updateOrder-button">
            Update order
          </button>
        </form>
      </div>
    </div>
  );
}
