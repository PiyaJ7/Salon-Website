import React, { useEffect, useState } from "react";
import "./serviceManagement.css";
import axios from "axios";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

export default function ServiceManagement() {
  const navigate = useNavigate();
  const [service, setService] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/services/posts")
      .then((response) => setService(response.data))
      .catch((err) => console.log(err));
  }, []);

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
                <th>Service ID</th>
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
                      <button className="service-table-edit-button">
                        Edit
                      </button>
                      <button className="service-table-delete-button">
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
