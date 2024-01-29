import React, { useEffect, useState } from "react";
import "./orderDetails.css";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import axios from "axios";
import logo from "./images/logo.png";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function OrderDetails() {
  const navigate = useNavigate();
  const [order, setOrder] = useState([]);
  const [sortCriteria, setSortCriteria] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Ord/ords")
      .then((items) => setOrder(items.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id, name) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${name}"?`
    );

    if (confirmDelete) {
      axios
        .delete("http://localhost:8000/api/Ord/delete/" + id)
        .then((res) => {
          console.log("Delete successful:", res);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  const addOrderClick = () => {
    navigate("/AddOrder");
  };

  const handleSort = (criteria) => {
    if (sortCriteria === criteria) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortCriteria(criteria);
      setSortOrder("asc");
    }
  };

  const sortedOrder = [...order].sort((a, b) => {
    if (sortCriteria === "name") {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (sortCriteria === "product") {
      return sortOrder === "asc"
        ? a.product - b.product
        : b.product - a.product;
    }
    return 0;
  });

  const downloadPDF = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/Ord/ords");
      const orderData = response.data;

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
      doc.text("Order Details", 80, 60);
      doc.setFont("normal");

      doc.setDrawColor(0);

      const columns = [
        { header: "ID", dataKey: "id" },
        { header: "Name", dataKey: "name" },
        { header: "Product", dataKey: "product" },
        { header: "Date", dataKey: "date" },
        { header: "qty", dataKey: "qty" },
        { header: "Price", dataKey: "price" },
        { header: "Status", dataKey: "status" },
      ];

      const rows = orderData.map((supplier, index) => ({
        id: index + 1,
        name: supplier.name,
        product: supplier.product,
        date: supplier.date,
        qty: supplier.quantity,
        price: supplier.price,
        status: supplier.status,
      }));

      autoTable(doc, { columns, body: rows, startY: 70 });

      doc.save("Order details.pdf");
    } catch (error) {
      console.error("Error fetching or generating PDF:", error);
    }
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
            <button
              onClick={downloadPDF}
              className="download-order-list-button"
            >
              Download order list
            </button>
          </div>
        </div>
        <div className="orderDetails-body">
          <div className="sort-button">
            <button className="sort-by-type" onClick={() => handleSort("name")}>
              Sort by name
            </button>
            <button
              className="sort-by-price"
              onClick={() => handleSort("product")}
            >
              Sort by product
            </button>
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
              {sortedOrder.map((order, index) => {
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
                        onClick={(e) => handleDelete(order._id, order.name)}
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
