import React, { useEffect, useState } from "react";
import "./financeManagement.css";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import axios from "axios";


export default function FinanceManagement() {
  const navigate = useNavigate();
  const [finance, setFinance] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Fin/trans")
      .then((item) => setFinance(item.data))
      .catch((err) => console.log(err));
  }, []);

  const addTransactionClick = () => {
    navigate("/AddTransaction");
  };

  const financeReportClick = () => {
    navigate("/FinanceReport");
  };


  return (
    <div>
      <Header />
      <div className="financeManagement">
        <div className="financeManagement-header">
          <div className="financeManagement-header-left">
            <Sidebar />
            <h1>Income & Expenses</h1>
          </div>
          <div className="financeManagement-header-right">
            <button
              onClick={addTransactionClick}
              className="add-new-transaction-button"
            >
              Add new transaction
            </button>
            <button className="finance-report-button">Finance report</button>
          </div>
        </div>
        <div className="financeManagement-body">
          <div className="finance-details">
            <div className="finance-details-left">
              <p>Balance: LKR</p>
            </div>
            <div className="finance-details-right">
              <p>Income: LKR</p>
              <p>Expenses: LKR</p>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Category</th>
                <th>Date</th>
                <th>Description</th>
                <th>Reference</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {finance.map((finance, index) => {
                return (
                  <tr key={finance.id}>
                    <td>{index + 1}</td>
                    <td>{finance.amount}</td>
                    <td>{finance.type}</td>
                    <td>{finance.category}</td>
                    <td>{finance.date}</td>
                    <td>{finance.description}</td>
                    <td>{finance.reference}</td>
                    <td>
                      <button className="finance-table-edit-button">
                        Edit
                      </button>
                      <button className="finance-table-delete-button">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
