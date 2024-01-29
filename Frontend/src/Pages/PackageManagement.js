import React, { useEffect, useState } from "react";
import "./packageManagement.css";
import axios from "axios";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import logo from "./images/logo.png";
import jsPDF from "jspdf";

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

  const downloadPDF = () => {
    const doc = new jsPDF();

    const addHeader = () => {
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
    };

    const addFooter = (pageNum) => {
      const footerX = doc.internal.pageSize.width / 2;
      const footerY = doc.internal.pageSize.height - 10;

      doc.setFontSize(10);
      doc.text(`Page ${pageNum}`, footerX, footerY, { align: "center" });
    };

    addHeader();

    doc.setFont("bold");
    doc.setFontSize(20);
    doc.text("Package Details", 80, 60);
    doc.setFont("normal");

    doc.setDrawColor(0);

    let startX = 10;
    let startY = 70;
    let pageNum = 1;

    packages.forEach((pkg, index) => {
      const centerX = startX + 45;
      doc.rect(centerX - 45, startY, 90, 80);

      doc.setFontSize(20);
      doc.text(
        pkg.title,
        centerX - doc.getStringUnitWidth(pkg.title) / 2,
        startY + 20,
        { align: "center" }
      );

      doc.setFontSize(14);
      doc.text(
        `Type: ${pkg.type}`,
        centerX - doc.getStringUnitWidth(`Type: ${pkg.type}`) / 2,
        startY + 30,
        { align: "center" }
      );
      doc.text(
        `Description: ${pkg.description}`,
        centerX - doc.getStringUnitWidth(`Description: ${pkg.description}`) / 2,
        startY + 40,
        { align: "center" }
      );
      doc.text(
        `Price: Rs. ${pkg.price}`,
        centerX - doc.getStringUnitWidth(`Price: Rs. ${pkg.price}`) / 2,
        startY + 50,
        { align: "center" }
      );

      startX += 100;

      if ((index + 1) % 2 === 0) {
        startX = 10;
        startY += 90;
      }

      if ((index + 1) % 4 === 0 && index !== packages.length - 1) {
        addFooter(pageNum);
        doc.addPage();
        addHeader();
        pageNum += 1;
        startX = 10;
        startY = 70;
      }
    });

    addFooter(pageNum);
    doc.save("PackageMenu.pdf");
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
            <button onClick={downloadPDF} className="download-pack-button">
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
