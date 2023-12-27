import './App.css';
import CreateAccount from './Pages/CreateAccount';
import LoginPage from './Pages/LoginPage';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import PackageManagement from './Pages/PackageManagement';
import CreatePackages from './Pages/CreatePackages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreatePackages/>}></Route>
          <Route path="/CreateAccount" element={<CreateAccount/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
