import "./App.css";
import CreateAccount from "./Pages/CreateAccount";
import LoginPage from "./Pages/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PackageManagement from "./Pages/PackageManagement";
import CreatePackages from "./Pages/CreatePackages";
import ServiceManagement from "./Pages/ServiceManagement";
import Home from "./Pages/Home";
import AttendanceDetals from "./Pages/AttendanceDetals";
import Dashboard from "./Pages/Dashboard";
import ScheduleManagement from "./Pages/ScheduleManagement";
import InventoryMnagement from "./Pages/InventoryMnagement";
import FinanceManagement from "./Pages/FinanceManagement";
import AppointmentManagement from "./Pages/AppointmentManagement";
import EmployeeManagement from "./Pages/EmployeeManagement";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/LoginPage" element={<LoginPage />}></Route>
          <Route path="/CreateAccount" element={<CreateAccount />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route
            path="/PackageManagement"
            element={<PackageManagement />}
          ></Route>
          <Route path="/CreatePackages" element={<CreatePackages />}></Route>
          <Route
            path="/ServiceManagement"
            element={<ServiceManagement />}
          ></Route>
          <Route
            path="/AttendanceDetals"
            element={<AttendanceDetals />}
          ></Route>
          <Route
            path="/ScheduleManagement"
            element={<ScheduleManagement />}
          ></Route>
          <Route
            path="/InventoryMnagement"
            element={<InventoryMnagement />}
          ></Route>
          <Route
            path="/FinanceManagement"
            element={<FinanceManagement />}
          ></Route>
          <Route
            path="/AppointmentManagement"
            element={<AppointmentManagement />}
          ></Route>
          <Route
            path="/EmployeeManagement"
            element={<EmployeeManagement />}
          ></Route>
          {/* <Route
            path="/ScheduleManagement"
            element={<ScheduleManagement />}
          ></Route>
          <Route
            path="/InventoryMnagement"
            element={<InventoryMnagement />}
          ></Route>
          <Route
            path="/FinanceManagement"
            element={<FinanceManagement />}
          ></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
