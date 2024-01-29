import React, { useEffect, useState } from "react";
import "./financeManagement.css";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import axios from "axios";
import logo from "./images/logo.png";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

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

  const downloadPDF = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/Fin/trans");
      const financeData = response.data;

      const doc = new jsPDF();

      doc.addImage(logo, "PNG", 10, 5, 40, 40);

      const headerX = doc.internal.pageSize.width - 20;

      doc.setFontSize(14);
      doc.text("Salon JAYDE", headerX, 20, { align: "right" });

      doc.setFontSize(12);
      doc.text("43/8, Flower Road, Colombo 07", headerX, 27, {
        align: "right",
      });
      doc.setFontSize(10);
      doc.text("077-3526412/071-5263491", headerX, 32, {
        align: "right",
      });

      doc.setLineWidth(0.5);
      doc.line(8, 42, 200, 42);

      doc.setFont("bold");
      doc.setFontSize(20);
      doc.text("Financial Details", 80, 60);
      doc.setFont("normal");

      doc.setDrawColor(0);

      const columns = [
        { header: "ID", dataKey: "index" },
        { header: "Description", dataKey: "description" },
        { header: "Amount", dataKey: "amount" },
        { header: "Type", dataKey: "type" },
        { header: "Date", dataKey: "date" },
        { header: "Reference", dataKey: "reference" },
      ];

      const rows = financeData.map((finance, index) => ({
        index: index + 1,
        description: finance.description,
        amount: finance.amount,
        type: finance.type,
        date: finance.data,
        reference: finance.reference,
      }));

      autoTable(doc, { columns, body: rows, startY: 70 });

      // Calculate total income, total expenses, and balance
      const totalIncome = financeData.reduce((total, finance) => {
        return finance.type === "Income" ? total + finance.amount : total;
      }, 0);

      const totalExpenses = financeData.reduce((total, finance) => {
        return finance.type === "Expenses" ? total + finance.amount : total;
      }, 0);

      const balance = totalIncome - totalExpenses;

      // Add totals to the PDF
      doc.setFontSize(11);
      doc.text(
        `Total Income: LKR ${totalIncome}`,
        15,
        doc.autoTable.previous.finalY + 10
      );
      doc.text(
        `Total Expenses: LKR ${totalExpenses}`,
        15,
        doc.autoTable.previous.finalY + 18
      );
      const balanceX = doc.internal.pageSize.width - 15;
      doc.text(
        `Balance: LKR ${balance}`,
        balanceX,
        doc.autoTable.previous.finalY + 15,
        { align: "right" }
      );

      doc.save("Finance report.pdf");
    } catch (error) {
      console.error("Error fetching or generating PDF:", error);
    }
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
            <button onClick={downloadPDF} className="finance-report-button">
              Finance report
            </button>
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
