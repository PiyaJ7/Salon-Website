import React, { useState } from "react";
import "./dashboard.css";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { ImUsers } from "react-icons/im";
import { FaCartShopping } from "react-icons/fa6";
import { AiFillSchedule } from "react-icons/ai";
import { PiCallBellFill } from "react-icons/pi";
import Chart from "react-apexcharts";

export default function Dashboard() {
  const [state, setState] = useState({
    options: {
      colors: ["#2E93fA", "#66DA26", "#546E7A", "#E91E63", "#FF9800"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "series-2",
        data: [15, 20, 75, 54, 31, 10, 60, 21],
      },
    ],
  });

  return (
    <div>
      <Header />
      <div className="dashboard-page">
        <div className="dashboard-header">
          <div className="dashboard-header-left">
            <Sidebar />
            <h1>Dashboard</h1>
          </div>
        </div>
        <div className="dashboard-body">
          <div className="dashboard-summary">
            <div className="summary-block1">
              Products
              <FaCartShopping className="summary-block-icon" />
              <p className="count">60</p>
            </div>
            <div className="summary-block2">
              Appointments
              <AiFillSchedule className="summary-block-icon" />
              <p className="count">24</p>
            </div>
            <div className="summary-block3">
              Schedules
              <PiCallBellFill className="summary-block-icon" />
              <p className="count">16</p>
            </div>
            <div className="summary-block4">
              Employees
              <ImUsers className="summary-block-icon" />
              <p className="count">52</p>
            </div>
          </div>
          <div className="dashboard-charts">
            <div className="chart">
              <Chart
                options={state.options}
                series={state.series}
                type="bar"
                width="500"
              />
            </div>
            <div className="chart">
              <Chart
                options={state.options}
                series={state.series}
                type="area"
                width="500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
