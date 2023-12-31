import React from 'react'
import './home.css';
import { TiThMenu } from "react-icons/ti";
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

export default function Home() {
  return (
    <div>
        <Header/>
        <div className="home-page">
        <div className="serviceManagement-header">
            <div className="serviceManagement-header-left">
                <TiThMenu size={29} className='menu-icon'/>
                <h1>Home</h1>
            </div>
            <div className="serviceManagement-header-right">
                
            </div>
        </div>
        <div className="serviceManagement-body">
            <div className="block-body">
            <Link to="/LoginPage">
                <div className="blocks">
                    Login Page
                </div>
            </Link>
            <Link to="/CreateAccount">
                <div className="blocks">
                    Create Account
                </div>
            </Link>
            <Link to="/Dashboard">
                <div className="blocks">
                    Dashboard
                </div>
            </Link>
            <Link to="/PackageManagement">
                <div className="blocks">
                    Package Management
                </div>
            </Link>
            <Link to="/CreatePackages">
                <div className="blocks">
                    Create new package
                </div>
            </Link>
            <Link to="/ServiceManagement">
                <div className="blocks">
                    Service Management
                </div>
            </Link>
            <Link to="/AttendanceDetals">
                <div className="blocks">
                    Attendance details
                </div>
            </Link>
            <Link to="/LoginPage">
                <div className="blocks">
                    Schedule Management
                </div>
            </Link>
            <Link to="/LoginPage">
                <div className="blocks">
                Create Schedule
                </div>
            </Link>
            <Link to="/LoginPage">
                <div className="blocks">
                Inventory Mangement
                </div>
            </Link>
            <Link to="/LoginPage">
                <div className="blocks">
                    Finance Management
                </div>
            </Link>
            <Link to="/LoginPage">
                <div className="blocks">
                    Appointment Management
                </div>
            </Link>
            <Link to="/LoginPage">
                <div className="blocks">
                    Employee Management
                </div>
            </Link>
            <Link to="/LoginPage">
                <div className="blocks">
                    Add employee
                </div>
            </Link>
            <Link to="/LoginPage">
                <div className="blocks">
                    Salary details
                </div>
            </Link>
            <Link to="/LoginPage">
                <div className="blocks">
                    Add salary
                </div>
            </Link>
            <Link to="/LoginPage">
                <div className="blocks">
                    Supplier Management
                </div>
            </Link>
            <Link to="/LoginPage">
                <div className="blocks">
                    Supplier details
                </div>
            </Link>
            <Link to="/LoginPage">
                <div className="blocks">
                    Add supplier
                </div>
            </Link>
            <Link to="/LoginPage">
                <div className="blocks">
                    Order details
                </div>
            </Link>
            <Link to="/LoginPage">
                <div className="blocks">
                    Add order
                </div>
            </Link>
            </div>            
        </div>
    </div>
    </div>
  )
}
