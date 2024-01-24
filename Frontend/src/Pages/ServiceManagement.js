import React, { useEffect, useState } from "react";
import "./serviceManagement.css";
import axios from "axios";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

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
            <button className="generate-service-button">
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
