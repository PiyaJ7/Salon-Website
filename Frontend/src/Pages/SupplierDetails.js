import React, { useEffect, useState } from "react";
import "./supplierDetails.css";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import axios from "axios";
import logo from "./images/logo.png";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function SupplierDetails() {
  const navigate = useNavigate();
  const [supplier, setSupplier] = useState([]);
  const [sortCriteria, setSortCriteria] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

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

  const handleSort = (criteria) => {
    if (sortCriteria === criteria) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortCriteria(criteria);
      setSortOrder("asc");
    }
  };

  const sortedSupplier = [...supplier].sort((a, b) => {
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

  const addSupplierClick = () => {
    navigate("/AddSupplier");
  };

  const downloadPDF = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/Sup/sups");
      const SupplierData = response.data;

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
      doc.text("Supplier Details", 80, 60);
      doc.setFont("normal");

      doc.setDrawColor(0);

      const columns = [
        { header: "ID", dataKey: "id" },
        { header: "Name", dataKey: "name" },
        { header: "Product", dataKey: "product" },
        { header: "Contact", dataKey: "contact" },
        { header: "Email", dataKey: "email" },
        { header: "Status", dataKey: "status" },
        { header: "Date", dataKey: "date" },
        { header: "qty", dataKey: "qty" },
        { header: "Price", dataKey: "price" },
      ];

      const rows = SupplierData.map((supplier, index) => ({
        id: index + 1,
        name: supplier.name,
        product: supplier.product,
        contact: supplier.contact,
        email: supplier.email,
        status: supplier.status,
        date: supplier.date,
        qty: supplier.quantity,
        price: supplier.price,
      }));

      autoTable(doc, { columns, body: rows, startY: 70 });

      doc.save("Supplier details.pdf");
    } catch (error) {
      console.error("Error fetching or generating PDF:", error);
    }
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
            <button
              onClick={downloadPDF}
              className="download-supplier-list-button"
            >
              Download supplier list
            </button>
          </div>
        </div>
        <div className="supplierDetails-body">
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
              {sortedSupplier.map((supplier, index) => {
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
