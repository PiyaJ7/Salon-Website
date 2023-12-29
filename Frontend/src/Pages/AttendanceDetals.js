import React from 'react'
import './attendanceDetals.css';
import { TiThMenu } from "react-icons/ti";
import Header from '../Components/Header';

export default function AttendanceDetals() {
  return (
    <div>
        <Header />
        <div className="attendanceDetals">
            <div className="attendanceDetals-header">
                <div className="attendanceDetals-header-left">
                    <TiThMenu size={29} className='menu-icon'/>
                    <h1>Attendance Detals</h1>
                </div>
                <div className="attendanceDetals-header-right">
                    <button className='add-attendance-button'>Add attendance</button>
                    <button className='download-attendance-button'>Download daily attendance</button>
                    <button className='shedule-attendance-button'>Schedule</button>
                </div>
            </div>
            <div className="attendanceDetals-body">
                <div className="sort-button">
                    <button className='sort-by-date-button'>Sort by date</button>
                </div>
                <table>
                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </table>            
            </div>
        </div>
    </div>
  )
}
