import React, { useEffect, useState } from "react";
import "./inventoryMnagement.css";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import axios from "axios";

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
            <button className="report-button">Report</button>
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
