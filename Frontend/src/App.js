import './App.css';
import CreateAccount from './Pages/CreateAccount';
import LoginPage from './Pages/LoginPage';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import PackageManagement from './Pages/PackageManagement';
import CreatePackages from './Pages/CreatePackages';
import ServiceManagement from './Pages/ServiceManagement';
import Home from './Pages/Home';
<<<<<<< Updated upstream
=======
import AttendanceDetals from './Pages/AttendanceDetals';
import ScheduleManagement from './Pages/ScheduleManagement';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/LoginPage" element={<LoginPage/>}></Route>
          <Route path="/CreateAccount" element={<CreateAccount/>}></Route>
          <Route path="/PackageManagement" element={<PackageManagement/>}></Route>
          <Route path="/CreatePackages" element={<CreatePackages/>}></Route>
          <Route path="/ServiceManagement" element={<ServiceManagement/>}></Route>
<<<<<<< Updated upstream
=======
          <Route path="/AttendanceDetals" element={<AttendanceDetals/>}></Route>
          <Route path="/ScheduleManagement" element={<ScheduleManagement/>}></Route>
>>>>>>> Stashed changes
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
