import React, { useEffect, useState } from "react";
import "./serviceManagement.css";
import axios from "axios";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import logo from "./images/logo.png";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function ServiceManagement() {
  const navigate = useNavigate();
  const [service, setService] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/services/posts")
      .then((items) => setService(items.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id, name) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${name}"?`
    );

    if (confirmDelete) {
      axios
        .delete("http://localhost:8000/api/services/delete/" + id)
        .then((res) => {
          console.log("Delete successful:", res);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  const addServiceClick = () => {
    navigate("/AddService");
  };

  const downloadPDF = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/services/posts"
      );
      const serviceData = response.data;

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
      doc.text("Service Report", 80, 60);
      doc.setFont("normal");

      doc.setDrawColor(0);

      const columns = [
        { header: "ID", dataKey: "id" },
        { header: "Service Name", dataKey: "serviceName" },
        { header: "Price", dataKey: "price" },
        { header: "Category", dataKey: "category" },
      ];

      const rows = serviceData.map((Services, index) => ({
        id: index + 1,
        serviceName: Services.sName,
        price: Services.sPrice,
        category: Services.sCategory,
      }));

      autoTable(doc, { columns, body: rows, startY: 70 });

      doc.save("Service report.pdf");
    } catch (error) {
      console.error("Error fetching or generating PDF:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="serviceManagement">
        <div className="serviceManagement-header">
          <div className="serviceManagement-header-left">
            <Sidebar />
            <h1>Available Services</h1>
          </div>
          <div className="serviceManagement-header-right">
            <button onClick={downloadPDF} className="generate-service-button">
              Generate a report
            </button>
            <button onClick={addServiceClick} className="add-service-button">
              Add New Service
            </button>
          </div>
        </div>
        <div className="serviceManagement-body">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Service name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {service.map((service, index) => {
                return (
                  <tr key={service.id}>
                    <td>{index + 1}</td>
                    <td>{service.sName}</td>
                    <td>{service.sPrice}</td>
                    <td>{service.sCategory}</td>
                    <td>
                      <Link to={`/UpdateService/${service._id}`}>
                        <button className="service-table-edit-button">
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={(e) =>
                          handleDelete(service._id, service.sName)
                        }
                        className="service-table-delete-button"
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
