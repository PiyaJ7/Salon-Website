import React, { useEffect, useState } from "react";
import "./supplierDetails.css";
import { TiThMenu } from "react-icons/ti";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import axios from "axios";

export default function SupplierDetails() {
  const navigate = useNavigate();
  const [supplier, setSupplier] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Sup/sups")
      .then((items) => setSupplier(items.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id, name) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${name}"?`
    );

    if (confirmDelete) {
      axios
        .delete("http://localhost:8000/api/sup/delete/" + id)
        .then((res) => {
          console.log("Delete successful:", res);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  const addSupplierClick = () => {
    navigate("/AddSupplier");
  };

  return (
    <div>
      <Header />
      <div className="supplierDetails">
        <div className="supplierDetails-header">
          <div className="supplierDetails-header-left">
            <Sidebar />
            <h1>Supplier Details</h1>
          </div>
          <div className="supplierDetails-header-right">
            <button
              onClick={addSupplierClick}
              className="add-new-supplier-button"
            >
              Add new supplier
            </button>
            <button className="download-supplier-list-button">
              Download supplier list
            </button>
          </div>
        </div>
        <div className="supplierDetails-body">
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
                <th>Contact</th>
                <th>Email</th>
                <th>Status</th>
                <th>Date</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {supplier.map((supplier, index) => {
                return (
                  <tr key={supplier.id}>
                    <td>{index + 1}</td>
                    <td>{supplier.name}</td>
                    <td>{supplier.product}</td>
                    <td>{supplier.contact}</td>
                    <td>{supplier.email}</td>
                    <td>{supplier.status}</td>
                    <td>{supplier.date}</td>
                    <td>{supplier.quantity}</td>
                    <td>{supplier.price}</td>
                    <td>
                      <Link to={`/UpdateSupplier/${supplier._id}`}>
                        <button className="supplier-table-edit-button">
                          Edit
                        </button>
                      </Link>

                      <button
                        onClick={(e) =>
                          handleDelete(supplier._id, supplier.name)
                        }
                        className="supplier-table-delete-button"
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
