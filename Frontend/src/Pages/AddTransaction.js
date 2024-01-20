import React, { useState } from "react";
import "./addTransaction.css";
import close from "./images/close.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddTransaction() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [reference, setReference] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const financeData = {
      amount,
      type,
      category,
      date,
      description,
      reference,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/Fin/add",
        financeData
      );

      console.log(financeData);

      if (response.status === 201) {
        console.log(response);
        navigate("/FinanceManagement");
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
    <div className="addTransaction-page">
      <div className="addTransaction-container">
        <form onSubmit={handleSubmit}>
          <button onClick={navigteBack} className="close-button">
            <img className="close-icon" src={close} alt="close" />
          </button>

          <h1>Add transaction details</h1>

          <div className="addTransaction-input-box">
            <input
              type="text"
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
            <label htmlFor="amount">Amount (LKR)</label>
          </div>

          <div className="addTransaction-select-box">
            <select
              id="type"
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="Not Selected">Select transaction type</option>
              <option value="Income">Income</option>
              <option value="Expenses">Expenses</option>
            </select>
          </div>

          <div className="addTransaction-select-box">
            <select
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="Not Selected">Select Category</option>
              <option value="Salary">Salary</option>
              <option value="Stationery ">Stationery </option>
              <option value="Supplier charges">Supplier charges</option>
              <option value="Food">Food</option>
              <option value="Transport ">Transport </option>
              <option value="Bills">Bills</option>
              <option value="Medical">Medical</option>
              <option value="Expenses">Expenses</option>
              <option value="TAX">TAX</option>
              <option value="Services">Services</option>
            </select>
          </div>

          <div className="addTransaction-date-input">
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

          <div className="addTransaction-input-box">
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

          <div className="addTransaction-input-box">
            <input
              type="text"
              id="reference"
              name="reference"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              required
            />
            <label htmlFor="reference">Reference</label>
          </div>

          <button type="submit" className="addTransaction-button">
            Create transaction
          </button>
        </form>
      </div>
    </div>
  );
}
