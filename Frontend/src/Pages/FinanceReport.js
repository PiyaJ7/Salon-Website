import React, { useRef, useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function FinanceReport() {
  const [posts, setPosts] = useState([]);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const navigate = useNavigate();
  const componentRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/Fin/trans");
        console.log(response);
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const calculateAmounts = () => {
      let amount1 = 0;
      let amount2 = 0;

      if (posts) {
        posts.forEach((post) => {
          if (post.type === "Income") {
            amount1 += post.amount;
          } else {
            amount2 += post.amount;
          }
        });
        setIncome(amount1);
        setExpenses(amount2);
      }
    };

    calculateAmounts();
  }, [posts]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "financial-report",
    onAfterPrint: () => {
      alert("Print success");
      navigate("/FinanceManagement");
    },
  });

  return (
    <div className="finance-report">
      <div ref={componentRef} className="finance-report-container">
        <div className="header">
          {/* <img src={Logo} alt="Logo" /> */}
          <div className="address">
            <h5>Salon JAYDE</h5>
            <br />
            <h6>43/8</h6>
            <h6>Flower Road</h6>
            <h6>Colombo 07</h6>
          </div>
        </div>
        <br />
        <h3
          className="text-center my-3 border py-2"
          style={{ fontWeight: "bold" }}
        >
          Finance Report
        </h3>
        <br />

        <div className="amount-details">
          <div className="report-income">
            Income - LKR.
            <span>{income}</span>
          </div>
          <div className="report-expenses">
            Expenses - LKR.
            <span>{expenses}</span>
          </div>
          <div className="report-balance">
            Balance - LKR.
            <span>{income - expenses}</span>
          </div>
        </div>

        <br />
        <Table className="w-75 mx-auto" bordered>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Type</th>
              <th>Category</th>
              <th>Date</th>
              <th>Description</th>
              <th>Reference</th>
            </tr>
          </thead>
          <tbody>
            {posts &&
              posts.map((post) => (
                <tr key={post._id}>
                  <td>{post.amount}</td>
                  <td>{post.type}</td>
                  <td>{post.category}</td>
                  <td>{post.date}</td>
                  <td>{post.description}</td>
                  <td>{post.reference}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      <br />
      <center>
        <button
          className="btn btn-secondary"
          style={{ borderRadius: "5px", width: "20%" }}
          onClick={handlePrint}
        >
          Download
        </button>
      </center>
      <br />
    </div>
  );
}
