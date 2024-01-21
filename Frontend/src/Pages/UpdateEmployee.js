import React, { useEffect, useState } from "react";
import "./updateEmployee.css";
import close from "./images/close.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function UpdateEmployee() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [EmpId, setEmpId] = useState("");
  const [name, setName] = useState("");
  const [NIC, setNIC] = useState("");
  const [joinedDate, setJoinedDate] = useState("");
  const [position, setPosition] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/employees/update/" + id)
      .then((result) => {
        console.log(result);
        setEmpId(result.data.id);
        setName(result.data.name);
        setNIC(result.data.NIC);
        setJoinedDate(result.data.joinedDate);
        setPosition(result.data.position);
        setAddress(result.data.address);
        setPhoneNo(result.data.phoneNo);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/employees/update/" + id, {
        id: EmpId,
        name,
        NIC,
        joinedDate,
        position,
        address,
        phoneNo,
      })
      .then((result) => {
        console.log(result);
        navigate("/EmployeeManagement");
      })
      .catch((err) => console.log(err));
  };

  const navigteBack = () => {
    navigate(-1);
  };

  return (
    <div className="updateEmployee-page">
      <div className="updateEmployee-container">
        <form onSubmit={handleUpdate}>
          <button className="close-button">
            <img onClick={navigteBack} className="close-icon" src={close} />
          </button>

          <h1>Update employee</h1>

          <div className="input-box">
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="name">Name</label>
          </div>

          <div className="input-box">
            <input
              type="text"
              id="id"
              name="id"
              value={EmpId}
              onChange={(e) => setEmpId(e.target.value)}
              required
            />
            <label htmlFor="id">Employee ID</label>
          </div>

          <div className="input-box">
            <input
              type="text"
              id="NIC"
              name="NIC"
              value={NIC}
              onChange={(e) => setNIC(e.target.value)}
              required
            />
            <label htmlFor="NIC">NIC</label>
          </div>

          <div className="updateEmployee-date-input">
            <label htmlFor="joinedDate">Joined date</label> <br />
            <input
              type="date"
              id="joinedDate"
              name="joinedDate"
              value={joinedDate}
              onChange={(e) => setJoinedDate(e.target.value)}
              required
            />
          </div>

          <div className="select-position-box">
            <select
              id="position"
              name="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            >
              <option value="Not Selected">Select Position</option>
              <option value="Hair dresser">Hair dresser</option>
              <option value="Nail technicial">Nail technicial</option>
              <option value="Wax specialist">Wax specialist</option>
              <option value="Colorist">Colorist</option>
            </select>
          </div>

          <div className="input-box">
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <label htmlFor="address">Address</label>
          </div>

          <div className="input-box">
            <input
              type="text"
              id="phoneNo"
              name="phoneNo"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              required
            />
            <label htmlFor="phoneNo">Contact No</label>
          </div>

          <button type="submit" className="updateEmployee-button">
            Update employee
          </button>
        </form>
      </div>
    </div>
  );
}
