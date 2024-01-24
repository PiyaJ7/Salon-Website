import React, { useEffect, useState } from "react";
import "./financeManagement.css";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import axios from "axios";


export default function FinanceManagement() {
  const navigate = useNavigate();
  const [finance, setFinance] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Fin/trans")
      .then((item) => {
        setFinance(item.data);

        let incomeTotal = 0;
        let expenseTotal = 0;

        item.data.forEach((transaction) => {
          if (transaction.type === "Income") {
            incomeTotal += transaction.amount;
          } else if (transaction.type === "Expenses") {
            expenseTotal += transaction.amount;
          }
        });

        setTotalIncome(incomeTotal);
        setTotalExpense(expenseTotal);
        setBalance(incomeTotal - expenseTotal);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id, reference) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${reference}"?`
    );

    if (confirmDelete) {
      axios
        .delete("http://localhost:8000/api/Fin/delete/" + id)
        .then((res) => {
          console.log("Delete successful:", res);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

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
              <p>Balance: LKR {balance}</p>
            </div>
            <div className="finance-details-right">
              <p>Income: LKR {totalIncome}</p>
              <p>Expenses: LKR {totalExpense}</p>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Category</th>
                <th>Date</th>
                <th>Reference</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {finance.map((finance, index) => {
                return (
                  <tr key={finance.id}>
                    <td>{index + 1}</td>
                    <td>{finance.description}</td>
                    <td>{finance.amount}</td>
                    <td>{finance.type}</td>
                    <td>{finance.category}</td>
                    <td>{finance.date}</td>
                    <td>{finance.reference}</td>
                    <td>
                      <Link to={`/UpdateTransactions/${finance._id}`}>
                        <button className="finance-table-edit-button">
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={(e) =>
                          handleDelete(finance._id, finance.reference)
                        }
                        className="finance-table-delete-button"
                      >
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
