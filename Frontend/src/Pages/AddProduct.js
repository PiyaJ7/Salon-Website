import React from "react";
import "./addProduct.css";
import close from "./images/close.png";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();

  const navigteBack = () => {
    navigate(-1);
  };
  return (
    <div className="addProduct-page">
      <div className="addProduct-container">
        <form action="">
          <button className="close-button">
            <img onClick={navigteBack} className="close-icon" src={close} />
          </button>

          <h1>Add Products</h1>

          <div className="addProduct-input-box">
            <input type="text" id="" name="" required />
            <label for="">Name</label>
          </div>

          <div className="addProduct-select-box">
            <select>
              <option value="0">Select Product</option>
              <option value="1">Product</option>
              <option value="2">Equipment</option>
            </select>
          </div>

          <div className="addProduct-select-box">
            <select>
              <option value="0">Select type</option>
              <option value="1">Scissors</option>
              <option value="2">Shampoo</option>
              <option value="3">Hair Styling</option>
              <option value="4">Hair coloring products</option>
              <option value="5">Furniture</option>
              <option value="6">Brushes</option>
            </select>
          </div>

          <div className="addProduct-date-input">
            <label for="">Date</label> <br />
            <input type="date" id="" name="" required />
          </div>

          <div className="addProduct-input-box">
            <input type="text" id="" name="" required />
            <label for="">Remaining quantity</label>
          </div>

          <div className="addProduct-input-box">
            <input type="text" id="" name="" required />
            <label for="">Used quantity</label>
          </div>

          <div className="addProduct-input-box">
            <input type="text" id="" name="" required />
            <label for="">Total Price</label>
          </div>

          <button type="submit" className="addProduct-button">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
