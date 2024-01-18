import React from "react";
import "./financeManagement.css";
import { TiThMenu } from "react-icons/ti";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

export default function FinanceManagement() {
  const navigate = useNavigate();

  const addTransactionClick = useNavigate();

  const addServiceClick = () => {
    navigate("/AddTransaction");
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
              onClick={addServiceClick}
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
            <tr>
              <th>Employee ID</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Category</th>
              <th>Date</th>
              <th>Description</th>
              <th>Reference</th>
              <th>Action</th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
