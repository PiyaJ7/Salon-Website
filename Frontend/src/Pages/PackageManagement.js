import React, { useEffect, useState } from "react";
import "./packageManagement.css";
import axios from "axios";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

export default function PackageManagement() {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/packages/posts")
      .then((item) => setPackages(item.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id, packTitle) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${packTitle}"?`
    );

    if (confirmDelete) {
      axios
        .delete("http://localhost:8000/api/packages/delete/" + id)
        .then((res) => {
          console.log("Delete successful:", res);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    } else {
      console.log("Deletion canceled..");
    }
  };

  const CreatePackageClick = () => {
    navigate("/CreatePackages");
  };

  return (
    <div>
      <Header />
      <div className="packageManagememt">
        <div className="package-header">
          <div className="package-header-left">
            <Sidebar />
            <h1>Salon Packages</h1>
          </div>
          <div className="package-header-right">
            <button onClick={CreatePackageClick} className="create-pack-button">
              Create New Package
            </button>
            <button className="download-pack-button">
              Download Package Menu
            </button>
          </div>
        </div>
        <div className="package-body">
          {packages.map((packages) => {
            return (
              <div className="package-block">
                <div className="package-block-header">
                  <h1>{packages.title}</h1>
                  <h3>{packages.type}</h3>
                </div>
                <p className="package-block-paragrph">
                  <div className="package-description">
                    {packages.description}
                  </div>

                  <div className="package-price">Rs. {packages.price}</div>
                </p>
                <div className="package-block-buttons">
                  <Link to={`/updatePackage/${packages._id}`}>
                    <button className="package-block-update">Update</button>
                  </Link>

                  <button
                    onClick={(e) => handleDelete(packages._id, packages.title)}
                    className="package-block-delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
