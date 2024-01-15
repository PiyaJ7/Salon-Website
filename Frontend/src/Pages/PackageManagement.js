import React from "react";
import "./packageManagement.css";
import { TiThMenu } from "react-icons/ti";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

export default function PackageManagement() {
  const navigate = useNavigate();

  const CreatePackageClick = () => {
    navigate("/CreatePackages");
  };

  return (
    <div>
      <Header />
      <div className="packageManagememt">
        <div className="sm-header">
          <div className="sm-header-left">
            <TiThMenu size={29} className="menu-icon" />
            <h1>Salon Packages</h1>
          </div>
          <div className="sm-header-right">
            <button onClick={CreatePackageClick} className="create-pack-button">
              Create New Package
            </button>
            <button className="download-pack-button">
              Download Package Menu
            </button>
          </div>
        </div>
        <div className="sm-body"></div>
      </div>
    </div>
  );
}
