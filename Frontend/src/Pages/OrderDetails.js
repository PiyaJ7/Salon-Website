import React, { useEffect, useState } from "react";
import "./orderDetails.css";
import { TiThMenu } from "react-icons/ti";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import axios from "axios";

export default function OrderDetails() {
  const navigate = useNavigate();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Ord/ords")
      .then((items) => setOrder(items.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/api/Ord/delete/" + id)
      .then((res) => {
        console.log("Delete successful:", res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const addOrderClick = () => {
    navigate("/AddOrder");
  };

  return (
    <div>
      <Header />
      <div className="orderDetails">
        <div className="orderDetails-header">
          <div className="orderDetails-header-left">
            <Sidebar />
            <h1>Order Details</h1>
          </div>
          <div className="orderDetails-header-right">
            <button onClick={addOrderClick} className="add-new-order-button">
              Add new order
            </button>
            <button className="download-order-list-button">
              Download order list
            </button>
          </div>
        </div>
        <div className="orderDetails-body">
          <div className="sort-button">
            <button className="sort-by-type">Sort by type</button>
            <button className="sort-by-price">Sort by price</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Product</th>
                <th>Date</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {order.map((order, index) => {
                return (
                  <tr key={order.id}>
                    <td>{index + 1}</td>
                    <td>{order.name}</td>
                    <td>{order.product}</td>
                    <td>{order.date}</td>
                    <td>{order.quantity}</td>
                    <td>{order.price}</td>
                    <td>{order.status}</td>
                    <td>
                      <Link to={`/UpdateOrder/${order._id}`}>
                        <button className="order-table-edit-button">
                          Edit
                        </button>
                      </Link>

                      <button
                        onClick={(e) => handleDelete(order._id)}
                        className="order-table-delete-button"
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
