import React, { useEffect, useState } from "react";
import "./inventoryMnagement.css";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import axios from "axios";
import logo from "./images/logo.png";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function InventoryMnagement() {
  const navigate = useNavigate();
  const [inventory, setInventory] = useState([]);
  const [sortCriteria, setSortCriteria] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Product/products")
      .then((items) => setInventory(items.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id, name) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${name}"?`
    );

    if (confirmDelete) {
      axios
        .delete("http://localhost:8000/api/Product/delete/" + id)
        .then((res) => {
          console.log("Delete successful:", res);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  const addProductClick = () => {
    navigate("/AddProduct");
  };

  const handleSort = (criteria) => {
    if (sortCriteria === criteria) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortCriteria(criteria);
      setSortOrder("asc");
    }
  };

  const sortedInventory = [...inventory].sort((a, b) => {
    if (sortCriteria === "type") {
      return sortOrder === "asc"
        ? a.type.localeCompare(b.type)
        : b.type.localeCompare(a.type);
    } else if (sortCriteria === "price") {
      return sortOrder === "asc"
        ? a.totalPrice - b.totalPrice
        : b.totalPrice - a.totalPrice;
    }
    return 0;
  });

  const downloadPDF = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/Product/products"
      );
      const inventoryData = response.data;

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
      doc.text("Inventory Report", 80, 60);
      doc.setFont("normal");

      doc.setDrawColor(0);

      const columns = [
        { header: "ID", dataKey: "id" },
        { header: "Name", dataKey: "name" },
        { header: "Type", dataKey: "type" },
        { header: "Category", dataKey: "category" },
        { header: "Date", dataKey: "date" },
        { header: "Remaining qty", dataKey: "remaning" },
        { header: "Used qty", dataKey: "used" },
        { header: "Price", dataKey: "price" },
      ];

      const rows = inventoryData.map((inventory, index) => ({
        id: index + 1,
        name: inventory.name,
        type: inventory.type,
        category: inventory.category,
        date: inventory.date,
        remaning: inventory.rquantity,
        used: inventory.uquantity,
        price: inventory.totalPrice,
      }));

      autoTable(doc, { columns, body: rows, startY: 70 });

      doc.save("Inventory Report.pdf");
    } catch (error) {
      console.error("Error fetching or generating PDF:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="inventoryManagement">
        <div className="inventoryManagement-header">
          <div className="inventoryManagement-header-left">
            <Sidebar />
            <h1>Inventory Management</h1>
          </div>
          <div className="inventoryManagement-header-right">
            <button
              onClick={addProductClick}
              className="add-new-product-button"
            >
              Add new product
            </button>
            <button onClick={downloadPDF} className="report-button">
              Report
            </button>
          </div>
        </div>
        <div className="inventoryManagement-body">
          <div className="sort-button">
            <button className="sort-by-type" onClick={() => handleSort("type")}>
              Sort by type
            </button>
            <button
              className="sort-by-price"
              onClick={() => handleSort("price")}
            >
              Sort by price
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Category</th>
                <th>Date</th>
                <th>Remaining qty</th>
                <th>Used qty</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedInventory.map((inventory, index) => {
                return (
                  <tr>
                    <td key={inventory.id}>{index + 1}</td>
                    <td>{inventory.name}</td>
                    <td>{inventory.type}</td>
                    <td>{inventory.category}</td>
                    <td>{inventory.date}</td>
                    <td>{inventory.rquantity}</td>
                    <td>{inventory.uquantity}</td>
                    <td>{inventory.totalPrice}</td>
                    <td>
                      <Link to={`/UpdateProduct/${inventory._id}`}>
                        <button className="inventory-table-edit-button">
                          Edit
                        </button>
                      </Link>

                      <button
                        onClick={(e) =>
                          handleDelete(inventory._id, inventory.name)
                        }
                        className="inventory-table-delete-button"
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
