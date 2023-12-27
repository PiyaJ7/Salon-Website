import './App.css';
import CreateAccount from './Pages/CreateAccount';
import LoginPage from './Pages/LoginPage';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import PackageManagement from './Pages/PackageManagement';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PackageManagement/>}></Route>
          <Route path="/CreateAccount" element={<CreateAccount/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
