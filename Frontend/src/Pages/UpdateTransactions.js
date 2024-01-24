import "./updateTransactions.css";
import React, { useEffect, useState } from "react";
import close from "./images/close.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function UpdateTransactions() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [reference, setReference] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Fin/update/" + id)
      .then((result) => {
        console.log(result);
        setAmount(result.data.amount);
        setType(result.data.type);
        setCategory(result.data.category);
        setDate(result.data.date);
        setDescription(result.data.description);
        setReference(result.data.reference);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/Fin/update/" + id, {
        amount,
        type,
        category,
        date,
        description,
        reference,
      })
      .then((result) => {
        console.log(result);
        navigate("/FinanceManagement");
      })
      .catch((err) => console.log(err));
  };

  const navigteBack = () => {
    navigate(-1);
  };

  return (
    <div className="updateTransaction-page">
      <div className="updateTransaction-container">
        <form onSubmit={updateSubmit}>
          <button onClick={navigteBack} className="close-button">
            <img className="close-icon" src={close} alt="close" />
          </button>

          <h1>Update transaction details</h1>

          <div className="updateTransaction-input-box">
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

          <div className="updateTransaction-select-box">
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

          <div className="updateTransaction-select-box">
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

          <div className="updateTransaction-date-input">
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

          <div className="updateTransaction-input-box">
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

          <div className="updateTransaction-input-box">
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

          <button type="submit" className="updateTransaction-button">
            Update transaction
          </button>
        </form>
      </div>
    </div>
  );
}
