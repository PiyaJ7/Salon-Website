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
import SalaryDetails from "./Pages/SalaryDetails";
import SupplierManagement from "./Pages/SupplierManagement";
import SupplierDetails from "./Pages/SupplierDetails";
import OrderDetails from "./Pages/OrderDetails";
import CreateSchedule from "./Pages/CreateSchedule";
import AddEmployee from "./Pages/AddEmployee";
import AddSalary from "./Pages/AddSalary";
import AddSupplier from "./Pages/AddSupplier";
import AddOrder from "./Pages/AddOrder";
import AddService from "./Pages/AddService";
import AddTransaction from "./Pages/AddTransaction";
import AddAttendance from "./Pages/AddAttendance";

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
          <Route path="/AddService" element={<AddService />}></Route>
          <Route
            path="/AttendanceDetals"
            element={<AttendanceDetals />}
          ></Route>
          <Route path="/AddAttendance" element={<AddAttendance />}></Route>
          <Route
            path="/ScheduleManagement"
            element={<ScheduleManagement />}
          ></Route>
          <Route path="/CreateSchedule" element={<CreateSchedule />}></Route>
          <Route
            path="/InventoryMnagement"
            element={<InventoryMnagement />}
          ></Route>
          <Route
            path="/FinanceManagement"
            element={<FinanceManagement />}
          ></Route>
          <Route path="/AddTransaction" element={<AddTransaction />}></Route>
          <Route
            path="/AppointmentManagement"
            element={<AppointmentManagement />}
          ></Route>
          <Route
            path="/EmployeeManagement"
            element={<EmployeeManagement />}
          ></Route>
          <Route path="/AddEmployee" element={<AddEmployee />}></Route>
          <Route path="/SalaryDetails" element={<SalaryDetails />}></Route>
          <Route path="/AddSalary" element={<AddSalary />}></Route>
          <Route
            path="/SupplierManagement"
            element={<SupplierManagement />}
          ></Route>
          <Route path="/SupplierDetails" element={<SupplierDetails />}></Route>
          <Route path="/AddSupplier" element={<AddSupplier />}></Route>
          <Route path="/OrderDetails" element={<OrderDetails />}></Route>
          <Route path="/AddOrder" element={<AddOrder />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
