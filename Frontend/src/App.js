import "./App.css";
import CreateAccount from "./Pages/CreateAccount";
import LoginPage from "./Pages/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PackageManagement from "./Pages/PackageManagement";
import CreatePackages from "./Pages/CreatePackages";
import ServiceManagement from "./Pages/ServiceManagement";
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
import AddProduct from "./Pages/AddProduct";
import UpdateSchedule from "./Pages/UpdateSchedule";
import UpdateService from "./Pages/UpdateService";
import UpdateTransactions from "./Pages/UpdateTransactions";
import UpdateProduct from "./Pages/UpdateProduct";
import UpdateEmployee from "./Pages/UpdateEmployee";
import UpdateSupplier from "./Pages/UpdateSupplier";
import UpdateOrder from "./Pages/UpdateOrder";
import UpdatePackage from "./Pages/UpdatePackage";
import FinanceReport from "./Pages/FinanceReport";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/LoginPage" element={<LoginPage />}></Route>
          <Route path="/CreateAccount" element={<CreateAccount />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route
            path="/PackageManagement"
            element={<PackageManagement />}
          ></Route>
          <Route path="/CreatePackages" element={<CreatePackages />}></Route>
          <Route path="/UpdatePackage/:id" element={<UpdatePackage />}></Route>
          <Route
            path="/ServiceManagement"
            element={<ServiceManagement />}
          ></Route>
          <Route path="/AddService" element={<AddService />}></Route>
          <Route path="/UpdateService/:id" element={<UpdateService />}></Route>
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
            path="/UpdateSchedule/:id"
            element={<UpdateSchedule />}
          ></Route>
          <Route
            path="/InventoryMnagement"
            element={<InventoryMnagement />}
          ></Route>
          <Route path="/AddProduct" element={<AddProduct />}></Route>
          <Route path="/UpdateProduct/:id" element={<UpdateProduct />}></Route>
          <Route
            path="/FinanceManagement"
            element={<FinanceManagement />}
          ></Route>
          <Route path="/AddTransaction" element={<AddTransaction />}></Route>
          <Route path="/FinanceReport" element={<FinanceReport />}></Route>
          <Route
            path="/UpdateTransactions/:id"
            element={<UpdateTransactions />}
          ></Route>
          <Route
            path="/AppointmentManagement"
            element={<AppointmentManagement />}
          ></Route>
          <Route
            path="/EmployeeManagement"
            element={<EmployeeManagement />}
          ></Route>
          <Route path="/AddEmployee" element={<AddEmployee />}></Route>
          <Route
            path="/UpdateEmployee/:id"
            element={<UpdateEmployee />}
          ></Route>
          <Route path="/SalaryDetails" element={<SalaryDetails />}></Route>
          <Route path="/AddSalary" element={<AddSalary />}></Route>
          <Route
            path="/SupplierManagement"
            element={<SupplierManagement />}
          ></Route>
          <Route path="/SupplierDetails" element={<SupplierDetails />}></Route>
          <Route
            path="/UpdateSupplier/:id"
            element={<UpdateSupplier />}
          ></Route>
          <Route path="/AddSupplier" element={<AddSupplier />}></Route>
          <Route path="/OrderDetails" element={<OrderDetails />}></Route>
          <Route path="/AddOrder" element={<AddOrder />}></Route>
          <Route path="/UpdateOrder/:id" element={<UpdateOrder />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
